'use client';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, Zap, Car } from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shopee':
        return <ShoppingBag className='w-10 h-10 text-orange-500' />;
      case 'zap':
        return <Zap className='w-10 h-10 text-yellow-500' />;
      case 'car':
        return <Car className='w-10 h-10 text-green-500' />;
      default:
        return null;
    }
  };

  return (
    <section
      id='services'
      className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl font-bold text-gray-900'>
            {t.services.title}
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            {t.services.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {t.services.items.map((item, idx) => (
            <div
              key={idx}
              className='bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100'>
              <div className='mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm'>
                {getIcon(item.icon)}
              </div>
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
