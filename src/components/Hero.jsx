import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-50 via-emerald-50/30 to-teal-50/20 py-24 md:py-32">
      <div className="max-w-full mx-auto px-12 text-center">
        <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 shadow-sm mb-8">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
          <span className="text-sm text-zinc-700 font-medium">Елегантна колекція 2025</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-zinc-900 mb-8 leading-tight">
          Пакети для вакуумної<br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent font-medium">упаковки</span>
        </h1>
        
        <p className="text-xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Відкрийте світ елегантної упаковки. Поєднання стилю, функціональності та надійності для збереження якості продуктів.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link 
            to="/catalog"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
          >
            <span>Переглянути колекцію</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-zinc-900 mb-2">2.5K</div>
            <div className="text-sm text-zinc-500 font-medium">Клієнтів</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-zinc-900 mb-2">90+</div>
            <div className="text-sm text-zinc-500 font-medium">Продуктів</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-zinc-900 mb-2">15</div>
            <div className="text-sm text-zinc-500 font-medium">Років</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-zinc-900 mb-2">98%</div>
            <div className="text-sm text-zinc-500 font-medium">Якості</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;