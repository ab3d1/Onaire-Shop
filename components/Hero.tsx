import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#121212] overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Kitchen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <p className="text-[#E3B64F] font-medium tracking-[0.2em] text-sm mb-6 uppercase">
            The Culinary Collection
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Master The Art of <br />
            <span className="text-[#E3B64F] serif italic">Modern Living</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-lg leading-relaxed mb-10">
            Discover premium kitchenware and home essentials designed for the discerning home. Elevate your everyday with our curated selection.
          </p>
          
          <button
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-sm font-bold tracking-widest uppercase text-black bg-[#E3B64F] hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop Kitchenware
          </button>
        </div>
      </div>
    </div>
  );
};