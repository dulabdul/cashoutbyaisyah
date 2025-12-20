'use client';
// import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { useWhatsApp } from '@/hooks/useWhatsApp'; // Import Hook
import { content as t } from '@/data/content';
export const Contact = () => {
  // const { t } = useLanguage();
  const waLink = useWhatsApp(); // Generate link WA dinamis

  return (
    <section
      id='contact'
      className='py-24 bg-primary text-white'>
      <div className='container-custom text-center space-y-8'>
        <h2 className='text-3xl md:text-5xl font-bold'>{t.contact.title}</h2>
        <p className='text-lg md:text-xl opacity-90 max-w-2xl mx-auto'>
          {t.contact.desc}
        </p>

        {/* CTA CONTACT: Ke WhatsApp */}
        <Button
          href={waLink}
          external
          className='bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl'
          aria-label='Contact via WhatsApp'>
          {t.contact.cta}
        </Button>
      </div>
    </section>
  );
};
