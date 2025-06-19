import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, Award, Users, Shield, Heart, Zap } from 'lucide-react';

const About = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    const historyImage = "/images/new.jpg"; 

    const stats = [
        { number: '10+', label: 'Років досвіду' },
        { number: '50k+', label: 'Задоволених клієнтів' },
        { number: '100+', label: 'Видів продукції' },
        { number: '24/7', label: 'Технічна підтримка' },
    ];

    const values = [
        {
            icon: <Shield className='w-8 h-8' />,
            title: 'Якість понад усе',
            description: 'Кожен продукт проходить суворий контроль якості та відповідає європейським стандартам.'
        },
        {
            icon: <Heart className='w-8 h-8' />,
            title: 'Турбота про клієнтів',
            description: 'Індивідуальний підхід до кожного замовлення та персональні консультації від експертів.'
        },
        {
            icon: <Zap className='w-8 h-8' />,
            title: 'Інновації',
            description: 'Постійно впроваджуємо нові технології для покращення якості нашої продукції.'
        },
    ];

    const team = [
        {
            name: 'Олександр Петренко',
            position: 'Генеральний директор',
            experience: '15 років в індустрії упаковки',
            image: '/images/team1.jpg'
        },
        {
            name: 'Марія Коваленко',
            position: 'Головний технолог',
            experience: '12 років розробки упаковних рішень',
            image: '/images/team2.jpg'
        },
        {
            name: 'Дмитро Іваненко',
            position: 'Менеджер з якості',
            experience: '8 років контролю якості',
            image: '/images/team3.jpg'
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main id="about" className='max-w-full mx-auto px-12 py-20'>
                {/* Hero section */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 rounded-full border border-emerald-200 mb-6'>
                        <Package className='w-4 h-4 text-emerald-600 mr-2' />
                        <span className='text-sm text-emerald-700 font-medium'>Про VacuumPack</span>
                    </div>
                    <h1 className='text-5xl font-light text-zinc-900 mb-6'>
                        Ми створюємо майбутнє упаковки
                    </h1>
                    <p className='text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed'>
                        Більше 10 років ми розробляємо та виробляємо найкращі рішення для вакуумної упаковки.
                        Наша місія - забезпечити ідеальну свіжість та якість ваших продуктів.
                    </p>
                </div>

                {/* Statistics */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-24'>
                    {stats.map((stat, index) => (
                        <div key={index} className='text-center p-6 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-2xl border border-zinc-100'>
                            <div className='text-3xl font-bold text-emerald-600 mb-2'>{stat.number}</div>
                            <div className='text-zinc-600'>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Our history */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-4xl font-light text-zinc-900 mb-6">Наша історія</h2>
                        <div className="space-y-6 text-zinc-600 leading-relaxed">
                            <p>
                                Компанія VacuumPack була заснована в 2014 році з простою, але амбітною метою —
                                революціонізувати індустрію вакуумної упаковки в Україні.
                            </p>
                            <p>
                                Почавши як невелика сімейна справа, ми швидко зросли завдяки нашому
                                нескомпромісному підходу до якості та інновацій. Сьогодні ми є одним з
                                провідних виробників вакуумних пакетів в країні.
                            </p>
                            <p>
                                Наші продукти використовують тисячі ресторанів, кафе, готелів та домашніх
                                господарств по всій Україні та за її межами.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 border border-emerald-200">
                        <div className="aspect-video bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl overflow-hidden relative">
                            {historyImage && !imageError ? (
                                <>
                                    <img 
                                        src={historyImage}
                                        alt="Історія компанії VacuumPack"
                                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                                            imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        onLoad={() => setImageLoaded(true)}
                                        onError={() => setImageError(true)}
                                    />
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-200 to-teal-200">
                                            <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Package className="w-24 h-24 text-emerald-600" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Our core values */}
                <div className='mb-24'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl font-light text-zinc-900 mb-6'>Наші цінності</h2>
                        <p className='text-xl text-zinc-600 max-w-3xl mx-auto'>
                            Принципи, якими ми керуємося у своїй роботі та які роблять нас унікальними
                        </p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {values.map((value, index) => (
                            <div key={index} className='text-center p-8 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300'>
                                <div className='w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6'>
                                    {value.icon}
                                </div>
                                <h3 className='text-xl font-semibold text-zinc-900 mb-4'>{value.title}</h3>
                                <p className='text-zinc-600 leading-relaxed'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our team */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-zinc-900 mb-6">Наша команда</h2>
                        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                            Професіонали, які щодня працюють над створенням найкращих продуктів для вас
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center p-8 bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <Users className="w-12 h-12 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{member.name}</h3>
                                <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                                <p className="text-zinc-600 text-sm">{member.experience}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why chose us */}
                <div className="bg-gradient-to-br from-zinc-50 to-emerald-50/30 rounded-3xl p-16 border border-zinc-100 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-light text-zinc-900 mb-6">
                            Чому обирають VacuumPack?
                        </h2>
                        <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                            Ми не просто виробляємо упаковку — ми створюємо рішення, які допомагають нашим
                            клієнтам зберігати свіжість, економити час та підвищувати якість своєї продукції.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 mb-1">Європейська якість</h4>
                                        <p className="text-zinc-600">Всі матеріали сертифіковані згідно з EU стандартами</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 mb-1">Швидка доставка</h4>
                                        <p className="text-zinc-600">Відправляємо замовлення протягом 24 годин</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 mb-1">Конкурентні ціни</h4>
                                        <p className="text-zinc-600">Оптимальне співвідношення ціни та якості</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex-shrink-0 mt-1"></div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 mb-1">Експертна підтримка</h4>
                                        <p className="text-zinc-600">Консультації від професіоналів у будь-який час</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default About