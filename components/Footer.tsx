import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                <span className="font-bold text-xl tracking-[0.2em] text-[#E3B64F] block mb-6">ONAIRE</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Elevating home living through exceptional design and uncompromising quality.
                </p>
            </div>
            
            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#E3B64F]">Shop</h4>
                <ul className="space-y-4">
                    {['New Arrivals', 'Best Sellers', 'Kitchenware', 'Appliances', 'Sale'].map(item => (
                        <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#E3B64F]">Support</h4>
                <ul className="space-y-4">
                    {['Contact Us', 'Shipping & Returns', 'FAQ', 'Care Guide', 'Warranty'].map(item => (
                        <li key={item}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a></li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#E3B64F]">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and design inspiration.</p>
                <div className="flex">
                    <input type="email" placeholder="Email Address" className="bg-transparent border-b border-gray-600 py-2 px-0 w-full text-white placeholder-gray-500 focus:outline-none focus:border-[#E3B64F]" />
                    <button className="text-sm font-bold uppercase tracking-widest text-[#E3B64F] ml-4 hover:text-white">Join</button>
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ONAIRE Home Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                    <a key={item} href="#" className="text-xs text-gray-500 hover:text-white">{item}</a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};