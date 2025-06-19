import React, { useState } from 'react';
import { Heart, Info, ShoppingCart, Eye, X } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-zinc-100 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-[4/3] bg-gradient-to-br from-zinc-50 to-emerald-50/50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`w-8 h-8 rounded-xl backdrop-blur-md border transition-all duration-300 flex items-center justify-center ${
              isLiked 
                ? 'bg-emerald-100/90 border-emerald-300 text-emerald-600' 
                : 'bg-white/90 border-zinc-200 text-zinc-600 hover:bg-emerald-50/90'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
        </div>
        
        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-zinc-200 shadow-sm">
            <span className="text-sm font-semibold text-zinc-900">{product.price}</span>
          </div>
        </div>
        
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-zinc-900 leading-tight group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-zinc-600 text-sm leading-relaxed mb-5">{product.description}</p>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
            Детальніше
          </button>
          <button className="w-10 h-10 border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-xl flex items-center justify-center transition-all duration-300 group">
            <ShoppingCart className="w-4 h-4 text-zinc-600 group-hover:text-emerald-600" />
          </button>
          <button className="w-10 h-10 border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-xl flex items-center justify-center transition-all duration-300 group">
            <Eye className="w-4 h-4 text-zinc-600 group-hover:text-emerald-600" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;