import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { catalogProducts } from '../data/products';
import { Package, Filter, Grid, List } from 'lucide-react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'Усі товари', count: 18 },
    { id: 'smooth', name: 'Гладкі пакети', count: 6 },
    { id: 'textured', name: 'Рифлені пакети', count: 4 },
    { id: 'premium', name: 'Преміум серія', count: 4 },
    { id: 'rolls', name: 'Рулони', count: 2 },
    { id: 'zip', name: 'Zip пакети', count: 2 }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? catalogProducts 
    : catalogProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-full mx-auto px-12 py-20">
        {/* Hero секція */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6">
            <Package className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-sm text-emerald-700 font-medium">Повний каталог</span>
          </div>
          <h1 className="text-5xl font-light text-zinc-900 mb-6">
            Каталог продукції
          </h1>
          <p className="text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            Широкий асортимент вакуумних пакетів для будь-яких потреб. 
            Від домашнього використання до професійних рішень для ресторанів.
          </p>
        </div>

        {/* Фільтри та управління */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
          {/* Категорії */}
          <div className="flex flex-wrap gap-3">
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
                <span>{category.name}</span>
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

          {/* Управління відображенням */}
          <div className="flex items-center space-x-3">
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
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Сітка продуктів */}
        <div className={`grid gap-8 mb-20 ${
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

        {/* Інформаційна секція */}
        <div className="bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-16 border border-zinc-100 text-center">
          <h2 className="text-4xl font-light text-zinc-900 mb-6">
            Не знайшли потрібний розмір?
          </h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-3xl mx-auto">
            Ми виготовляємо пакети на замовлення відповідно до ваших специфічних потреб. 
            Індивідуальні розміри, брендинг та спеціальні вимоги.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Замовити індивідуально
            </Link>
            <Link
              to="/contact"
              className="border border-zinc-300 hover:border-emerald-400 hover:bg-emerald-50 text-zinc-700 hover:text-emerald-700 px-8 py-3 rounded-xl font-medium transition-all duration-300"
            >
              Отримати консультацію
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;