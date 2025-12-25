import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { containsBannedWord } from '@/lib/profanity';

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get('mode');
  const [isLogin, setIsLogin] = useState(modeParam !== 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showVerificationStep, setShowVerificationStep] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  
  const { login, register, resetPassword } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (pwd: string): boolean => {
    if (pwd.length < 8) return false;
    if (!/[A-Z]/.test(pwd)) return false;
    if (!/\d/.test(pwd)) return false;
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setIsLoading(true);

    try {
      if (isForgotPassword && !showVerificationStep) {
        // Step 1: Send verification code
        if (!email) {
          toast.error('Please enter your email');
          setIsLoading(false);
          return;
        }
        const code = Math.random().toString().substring(2, 8);
        setGeneratedCode(code);
        setShowVerificationStep(true);
        toast.success(`Verification code sent to ${email}\nCode: ${code}`);
      } else if (isForgotPassword && showVerificationStep) {
        // Step 2: Verify code and reset password
        if (verificationCode !== generatedCode) {
          toast.error('Invalid verification code');
          setIsLoading(false);
          return;
        }
        if (!newPassword) {
          toast.error('Please enter new password');
          setIsLoading(false);
          return;
        }
        if (!validatePassword(newPassword)) {
          toast.error('Password does not meet all requirements');
          setIsLoading(false);
          return;
        }
        const success = resetPassword(email, newPassword);
        if (success) {
          toast.success('Password reset successfully!');
          setIsForgotPassword(false);
          setShowVerificationStep(false);
          setEmail('');
          setVerificationCode('');
          setNewPassword('');
          setGeneratedCode('');
        } else {
          toast.error('Email not found');
        }
      } else if (isLogin) {
        if (!username && !email) {
          toast.error('Please enter username or email');
          setIsLoading(false);
          return;
        }
        if (!password) {
          toast.error('Please enter password');
          setIsLoading(false);
          return;
        }
        const success = login(username || email, password);
        if (success) {
          toast.success('Welcome back!');
          navigate('/');
        } else {
          toast.error('Invalid username/email or password');
        }
      } else {
        if (!username) {
          toast.error('Please enter username');
          setIsLoading(false);
          return;
        }
        // Check username for banned words / slurs
        if (containsBannedWord(username)) {
          toast.error('Username contains disallowed words — choose a different username');
          setIsLoading(false);
          return;
        }
        if (!email) {
          toast.error('Please enter email');
          setIsLoading(false);
          return;
        }
        if (!password) {
          toast.error('Please enter password');
          setIsLoading(false);
          return;
        }
        if (!validatePassword(password)) {
          setPasswordError('Password does not meet all requirements');
          toast.error('Password does not meet requirements');
              // final server-side check (simulated) — ensures banned names are not registered
              if (containsBannedWord(username)) {
                toast.error('Username contains disallowed words — choose a different username');
                setIsLoading(false);
                return;
              }
          setIsLoading(false);
          return;
        }
        const success = register(username, email, password);
        if (success) {
          toast.success('Account created successfully!');
          navigate('/');
        } else {
          toast.error('Registration failed. Username or email may already exist.');
        }
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? 'Log In' : 'Sign Up'} - CineStream</title>
        <meta name="description" content="Log in or create an account to access exclusive content on CineStream." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-8">
              <span className="font-display text-3xl text-primary">CINE</span>
              <span className="font-display text-3xl text-foreground">STREAM</span>
            </Link>

            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              {isForgotPassword ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Create Account')}
            </h1>
            <p className="text-muted-foreground mb-8">
              {isForgotPassword 
                ? showVerificationStep ? 'Enter verification code and new password' : 'Enter your email to reset your password'
                : isLogin 
                ? 'Enter your credentials to access your account' 
                : 'Fill in your details to get started'}
            </p>

            {isForgotPassword ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {!showVerificationStep ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 bg-secondary border-border"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending code...' : 'Send Verification Code'}
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Verification Code</label>
                      <Input
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="h-12 bg-secondary border-border text-center text-lg tracking-widest"
                        maxLength={6}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="pl-10 pr-10 h-12 bg-secondary border-border"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {newPassword && (
                        <div className="mt-2 p-3 rounded bg-secondary/50 border border-border">
                          <p className="text-xs font-medium text-muted-foreground mb-2">Password requirements:</p>
                          <ul className="text-xs space-y-1">
                            <li className={newPassword.length >= 8 ? 'text-primary' : 'text-muted-foreground'}>
                              {newPassword.length >= 8 ? '✓' : '○'} At least 8 characters
                            </li>
                            <li className={/[A-Z]/.test(newPassword) ? 'text-primary' : 'text-muted-foreground'}>
                              {/[A-Z]/.test(newPassword) ? '✓' : '○'} At least one uppercase letter
                            </li>
                            <li className={/\d/.test(newPassword) ? 'text-primary' : 'text-muted-foreground'}>
                              {/\d/.test(newPassword) ? '✓' : '○'} At least one number
                            </li>
                            <li className={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword) ? 'text-primary' : 'text-muted-foreground'}>
                              {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword) ? '✓' : '○'} At least one symbol
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Resetting...' : 'Reset Password'}
                    </Button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotPassword(false);
                    setShowVerificationStep(false);
                    setEmail('');
                    setVerificationCode('');
                    setNewPassword('');
                  }}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Back to login
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => {
                        const v = e.target.value;
                        setUsername(v);
                        if (v && containsBannedWord(v)) {
                          setUsernameError('Username contains disallowed words');
                        } else {
                          setUsernameError('');
                        }
                      }}
                      className="pl-10 h-12 bg-secondary border-border"
                    />
                  </div>
                    {usernameError && (
                      <p className="text-sm text-red-500 mt-2">{usernameError}</p>
                    )}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  {isLogin ? 'Username or Email' : 'Email'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={isLogin ? 'text' : 'email'}
                    placeholder={isLogin ? 'Enter username or email' : 'Enter email'}
                    value={isLogin ? username : email}
                    onChange={(e) => isLogin ? setUsername(e.target.value) : setEmail(e.target.value)}
                    className="pl-10 h-12 bg-secondary border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-secondary border-border"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {!isLogin && password && (
                  <div className="mt-2 p-3 rounded bg-secondary/50 border border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Password requirements:</p>
                    <ul className="text-xs space-y-1">
                      <li className={password.length >= 8 ? 'text-primary' : 'text-muted-foreground'}>
                        {password.length >= 8 ? '✓' : '○'} At least 8 characters
                      </li>
                      <li className={/[A-Z]/.test(password) ? 'text-primary' : 'text-muted-foreground'}>
                        {/[A-Z]/.test(password) ? '✓' : '○'} At least one uppercase letter
                      </li>
                      <li className={/\d/.test(password) ? 'text-primary' : 'text-muted-foreground'}>
                        {/\d/.test(password) ? '✓' : '○'} At least one number
                      </li>
                      <li className={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? 'text-primary' : 'text-muted-foreground'}>
                        {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? '✓' : '○'} At least one symbol
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                className="w-full h-12"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait...' : (isLogin ? 'Log In' : 'Sign Up')}
              </Button>
            </form>
            )}

            <div className="mt-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <p className="text-muted-foreground">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-primary hover:underline font-medium"
                  >
                    {isLogin ? 'Create one' : 'Log in'}
                  </button>
                </p>
                {isLogin && (
                  <button
                    onClick={() => setIsForgotPassword(true)}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Forgot your password?
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop"
            alt="Cinema"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </div>
    </>
  );
};

export default Login;
