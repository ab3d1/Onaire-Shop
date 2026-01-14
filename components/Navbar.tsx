import React from 'react';
import { ShoppingBag, Menu, Search, User as UserIcon } from 'lucide-react';
import { AppView, User } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (view: AppView) => void;
  user: User | null;
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  onCartClick, 
  onNavigate, 
  user,
  onLoginClick
}) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-[#121212] border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate(AppView.HOME)}>
            <span className="font-bold text-2xl tracking-[0.2em] text-[#E3B64F]">ONAIRE</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12">
             {['COLLECTIONS', 'KITCHENWARE', 'APPLIANCES', 'HOME'].map((item) => (
               <a 
                 key={item} 
                 href="#" 
                 className="text-sm font-medium text-gray-300 hover:text-[#E3B64F] transition-colors tracking-widest"
               >
                 {item}
               </a>
             ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-[#E3B64F] transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {user ? (
              <button 
                onClick={() => user.role === 'admin' ? onNavigate(AppView.ADMIN) : null}
                className="text-sm font-medium text-gray-300 hover:text-[#E3B64F] flex items-center"
              >
                {user.role === 'admin' ? 'DASHBOARD' : `HI, ${user.name.split(' ')[0].toUpperCase()}`}
              </button>
            ) : (
              <button 
                onClick={onLoginClick}
                className="text-white hover:text-[#E3B64F] transition-colors"
              >
                <UserIcon className="h-5 w-5" />
              </button>
            )}

            <button 
              className="relative text-white hover:text-[#E3B64F] transition-colors"
              onClick={onCartClick}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold leading-none text-black bg-[#E3B64F] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};