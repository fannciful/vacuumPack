import React from 'react';
import { Shield, Package, Truck, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Надійність",
      description: "Гарантована герметичність упаковки"
    },
    {
      icon: Package,
      title: "Елегантність",
      description: "Стильний дизайн для будь-яких потреб"
    },
    {
      icon: Truck,
      title: "Зручність",
      description: "Швидка доставка по всій Україні"
    },
    {
      icon: Award,
      title: "Якість",
      description: "Преміум матеріали та виробництво"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;