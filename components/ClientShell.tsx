'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ProductCard } from './ProductCard';
import { CartSidebar } from './CartSidebar';
import { AdminDashboard } from './AdminDashboard';
import { AuthModal } from './AuthModal';
import { Footer } from './Footer';
import { MOCK_PRODUCTS } from '../constants';
import { Product, CartItem, AppView, User } from '../types';

export default function ClientShell() {
  // State
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    if (loggedInUser.role === 'admin') {
      setCurrentView(AppView.ADMIN);
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={setCurrentView}
        user={user}
        onLoginClick={() => setIsAuthOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === AppView.ADMIN ? (
          <AdminDashboard />
        ) : (
          <>
            <Hero />
            <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="flex items-center justify-between mb-12">
                 <h2 className="text-3xl font-bold text-slate-900 font-serif">Featured Essentials</h2>
                 <a href="#" className="text-sm font-bold uppercase tracking-widest text-[#E3B64F] hover:text-black transition-colors">View All</a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {MOCK_PRODUCTS.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />

      {/* Overlays */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}