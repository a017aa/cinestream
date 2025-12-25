import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LogOut, Lock, Mail, User, Eye, EyeOff, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const Account: React.FC = () => {
  const { user, logout, updatePassword } = useAuth();
  const navigate = useNavigate();
  
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Account - CineStream</title>
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-8">Please log in to view your account</p>
            <Link to="/login">
              <Button variant="hero">Go to Login</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!currentPassword) {
      toast.error('Please enter your current password');
      setIsLoading(false);
      return;
    }
    if (!newPassword) {
      toast.error('Please enter a new password');
      setIsLoading(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }
    if (newPassword === currentPassword) {
      toast.error('New password must be different from current password');
      setIsLoading(false);
      return;
    }

    const success = updatePassword(currentPassword, newPassword);
    if (success) {
      toast.success('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowPasswordForm(false);
    } else {
      toast.error('Current password is incorrect');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>My Account - CineStream</title>
        <meta name="description" content="Manage your CineStream account" />
      </Helmet>

      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <span className="font-display text-3xl text-primary">CINE</span>
              <span className="font-display text-3xl text-foreground">STREAM</span>
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">My Account</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* User Information Card */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Account Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <User className="w-4 h-4" />
                      Username
                    </label>
                    <p className="text-lg text-foreground font-medium">{user.username}</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <p className="text-lg text-foreground font-medium">{user.email}</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Crown className="w-4 h-4" />
                      Membership
                    </label>
                    <div className="flex flex-col gap-3">
                      <span className={`px-4 py-2 rounded-full font-medium w-fit ${
                        user.isPremium 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {user.isPremium ? `Premium - ${user.premiumPlan || 'Active'}` : 'Free Plan'}
                      </span>
                      {user.isPremium && (
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment Date:</span>
                            <span className="text-foreground font-medium">{user.paymentDate ? new Date(user.paymentDate).toLocaleDateString() : 'N/A'}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Next Payment:</span>
                            <span className="text-foreground font-medium">{user.nextPaymentDate ? new Date(user.nextPaymentDate).toLocaleDateString() : 'N/A'}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Card Ending:</span>
                            <span className="text-foreground font-medium">{user.cardLast4 ? `•••• ${user.cardLast4}` : 'Not available'}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Reset Card */}
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Security
                </h2>

                {!showPasswordForm ? (
                  <Button 
                    onClick={() => setShowPasswordForm(true)}
                    variant="secondary"
                  >
                    Change Password
                  </Button>
                ) : (
                  <form onSubmit={handlePasswordReset} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Current Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type={showCurrentPassword ? 'text' : 'password'}
                          placeholder="Enter current password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-secondary border-border"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type={showNewPassword ? 'text' : 'password'}
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-secondary border-border"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Confirm New Password</label>
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-3 h-12 bg-secondary border-border"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="submit" 
                        variant="hero"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Updating...' : 'Update Password'}
                      </Button>
                      <Button 
                        type="button"
                        variant="secondary"
                        onClick={() => {
                          setShowPasswordForm(false);
                          setCurrentPassword('');
                          setNewPassword('');
                          setConfirmPassword('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Premium Status */}
              {!user.isPremium ? (
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Upgrade to Premium</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Get unlimited access to all content</p>
                  <Link to="/premium" className="block">
                    <Button variant="hero" className="w-full">
                      View Premium Plans
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Upgrade Plan</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Switch to a higher premium tier for more features</p>
                  <Link to="/premium" className="block">
                    <Button variant="hero" className="w-full">
                      View Premium Plans
                    </Button>
                  </Link>
                </div>
              )}

              {/* Logout Button */}
              <Button 
                onClick={handleLogout}
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>

              {/* Back to Home */}
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
