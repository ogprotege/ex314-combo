'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const DONATION_AMOUNTS = [10, 25, 50, 100];

export function DonationForm() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    const parsed = parseFloat(customAmount);
    return isNaN(parsed) ? 0 : parsed;
  };

  const handleDonation = async () => {
    const amount = getFinalAmount();
    
    if (amount < 1) {
      toast({
        title: 'Invalid Amount',
        description: 'Please select or enter a valid donation amount.',
        variant: 'destructive'
      });
      return;
    }

    setIsProcessing(true);

    // Payment Integration Options:
    // 1. Stripe - Most popular, great for US non-profits
    // 2. PayPal Giving Fund - Specifically for non-profits
    // 3. Donorbox - Designed for religious organizations
    // 4. Give Lively - Free for non-profits
    
    toast({
      title: 'Payment Integration Needed',
      description: `Ready to process $${amount} ${frequency} donation. Please integrate a payment provider.`,
    });

    // Example Stripe integration:
    /*
    try {
      const response = await fetch('/api/create-donation-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          frequency,
          currency: 'usd'
        })
      });
      
      const { sessionUrl } = await response.json();
      window.location.href = sessionUrl;
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to process donation. Please try again.',
        variant: 'destructive'
      });
    }
    */

    setIsProcessing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Support our mission with a one-time or recurring gift</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Donation Amount</Label>
          <div className="grid grid-cols-4 gap-2">
            {DONATION_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? 'default' : 'outline'}
                className="w-full"
                onClick={() => handleAmountSelect(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>
          <Input
            id="amount"
            type="number"
            placeholder="Other amount"
            className="mt-2"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frequency</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={frequency === 'one-time' ? 'default' : 'outline'}
              className="w-full"
              onClick={() => setFrequency('one-time')}
            >
              One-time
            </Button>
            <Button
              variant={frequency === 'monthly' ? 'default' : 'outline'}
              className="w-full"
              onClick={() => setFrequency('monthly')}
            >
              Monthly
            </Button>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {getFinalAmount() > 0 && (
            <p>
              You're donating: <strong>${getFinalAmount()}</strong> {frequency === 'monthly' ? 'per month' : ''}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleDonation}
          disabled={isProcessing || getFinalAmount() < 1}
        >
          {isProcessing ? 'Processing...' : 'Proceed to Payment'}
        </Button>
      </CardFooter>
    </Card>
  );
}

// Payment Integration Recommendations:
/*
1. **Stripe** (Recommended)
   - Best for: General donations, US and international
   - Fees: 2.9% + $0.30 per transaction
   - Features: Recurring donations, Apple/Google Pay, donor receipts
   - Implementation: Use @stripe/stripe-js and stripe npm packages

2. **PayPal Giving Fund**
   - Best for: Registered 501(c)(3) organizations
   - Fees: 0% transaction fees for enrolled charities
   - Features: PayPal/Venmo integration, donor coverage of fees
   - Implementation: PayPal SDK or Checkout API

3. **Donorbox**
   - Best for: Religious organizations and churches
   - Fees: Platform fee + payment processing
   - Features: Recurring giving, donor management, campaigns
   - Implementation: Embed widget or API integration

4. **Give Lively**
   - Best for: US non-profits (free platform)
   - Fees: 0% platform fee, standard processing rates
   - Features: Text-to-give, peer-to-peer fundraising
   - Implementation: JavaScript widget or API

5. **Square**
   - Best for: Organizations already using Square
   - Fees: 2.9% + $0.30 per transaction
   - Features: In-person and online donations
   - Implementation: Square Web Payments SDK

For Catholic organizations specifically, consider:
- **ParishSOFT** - Church management with giving features
- **Pushpay** - Faith-based giving platform
- **Tithe.ly** - Church giving solution
*/