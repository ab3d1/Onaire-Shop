import React, { useState } from 'react';
import { X, Mail, Lock, Instagram } from 'lucide-react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    const user: User = {
      id: isAdminMode ? 'admin-1' : 'user-1',
      name: isAdminMode ? 'Admin User' : 'John Doe',
      email: isAdminMode ? 'admin@onaire.com' : 'user@example.com',
      role: isAdminMode ? 'admin' : 'customer'
    };
    onLogin(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block transform overflow-hidden bg-white text-left align-bottom shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:align-middle relative">
          
          <button 
             onClick={onClose} 
             className="absolute top-4 right-4 p-2 hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"
          >
             <X className="w-5 h-5" />
          </button>

          <div className="bg-white px-8 pt-10 pb-8 sm:px-10">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black uppercase tracking-widest">Welcome Back</h3>
                <p className="text-gray-500 mt-2 text-sm">Sign in to access your curated wishlist.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="sr-only">Email Address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-300" />
                        </div>
                        <input 
                            type="email" 
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-black focus:border-black transition-all sm:text-sm" 
                            placeholder="Email Address"
                            defaultValue={isAdminMode ? "admin@onaire.com" : "user@example.com"}
                        />
                    </div>
                </div>
                <div>
                    <label className="sr-only">Password</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-300" />
                        </div>
                        <input 
                            type="password" 
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-black focus:border-black transition-all sm:text-sm" 
                            placeholder="Password"
                            defaultValue="password"
                        />
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent shadow-sm text-sm font-bold text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black uppercase tracking-widest transition-all"
                >
                    Sign In
                </button>
            </form>

            <div className="relative mt-8 mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-gray-400 text-xs uppercase tracking-widest">Or continue with</span>
                </div>
            </div>

            <div className="space-y-3">
                <button className="group w-full flex items-center justify-center px-4 py-3 border border-gray-300 bg-white text-sm font-medium text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <div className="mr-3 group-hover:brightness-0 group-hover:invert transition-all">
                      <GoogleIcon />
                    </div>
                    Sign in with Google
                </button>

                <button className="group w-full flex items-center justify-center px-4 py-3 border border-transparent shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-black hover:via-black hover:to-black transition-all duration-300">
                    <Instagram className="w-5 h-5 mr-3" />
                    Sign in with Instagram
                </button>
            </div>

            <div className="mt-4 flex justify-center opacity-0 hover:opacity-100 transition-opacity">
                 <label className="flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        checked={isAdminMode} 
                        onChange={(e) => setIsAdminMode(e.target.checked)}
                        className="sr-only"
                    />
                    <span className="text-xs text-gray-300">Admin?</span>
                </label>
            </div>

            <div className="mt-2 text-center">
                <p className="text-sm text-gray-500">
                Don't have an account? <a href="#" className="font-medium text-black underline hover:text-gray-700">Sign up</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};