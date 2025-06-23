import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { catalogProducts } from '../data/products'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <main id="products" className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
            <span className="text-sm text-emerald-700 font-medium">Елегантна колекція</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-6">Наша продукція</h2>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto">
            Відкрийте світ елегантної упаковки з нашою ексклюзивною колекцією пакетів для вакуумної упаковки
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {catalogProducts && catalogProducts.length > 0 ? (
            catalogProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-zinc-500">Завантаження продуктів...</p>
            </div>
          )}
        </div>
        
        <div className="text-center bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-8 lg:p-16 border border-zinc-100">
          <h3 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-6">
            Потрібна персональна консультація?
          </h3>
          <p className="text-zinc-600 mb-10 max-w-2xl mx-auto text-base lg:text-lg">
            Наші експерти з радістю допоможуть вам обрати ідеальне рішення для ваших потреб.
            Індивідуальний підхід та професійні рекомендації.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/catalog"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Переглянути весь каталог
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border border-zinc-300 hover:border-emerald-400 hover:bg-emerald-50 text-zinc-700 hover:text-emerald-700 px-8 py-3 rounded-xl font-medium transition-all duration-300"
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

export default Home;
