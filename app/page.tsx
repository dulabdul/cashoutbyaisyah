'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/features/FloatingWhatsApp';
import { ScrollToTop } from '@/components/features/ScrollToTop';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { Shield, Clock, Headphones, Percent, Lock, Users } from 'lucide-react';
import { About } from '@/components/sections/About';

// Components for About, Why, Advantages defined inline here for simplicity
// or you can separate them like Hero/Services if preferred.

const WhyChooseUs = () => {
  const { t } = useLanguage();
  return (
    <section
      id='why'
      className='py-20 bg-gray-50'>
      <div className='container-custom text-center max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6'>{t.why.title}</h2>
        <p className='text-gray-600 mb-8'>{t.why.desc}</p>
      </div>
    </section>
  );
};

const Advantages = () => {
  const { t } = useLanguage();

  const getIcon = (i: number) => {
    const icons = [Clock, Shield, Users, Percent, Lock, Headphones];
    const Icon = icons[i] || Shield;
    return <Icon className='w-8 h-8 text-primary' />;
  };

  return (
    <section className='py-20 bg-white'>
      <div className='container-custom'>
        <h2 className='text-3xl font-bold text-center mb-16'>
          {t.advantages.title}
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {t.advantages.items.map((item, idx) => (
            <div
              key={idx}
              className='flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors'>
              <div className='shrink-0'>{getIcon(idx)}</div>
              <div>
                <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <div className='relative min-h-screen'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyChooseUs />
          <Services />
          <Advantages />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
