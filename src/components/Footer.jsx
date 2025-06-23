import React from 'react';
import { Package, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-full mx-auto px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">VacuumPack</h3>
            </div>
            <p className="text-zinc-400 text-sm">
              Елегантні рішення для вакуумної упаковки
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Продукція</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/catalog" className="text-zinc-400 hover:text-white transition-colors">Вакуумні пакети</a></li>
              <li><a href="/catalog" className="text-zinc-400 hover:text-white transition-colors">Термозбіжні пакети</a></li>
              <li><a href="/catalog" className="text-zinc-400 hover:text-white transition-colors">Док-пай</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-sm">Контакти</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-emerald-400" />
                <a href="tel:+3806862829737" className="text-zinc-400 hover:text-white transition-colors">
                  +380 (68) 628 29 73
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-emerald-400" />
                <a href="mailto:apontchyk@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  apontchyk@gmail.com"
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-6 pt-4 text-center">
          <p className="text-zinc-400 text-sm">
            © {currentYear} VacuumPack. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;