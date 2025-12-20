'use client';
import Image from 'next/image';
// import { useLanguage } from '@/context/LanguageContext';
import { content as t } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useWhatsApp } from '@/hooks/useWhatsApp'; // Import Hook
export const Hero = () => {
  const waLink = useWhatsApp();
  return (
    <section
      id='hero'
      className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-secondary/50 to-white'>
      <div className='container-custom grid lg:grid-cols-2 gap-12 items-center'>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='space-y-6 text-center lg:text-left z-10'>
          <span className='inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold text-sm tracking-wide'>
            TRUSTED & FAST
          </span>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
            {t.hero.headline}
          </h1>
          <p className='text-lg text-gray-600 max-w-xl mx-auto lg:mx-0'>
            {t.hero.desc}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <Button
              href={waLink}
              external
              aria-label='Chat WhatsApp'>
              {t.hero.cta}
            </Button>

            {/* CTA SEKUNDER: Ke Section About (Internal) */}
            <Button
              variant='outline'
              href='#about'
              aria-label='Learn More'>
              {t.nav.about}
            </Button>
          </div>

          {/* Stats */}
          <div className='pt-8 grid grid-cols-3 gap-4 border-t border-gray-200 mt-8'>
            {t.hero.stats.map((stat, idx) => (
              <div key={idx}>
                <p className='text-2xl font-bold text-primary'>{stat.value}</p>
                <p className='text-xs text-gray-500 uppercase'>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl'>
          {/* Gunakan placeholder saat development */}
          <Image
            src='/images/hero-img.png'
            alt='Cashout Hero Illustration'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </motion.div>
      </div>
    </section>
  );
};
