interface BiasFlag {
  type: string;
  severity: 'low' | 'medium' | 'high';
  matches?: string[];
  context?: string;
}

interface ModelFitIndicator {
  type: 'overfitting' | 'underfitting';
  indicators: string[];
  confidence: number;
}

export class TheologicalBiasDetector {
  // Patterns specific to theological discussions
  private biasPatterns = {
    denominational: {
      pattern: /\b(protestant|catholic|orthodox|evangelical|baptist|methodist|lutheran)\s+(is|are)\s+(wrong|heretical|false|misguided)/gi,
      severity: 'high' as const
    },
    gender: {
      pattern: /\b(women|men)\s+(cannot|shouldn't|can't|must not)\s+be\s+(priests|deacons|ministers|leaders)/gi,
      severity: 'medium' as const
    },
    absolute_statements: {
      pattern: /\b(only|all|never|always|must|everyone)\s+.*\s+(saved|damned|condemned|elect)/gi,
      severity: 'medium' as const
    },
    political_bias: {
      pattern: /\b(liberal|conservative|republican|democrat|left-wing|right-wing)\s+(theology|christians?)/gi,
      severity: 'low' as const
    },
    cultural_superiority: {
      pattern: /\b(western|eastern|american|european)\s+(christianity|theology)\s+is\s+(superior|better|more correct)/gi,
      severity: 'high' as const
    }
  };

  // Topics to track for theological analysis
  private theologicalTopics = [
    'trinity', 'incarnation', 'eucharist', 'baptism', 'salvation',
    'mary', 'saints', 'pope', 'scripture', 'tradition',
    'grace', 'faith', 'works', 'predestination', 'free will',
    'heaven', 'hell', 'purgatory', 'resurrection', 'judgment'
  ];

  async detectBias(content: string): Promise<BiasFlag[]> {
    const flags: BiasFlag[] = [];
    const lowerContent = content.toLowerCase();

    // Check for bias patterns
    for (const [biasType, config] of Object.entries(this.biasPatterns)) {
      const matches = content.match(config.pattern);
      if (matches) {
        flags.push({
          type: biasType,
          severity: config.severity,
          matches: matches,
          context: this.extractContext(content, matches[0])
        });
      }
    }

    // Check for unbalanced denominational mentions
    const denomCount = this.countDenominationalMentions(lowerContent);
    if (this.hasUnbalancedDenominationalFocus(denomCount)) {
      flags.push({
        type: 'denominational_imbalance',
        severity: 'low',
        context: `Heavy focus on: ${Object.entries(denomCount).sort((a, b) => b[1] - a[1])[0][0]}`
      });
    }

    return flags;
  }

  extractTheologicalTopics(content: string): string[] {
    const lowerContent = content.toLowerCase();
    return this.theologicalTopics.filter(topic => 
      lowerContent.includes(topic)
    );
  }

  private countDenominationalMentions(content: string): Record<string, number> {
    const denominations = [
      'catholic', 'protestant', 'orthodox', 'anglican',
      'lutheran', 'baptist', 'methodist', 'presbyterian'
    ];
    
    const counts: Record<string, number> = {};
    denominations.forEach(denom => {
      const regex = new RegExp(`\\b${denom}\\b`, 'gi');
      const matches = content.match(regex);
      if (matches) counts[denom] = matches.length;
    });
    
    return counts;
  }

  private hasUnbalancedDenominationalFocus(counts: Record<string, number>): boolean {
    const values = Object.values(counts);
    if (values.length === 0) return false;
    
    const max = Math.max(...values);
    const total = values.reduce((a, b) => a + b, 0);
    
    // If one denomination is mentioned more than 70% of the time
    return max / total > 0.7 && total > 3;
  }

  private extractContext(content: string, match: string, contextLength: number = 100): string {
    const index = content.indexOf(match);
    const start = Math.max(0, index - contextLength);
    const end = Math.min(content.length, index + match.length + contextLength);
    return content.substring(start, end);
  }

  // Analyze citations for balance
  analyzeCitations(content: string): string[] {
    const citations: string[] = [];
    
    // Biblical citations (e.g., John 3:16, Mt 5:1-12)
    const biblicalPattern = /\b([1-3]?\s*[A-Za-z]+)\s+(\d+):(\d+)(-\d+)?/g;
    const biblicalMatches = content.match(biblicalPattern);
    if (biblicalMatches) citations.push(...biblicalMatches);
    
    // Church document citations
    const documentPatterns = [
      /\bCCC\s*\d+/g, // Catechism
      /\bLumen Gentium\s*\d+/g, // Vatican II
      /\bGaudium et Spes\s*\d+/g,
      /\bCanon\s*\d+/g, // Canon Law
    ];
    
    documentPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) citations.push(...matches);
    });
    
    return citations;
  }

  // Detect overfitting/underfitting in model responses
  detectModelFit(content: string, userQuestion: string): ModelFitIndicator | null {
    const indicators: string[] = [];
    let type: 'overfitting' | 'underfitting' | null = null;
    
    // Overfitting indicators
    const overfittingPatterns = {
      // Excessive specificity to training data
      verbatim_quotes: /\b(as I always say|as we discussed in training|according to my training)\b/gi,
      // Over-memorization of specific examples
      exact_repetition: /(\b\w{10,}\b).*\1.*\1/gi, // Same long word 3+ times
      // Too narrow interpretation
      rigid_responses: /\b(only|exclusively|must always|never any exceptions)\b/gi,
      // Excessive technical jargon for simple questions
      over_technical: this.countTechnicalTerms(content) > 10 && userQuestion.length < 50
    };

    // Underfitting indicators  
    const underfittingPatterns = {
      // Vague, generic responses
      generic_phrases: /\b(it depends|various factors|many aspects|different perspectives|complex topic)\b/gi,
      // Lack of specific theological knowledge
      no_citations: this.analyzeCitations(content).length === 0 && this.extractTheologicalTopics(content).length > 0,
      // Avoiding the question
      deflection: /\b(I cannot|I don't|consult a priest|speak to|ask your)\b/gi,
      // Short, uninformative response
      too_brief: content.split(' ').length < 20 && !userQuestion.toLowerCase().includes('yes or no')
    };

    // Check overfitting
    Object.entries(overfittingPatterns).forEach(([key, pattern]) => {
      if (typeof pattern === 'boolean' && pattern) {
        indicators.push(key);
        type = 'overfitting';
      } else if (pattern instanceof RegExp && pattern.test(content)) {
        indicators.push(key);
        type = 'overfitting';
      }
    });

    // Check underfitting (only if not overfitting)
    if (!type) {
      Object.entries(underfittingPatterns).forEach(([key, pattern]) => {
        if (typeof pattern === 'boolean' && pattern) {
          indicators.push(key);
          type = 'underfitting';
        } else if (pattern instanceof RegExp && pattern.test(content)) {
          const matches = content.match(pattern);
          if (matches && matches.length > 2) { // Multiple generic phrases
            indicators.push(key);
            type = 'underfitting';
          }
        }
      });
    }

    if (!type || indicators.length === 0) return null;

    return {
      type,
      indicators,
      confidence: Math.min(indicators.length * 0.25, 1.0) // Max confidence at 4 indicators
    };
  }

  private countTechnicalTerms(content: string): number {
    const technicalTerms = [
      'soteriology', 'christology', 'pneumatology', 'ecclesiology',
      'eschatology', 'theodicy', 'apologetics', 'hermeneutics',
      'exegesis', 'eisegesis', 'kerygma', 'parousia', 'theosis',
      'hypostatic', 'transubstantiation', 'consubstantial'
    ];
    
    let count = 0;
    const lowerContent = content.toLowerCase();
    technicalTerms.forEach(term => {
      if (lowerContent.includes(term)) count++;
    });
    
    return count;
  }
}

export const biasDetector = new TheologicalBiasDetector();