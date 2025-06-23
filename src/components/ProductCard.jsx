import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/contact');
  };

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
          <button
            onClick={handleDetailsClick}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
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
