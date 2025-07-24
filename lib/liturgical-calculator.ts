/**
 * Dynamic Liturgical Calendar Calculator
 * Calculates liturgical seasons and dates for any year
 */

// Calculate Easter date using Computus algorithm
export function calculateEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  
  return new Date(year, month - 1, day);
}

// Calculate liturgical year (A, B, or C)
export function getLiturgicalYear(date: Date): string {
  const year = date.getFullYear();
  const advent = getFirstSundayOfAdvent(year);
  
  // If before Advent, use previous year's cycle
  const liturgicalYear = date < advent ? year - 1 : year;
  
  // Year C: divisible by 3
  // Year A: remainder 1
  // Year B: remainder 2
  const remainder = liturgicalYear % 3;
  return remainder === 0 ? 'C' : remainder === 1 ? 'A' : 'B';
}

// Get the first Sunday of Advent (4th Sunday before Christmas)
export function getFirstSundayOfAdvent(year: number): Date {
  const christmas = new Date(year, 11, 25); // December 25
  const dayOfWeek = christmas.getDay();
  
  // Find the Sunday on or before November 30
  const stAndrew = new Date(year, 10, 30); // November 30
  const stAndrewDay = stAndrew.getDay();
  
  // If Nov 30 is Sunday, that's the first possible First Sunday of Advent
  // Otherwise, go to the previous Sunday
  const daysToSubtract = stAndrewDay === 0 ? 0 : stAndrewDay;
  const firstPossibleAdvent = new Date(stAndrew);
  firstPossibleAdvent.setDate(stAndrew.getDate() - daysToSubtract);
  
  // Count 4 Sundays before Christmas
  const fourthSundayBeforeChristmas = new Date(christmas);
  fourthSundayBeforeChristmas.setDate(christmas.getDate() - ((dayOfWeek || 7) + 21));
  
  // First Sunday of Advent is the later of the two dates
  return firstPossibleAdvent > fourthSundayBeforeChristmas ? firstPossibleAdvent : fourthSundayBeforeChristmas;
}

// Calculate all liturgical seasons for a given year
export function calculateLiturgicalSeasons(year: number) {
  const easter = calculateEaster(year);
  const advent = getFirstSundayOfAdvent(year - 1);
  const nextAdvent = getFirstSundayOfAdvent(year);
  
  // Calculate key dates based on Easter
  const ashWednesday = new Date(easter);
  ashWednesday.setDate(easter.getDate() - 46);
  
  const palmSunday = new Date(easter);
  palmSunday.setDate(easter.getDate() - 7);
  
  const holyThursday = new Date(easter);
  holyThursday.setDate(easter.getDate() - 3);
  
  const goodFriday = new Date(easter);
  goodFriday.setDate(easter.getDate() - 2);
  
  const pentecost = new Date(easter);
  pentecost.setDate(easter.getDate() + 49);
  
  const trinity = new Date(pentecost);
  trinity.setDate(pentecost.getDate() + 7);
  
  const corpusChristi = new Date(trinity);
  corpusChristi.setDate(trinity.getDate() + 4); // Thursday after Trinity
  
  const christKing = new Date(nextAdvent);
  christKing.setDate(nextAdvent.getDate() - 7);
  
  // Calculate Epiphany (Sunday between Jan 2-8)
  let epiphany = new Date(year, 0, 2); // January 2
  while (epiphany.getDay() !== 0) {
    epiphany.setDate(epiphany.getDate() + 1);
  }
  
  // Baptism of the Lord (Sunday after Epiphany, or Monday if Epiphany is Jan 7-8)
  const baptismOfLord = new Date(epiphany);
  if (epiphany.getDate() >= 7) {
    baptismOfLord.setDate(epiphany.getDate() + 1);
  } else {
    baptismOfLord.setDate(epiphany.getDate() + 7);
  }
  
  return {
    seasons: [
      {
        name: "Advent",
        start: advent,
        end: new Date(year - 1, 11, 24), // December 24
        color: "purple"
      },
      {
        name: "Christmas Time",
        start: new Date(year - 1, 11, 25), // December 25
        end: baptismOfLord,
        color: "white"
      },
      {
        name: "Ordinary Time I",
        start: new Date(baptismOfLord.getTime() + 24 * 60 * 60 * 1000),
        end: new Date(ashWednesday.getTime() - 24 * 60 * 60 * 1000),
        color: "green"
      },
      {
        name: "Lent",
        start: ashWednesday,
        end: new Date(holyThursday.getTime() - 24 * 60 * 60 * 1000),
        color: "purple"
      },
      {
        name: "Easter Triduum",
        start: holyThursday,
        end: new Date(easter.getTime() - 24 * 60 * 60 * 1000),
        color: "red"
      },
      {
        name: "Easter Time",
        start: easter,
        end: pentecost,
        color: "white"
      },
      {
        name: "Ordinary Time II",
        start: new Date(pentecost.getTime() + 24 * 60 * 60 * 1000),
        end: new Date(nextAdvent.getTime() - 24 * 60 * 60 * 1000),
        color: "green"
      },
      {
        name: "Advent",
        start: nextAdvent,
        end: new Date(year, 11, 24), // December 24
        color: "purple"
      }
    ],
    specialDays: {
      easter,
      ashWednesday,
      palmSunday,
      holyThursday,
      goodFriday,
      pentecost,
      trinity,
      corpusChristi,
      christKing,
      epiphany,
      baptismOfLord
    }
  };
}

// Get current liturgical season for a given date
export function getCurrentLiturgicalSeason(date: Date): { name: string; color: string; start?: Date; end?: Date } {
  const year = date.getFullYear();
  const { seasons } = calculateLiturgicalSeasons(year);
  
  for (const season of seasons) {
    if (date >= season.start && date <= season.end) {
      return season;
    }
  }
  
  // If not found in current year, check previous year (for early January)
  const { seasons: prevSeasons } = calculateLiturgicalSeasons(year - 1);
  for (const season of prevSeasons) {
    if (date >= season.start && date <= season.end) {
      return season;
    }
  }
  
  // Default to Ordinary Time if no match found
  return {
    name: "Ordinary Time",
    color: "green"
  };
}

// Get liturgical week number
export function getLiturgicalWeek(date: Date): number {
  const season = getCurrentLiturgicalSeason(date);
  if (!season.start) return 1; // Default to week 1 if no start date
  const weeksSinceStart = Math.floor((date.getTime() - season.start.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
  return weeksSinceStart;
}

// Fixed feast days (month is 0-indexed)
export const FIXED_FEASTS = [
  { month: 0, day: 1, name: "Solemnity of Mary, Mother of God", type: "solemnity", color: "white" },
  { month: 0, day: 6, name: "Epiphany (Traditional)", type: "solemnity", color: "white" },
  { month: 1, day: 2, name: "Presentation of the Lord", type: "feast", color: "white" },
  { month: 2, day: 19, name: "St. Joseph", type: "solemnity", color: "white" },
  { month: 2, day: 25, name: "Annunciation", type: "solemnity", color: "white" },
  { month: 5, day: 24, name: "Nativity of St. John the Baptist", type: "solemnity", color: "white" },
  { month: 5, day: 29, name: "Sts. Peter and Paul", type: "solemnity", color: "red" },
  { month: 7, day: 6, name: "Transfiguration", type: "feast", color: "white" },
  { month: 7, day: 15, name: "Assumption of Mary", type: "solemnity", color: "white" },
  { month: 8, day: 14, name: "Exaltation of the Holy Cross", type: "feast", color: "red" },
  { month: 10, day: 1, name: "All Saints", type: "solemnity", color: "white" },
  { month: 10, day: 2, name: "All Souls", type: "commemoration", color: "purple" },
  { month: 11, day: 8, name: "Immaculate Conception", type: "solemnity", color: "white" },
  { month: 11, day: 25, name: "Christmas", type: "solemnity", color: "white" },
  { month: 11, day: 26, name: "St. Stephen", type: "feast", color: "red" },
  { month: 11, day: 27, name: "St. John the Evangelist", type: "feast", color: "white" },
  { month: 11, day: 28, name: "Holy Innocents", type: "feast", color: "red" }
];

// Get feast for a specific date
export function getFeastForDate(date: Date) {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Check fixed feasts
  const fixedFeast = FIXED_FEASTS.find(f => f.month === month && f.day === day);
  if (fixedFeast) return fixedFeast;
  
  // Check moveable feasts
  const { specialDays } = calculateLiturgicalSeasons(year);
  
  const dateStr = date.toDateString();
  
  if (dateStr === specialDays.easter.toDateString()) {
    return { name: "Easter Sunday", type: "solemnity", color: "white" };
  }
  if (dateStr === specialDays.pentecost.toDateString()) {
    return { name: "Pentecost Sunday", type: "solemnity", color: "red" };
  }
  if (dateStr === specialDays.trinity.toDateString()) {
    return { name: "Trinity Sunday", type: "solemnity", color: "white" };
  }
  if (dateStr === specialDays.corpusChristi.toDateString()) {
    return { name: "Corpus Christi", type: "solemnity", color: "white" };
  }
  if (dateStr === specialDays.ashWednesday.toDateString()) {
    return { name: "Ash Wednesday", type: "special", color: "purple" };
  }
  if (dateStr === specialDays.palmSunday.toDateString()) {
    return { name: "Palm Sunday", type: "special", color: "red" };
  }
  if (dateStr === specialDays.holyThursday.toDateString()) {
    return { name: "Holy Thursday", type: "special", color: "white" };
  }
  if (dateStr === specialDays.goodFriday.toDateString()) {
    return { name: "Good Friday", type: "special", color: "red" };
  }
  if (dateStr === specialDays.christKing.toDateString()) {
    return { name: "Christ the King", type: "solemnity", color: "white" };
  }
  
  return null;
}