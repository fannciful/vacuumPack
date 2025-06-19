import React, { useState } from 'react';
import { Package, Phone, Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(5);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <header className="bg-zinc-50 border-b border-zinc-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-full mx-auto px-12 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-zinc-900">VacuumPack</h1>
              <p className="text-sm text-zinc-500">Елегантна упаковка</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActiveLink('/')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Головна
            </Link>
            <Link 
              to="/catalog" 
              className={`transition-colors font-medium ${
                isActiveLink('/catalog')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                isActiveLink('/about')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Про нас
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActiveLink('/contact')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Контакти
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">

            
            <Link 
              to="/contact"
              className="hidden sm:flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2 rounded-xl transition-colors font-medium"
            >
              <span>Замовити дзвінок</span>
            </Link>
            
            <button 
              className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-zinc-200 space-y-3">
            <Link 
              to="/" 
              className={`block transition-colors font-medium ${
                isActiveLink('/')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
              onClick={closeMenu}
            >
              Головна
            </Link>
            <Link 
              to="/catalog" 
              className={`block transition-colors font-medium ${
                isActiveLink('/catalog')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
              onClick={closeMenu}
            >
              Каталог
            </Link>
            <Link 
              to="/about" 
              className={`block transition-colors font-medium ${
                isActiveLink('/about')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
              onClick={closeMenu}
            >
              Про нас
            </Link>
            <Link 
              to="/contact" 
              className={`block transition-colors font-medium ${
                isActiveLink('/contact')
                  ? 'text-emerald-600' 
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
              onClick={closeMenu}
            >
              Контакти
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;