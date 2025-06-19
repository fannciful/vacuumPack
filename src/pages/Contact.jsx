import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  User, 
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Імітація відправки форми
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Скидання форми та повідомлення через 3 секунди
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      details: ["+38 (067) 123-45-67", "+38 (050) 987-65-43"],
      description: "Пн-Пт: 9:00 - 18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@vacuumpack.ua", "sales@vacuumpack.ua"],
      description: "Відповідаємо протягом 2 годин"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адреса",
      details: ["м. Львів, вул. Городоцька 50"],
      description: "Офіс та склад"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Режим роботи",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 15:00"],
      description: "Неділя - вихідний"
    }
  ];

  if (isSubmitted) {
    // Не рендеримо окремий layout, залишаємо основний
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="contact" className="max-w-full mx-auto px-12 py-20">
        {/* Hero секція */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6">
            <MessageSquare className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-sm text-emerald-700 font-medium">Зв'яжіться з нами</span>
          </div>
          <h1 className="text-5xl font-light text-zinc-900 mb-6">
            Готові допомогти вам
          </h1>
          <p className="text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            Маєте питання про нашу продукцію або потребуєте консультації? 
            Наша команда експертів завжди готова надати професійну допомогу.
          </p>
        </div>

        {/* Контактна інформація */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">{info.title}</h3>
              <div className="space-y-2 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-zinc-700 font-medium">{detail}</p>
                ))}
              </div>
              <p className="text-zinc-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Спрощена форма зворотного зв'язку */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-8 border border-zinc-100 relative">
            <h2 className="text-3xl font-light text-zinc-900 mb-2 text-center">Напишіть нам</h2>
            <p className="text-zinc-600 text-center mb-8">Заповніть форму і ми зв'яжемося з вами найближчим часом</p>
            
            {/* Повідомлення про успіх */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">
                    Дякуємо за ваше повідомлення!
                  </h3>
                  <p className="text-zinc-600 mb-4">
                    Ми отримали ваш запит і зв'яжемося з вами найближчим часом.
                  </p>
                  <div className="animate-pulse text-zinc-500 text-sm">
                    Форма буде очищена через кілька секунд...
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className={`space-y-6 ${isSubmitted ? 'opacity-30' : ''}`}>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Ваше ім'я *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitted || isLoading}
                    className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:opacity-50"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Email адреса *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitted || isLoading}
                    className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Ваше повідомлення *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitted || isLoading}
                  rows={6}
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Опишіть ваш запит або питання..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Відправляємо...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Відправити повідомлення</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ секція */}
        <div className="text-center bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-16 border border-zinc-100">
          <h2 className="text-4xl font-light text-zinc-900 mb-6">
            Часті питання
          </h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-3xl mx-auto">
            Перш ніж написати нам, ознайомтеся з відповідями на найпоширеніші питання наших клієнтів.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Який мінімальний обсяг замовлення?</h4>
                <p className="text-zinc-600">Мінімальне замовлення становить 1000 шт. для роздрібних клієнтів.</p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Чи надаєте ви знижки оптовим покупцям?</h4>
                <p className="text-zinc-600">Так, діє гнучка система знижок від 5% до 25% залежно від обсягу.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Скільки часу займає доставка?</h4>
                <p className="text-zinc-600">По Львову - наступний день, по Україні - 1-3 робочі дні.</p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Чи можна замовити пакети з логотипом?</h4>
                <p className="text-zinc-600">Так, ми виготовляємо пакети з індивідуальним брендингом.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;