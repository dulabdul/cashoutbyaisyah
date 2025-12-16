'use client';
import { useLanguage } from '@/context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div className='container-custom grid md:grid-cols-2 gap-8'>
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold text-white'>
            Cashout<span className='text-primary'>Aisyah</span>
          </h3>
          <p className='max-w-md text-sm leading-relaxed'>{t.footer.desc}</p>
        </div>
        <div className='md:text-right flex flex-col justify-center'>
          <p className='text-sm'>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
