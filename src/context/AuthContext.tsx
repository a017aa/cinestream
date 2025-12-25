import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  isPremium: boolean;
  premiumPlan?: string;
  paymentDate?: string;
  nextPaymentDate?: string;
  cardLast4?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (usernameOrEmail: string, password: string) => boolean;
  logout: () => void;
  register: (username: string, email: string, password: string) => boolean;
  setPremium: (plan: string) => void;
  updatePassword: (currentPassword: string, newPassword: string) => boolean;
  resetPassword: (email: string, newPassword: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (usernameOrEmail: string, password: string): boolean => {
    if (!usernameOrEmail || !password) return false;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) => u.username === usernameOrEmail || u.email === usernameOrEmail);
    if (!existingUser || existingUser.password !== password) return false;
    const loggedInUser: User = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
      isPremium: existingUser.isPremium || false,
      premiumPlan: existingUser.premiumPlan,
      paymentDate: existingUser.paymentDate,
      nextPaymentDate: existingUser.nextPaymentDate,
      cardLast4: existingUser.cardLast4
    };
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/\d/.test(password)) return false;
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return false;
    return true;
  };

  const register = (username: string, email: string, password: string): boolean => {
    if (!username || !email || !password) return false;
    // block usernames that contain banned words
    try {
      // lazy-import to avoid circular issues
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { containsBannedWord } = require('@/lib/profanity');
      if (containsBannedWord(username)) return false;
    } catch (e) {
      // if the check fails for any reason, continue without blocking
    }
    if (!validatePassword(password)) return false;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u: any) => u.username === username || u.email === email)) return false;
    const newUser = { 
      id: Math.random().toString(36).substr(2, 9), 
      username, 
      email, 
      password, 
      isPremium: false 
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    const authUser: User = { 
      id: newUser.id, 
      username: newUser.username, 
      email: newUser.email, 
      isPremium: newUser.isPremium 
    };
    setUser(authUser);
    localStorage.setItem('user', JSON.stringify(authUser));
    return true;
  };

  const setPremium = (plan: string, cardLast4?: string) => {
    if (user) {
      const today = new Date();
      const nextPayment = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
      
      const updatedUser = { 
        ...user, 
        isPremium: true, 
        premiumPlan: plan,
        paymentDate: today.toISOString().split('T')[0],
        nextPaymentDate: nextPayment.toISOString().split('T')[0],
        cardLast4: cardLast4 || '****'
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Update user in users array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex].isPremium = true;
        users[userIndex].premiumPlan = plan;
        users[userIndex].paymentDate = today.toISOString().split('T')[0];
        users[userIndex].nextPaymentDate = nextPayment.toISOString().split('T')[0];
        users[userIndex].cardLast4 = cardLast4 || '****';
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  };

  const updatePassword = (currentPassword: string, newPassword: string): boolean => {
    if (!user) return false;
    if (!newPassword || !validatePassword(newPassword)) return false;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userToUpdate = users.find((u: any) => u.id === user.id);

    if (!userToUpdate || userToUpdate.password !== currentPassword) {
      return false;
    }

    userToUpdate.password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  const resetPassword = (email: string, newPassword: string): boolean => {
    if (!email || !newPassword || !validatePassword(newPassword)) return false;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userToReset = users.find((u: any) => u.email === email);

    if (!userToReset) {
      return false;
    }

    userToReset.password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout, 
      register,
      setPremium,
      updatePassword,
      resetPassword 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
