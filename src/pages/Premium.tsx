import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Crown, Zap, Users, Heart } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface PlanProps {
  name: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
  features: string[];
  isPopular?: boolean;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, duration, icon, features, isPopular }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate(`/payment?plan=${name.toLowerCase()}&price=${price}`);
  };

  return (
    <div className={`relative p-6 md:p-8 rounded-2xl ${
      isPopular 
        ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-xl shadow-primary/20' 
        : 'bg-card border border-border'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${isPopular ? 'bg-primary/20' : 'bg-secondary'}`}>
          {icon}
        </div>
        <h3 className="font-display text-2xl text-foreground">{name}</h3>
      </div>
      
      <div className="mb-6">
        <span className="font-display text-4xl md:text-5xl text-foreground">${price}</span>
        <span className="text-muted-foreground ml-2">/ {duration}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-foreground/80">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isPopular ? 'hero' : 'outline'} 
        className="w-full"
        onClick={handleSubscribe}
      >
        Subscribe Now
      </Button>
    </div>
  );
};

const Premium: React.FC = () => {
  const plans: PlanProps[] = [
    {
      name: 'Student',
      price: '5.99',
      duration: '1 month',
      icon: <Zap className="w-6 h-6 text-primary" />,
      features: [
        'Access to all movies',
        'HD streaming quality',
        '1 device at a time',
        'Cancel anytime',
        'Valid student ID required'
      ]
    },
    {
      name: 'Individual',
      price: '16.99',
      duration: '3 months',
      icon: <Crown className="w-6 h-6 text-primary" />,
      features: [
        'Access to all movies',
        '4K Ultra HD streaming',
        '2 devices at a time',
        'Download for offline',
        'No ads',
        'Early access to new releases'
      ],
      isPopular: true
    },
    {
      name: 'Family',
      price: '34.99',
      duration: 'lifetime',
      icon: <Heart className="w-6 h-6 text-primary" />,
      features: [
        'Access to all movies',
        '4K Ultra HD streaming',
        '4 devices at a time',
        'Download for offline',
        'No ads',
        'Kids profiles',
        'Parental controls'
      ]
    },
    {
      name: 'Duo',
      price: '59.99',
      duration: 'lifetime',
      icon: <Users className="w-6 h-6 text-primary" />,
      features: [
        'Everything in Family',
        '6 devices at a time',
        'VIP customer support',
        'Exclusive content',
        'Behind the scenes access',
        'Annual movie premiere invites'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Plans - CineStream</title>
        <meta name="description" content="Choose the perfect premium plan for unlimited movie streaming on CineStream." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Crown className="w-5 h-5" />
              <span className="font-medium">Premium Membership</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Unlock Unlimited
              <span className="block text-primary">Entertainment</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Get access to thousands of movies, exclusive content, and premium features 
              with our flexible subscription plans.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {plans.map((plan) => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 border-t border-border/50">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
              Why Go Premium?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">No Ads</h3>
                <p className="text-muted-foreground">
                  Enjoy uninterrupted streaming without any advertisements
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">4K Quality</h3>
                <p className="text-muted-foreground">
                  Watch in stunning Ultra HD quality on supported devices
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Multiple Devices</h3>
                <p className="text-muted-foreground">
                  Share your account with family and watch on multiple screens
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <span className="font-display text-2xl text-primary">CINE</span>
                <span className="font-display text-2xl text-foreground">STREAM</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                © 2025 CineStream. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Premium;
