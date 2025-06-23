import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { catalogProducts } from '../data/products';
import { Package, Filter, Grid, List } from 'lucide-react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Memoize categories calculation to prevent unnecessary recalculations
  const categories = useMemo(() => {
  if (!catalogProducts || catalogProducts.length === 0) {
    return [{ id: 'all', name: 'Усі товари', count: 0 }];
  }

  const categoryCount = catalogProducts.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  return [
    { id: 'all', name: 'Усі товари', count: catalogProducts.length },
    { id: 'vacuum', name: 'Вакуумні пакети', count: categoryCount.vacuum || 0 },
    { id: 'shrink', name: 'Термозбіжні пакети', count: categoryCount.shrink || 0 },
    { id: 'doypack', name: 'Пакети дой-пак', count: categoryCount.doypack || 0 },
    { id: 'corrugated', name: 'Гофровані пакети', count: categoryCount.corrugated || 0 },
  ].filter(category => category.count > 0 || category.id === 'all');
}, []);


  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    if (!catalogProducts || catalogProducts.length === 0) return [];
    
    return selectedCategory === 'all' 
      ? catalogProducts 
      : catalogProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6">
            <Package className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-sm text-emerald-700 font-medium">Повний каталог</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
            Каталог продукції
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            Виготовляємо вакуумні пакети під індивідуальні замовлення з урахуванням ваших потреб, 
            а також пропонуємо широкий вибір готової продукції в наявності.
          </p>
        </div>

        {/* Filters and controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-zinc-100 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-600 border border-zinc-200 hover:border-emerald-300'
                }`}
              >
                <span className="text-sm sm:text-base">{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-zinc-200 text-zinc-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* View controls */}
          <div className="flex items-center space-x-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center text-sm text-zinc-600">
              <Filter className="w-4 h-4 mr-2" />
              <span>Знайдено: {filteredProducts.length} товарів</span>
            </div>
            
            <div className="flex border border-zinc-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-zinc-600 hover:bg-emerald-50'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-zinc-600 hover:bg-emerald-50'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 lg:gap-8 mb-20 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Package className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
            <h3 className="text-xl text-zinc-600 mb-2">Товари не знайдено</h3>
            <p className="text-zinc-500">Спробуйте обрати іншу категорію або зв'яжіться з нами для індивідуального замовлення</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;