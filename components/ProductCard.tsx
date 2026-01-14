import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-none border border-transparent hover:border-gray-100 transition-all duration-300">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {product.stock < 20 && (
            <div className="absolute top-0 left-0 bg-[#E3B64F] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                Low Stock
            </div>
        )}
        
        <button
            onClick={() => onAddToCart(product)}
            className="absolute bottom-4 right-4 p-3 bg-white text-black shadow-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
            aria-label="Add to cart"
        >
            <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 pt-6 pb-4 flex flex-col">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
        <h3 className="text-lg font-medium text-gray-900 mb-1 serif leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
            {product.description}
        </p>
        <p className="text-lg font-medium text-gray-900 mt-auto">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};