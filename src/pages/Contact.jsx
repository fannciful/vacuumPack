import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS конфігурація
  const EMAILJS_CONFIG = {
    serviceID: 'service_m0g6op9', 
    templateID: 'template_z6ynleg', 
    publicKey: 'Z9_10jFrVe1gBOa_J' 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('uk-UA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully');
      setIsLoading(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 4000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setIsLoading(false);
      setError('Помилка відправки повідомлення. Спробуйте ще раз або зв\'яжіться з нами по телефону.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      details: ["+380 (93) 867 16 78", "+380 (68) 628 29 73"],
      description: "Пн-Пт: 9:00 - 18:00"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["apontchyk@gmail.com"],
      description: "Відповідаємо протягом 2 годин"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Адреса",
      details: ["м. Рівне"],
      description: "Офіс та склад"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Режим роботи",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 15:00"],
      description: "Неділя - вихідний"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="contact" className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {/* Hero section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6">
            <MessageSquare className="w-4 h-4 text-emerald-600 mr-2" />
            <span className="text-sm text-emerald-700 font-medium">Зв'яжіться з нами</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-900 mb-6">
            Готові допомогти вам
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
            Маєте питання про нашу продукцію або потребуєте консультації? 
            Наша команда експертів завжди готова надати професійну допомогу.
          </p>
        </div>

        {/* Contact information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-6 lg:p-8 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">{info.title}</h3>
              <div className="space-y-2 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-zinc-700 font-medium text-sm sm:text-base">{detail}</p>
                ))}
              </div>
              <p className="text-zinc-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-6 lg:p-8 border border-zinc-100 relative overflow-hidden">
            <h2 className="text-2xl lg:text-3xl font-light text-zinc-900 mb-2 text-center">Напишіть нам</h2>
            <p className="text-zinc-600 text-center mb-8">Заповніть форму і ми зв'яжемося з вами найближчим часом</p>
            
            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            {/* Success message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-light text-zinc-900 mb-4">
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
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

        {/* FAQ section - без змін */}
        <div className="text-center bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-8 lg:p-16 border border-zinc-100">
          <h2 className="text-3xl lg:text-4xl font-light text-zinc-900 mb-6">
            Часті питання
          </h2>
          <p className="text-lg lg:text-xl text-zinc-600 mb-10 max-w-3xl mx-auto">
            Перш ніж написати нам, ознайомтеся з відповідями на найпоширеніші питання наших клієнтів.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Який мінімальний обсяг замовлення?</h4>
                <p className="text-zinc-600">Мінімальне замовлення становить 1000 шт. для роздрібних клієнтів.</p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Чи надаєте ви знижки оптовим покупцям?</h4>
                <p className="text-zinc-600">Так, діє гнучка система знижок для постійних клієнтів.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Скільки часу займає доставка?</h4>
                <p className="text-zinc-600">По Рівному - 1-3 робочі дні, по Україні - 1-7 робочих днів.</p>
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