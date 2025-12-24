import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'individual';
  const price = searchParams.get('price') || '16.99';
  
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { setPremium, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ').substr(0, 19) : '';
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substr(0, 2) + '/' + cleaned.substr(2, 2);
    }
    return cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setPremium(plan.charAt(0).toUpperCase() + plan.slice(1));
    toast.success('Payment successful! Welcome to Premium!');
    navigate('/');
    setIsProcessing(false);
  };

  return (
    <>
      <Helmet>
        <title>Payment - CineStream</title>
        <meta name="description" content="Complete your premium subscription payment." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/premium" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Plans
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-2xl text-primary">CINE</span>
              <span className="font-display text-2xl text-foreground">STREAM</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Payment Form */}
              <div className="order-2 lg:order-1">
                <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  Payment Details
                </h1>
                <p className="text-muted-foreground mb-8">
                  Complete your subscription to {plan.charAt(0).toUpperCase() + plan.slice(1)} plan
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Cardholder Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="h-12 bg-secondary border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        className="pl-10 h-12 bg-secondary border-border"
                        maxLength={19}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Expiry Date</label>
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                        className="h-12 bg-secondary border-border"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">CVV</label>
                      <Input
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substr(0, 3))}
                        className="h-12 bg-secondary border-border"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-4 rounded-lg bg-secondary/50 text-muted-foreground text-sm">
                    <Lock className="w-4 h-4 flex-shrink-0" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-14"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${price}`}
                  </Button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="order-1 lg:order-2">
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border sticky top-8">
                  <h2 className="font-display text-2xl text-foreground mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</span>
                      <span className="text-foreground font-medium">${price}</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-center">
                      <span className="font-display text-xl text-foreground">Total</span>
                      <span className="font-display text-2xl text-primary">${price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium text-foreground">What's included:</h3>
                    <ul className="space-y-2">
                      {[
                        'Access to all movies',
                        '4K Ultra HD streaming',
                        'Download for offline',
                        'No advertisements',
                        'Cancel anytime'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
