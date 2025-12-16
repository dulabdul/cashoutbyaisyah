'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  // Gambar ilustrasi CS/Professional (Asian look)
  // Nanti bisa diganti dengan file lokal: "/images/about-us.jpg"
  const imageSrc = '/images/about-min.jpg';

  return (
    <section
      id='about'
      className='py-20 lg:py-28 bg-white overflow-hidden'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Bagian Gambar (Kiri) */}
          <div className='relative order-2 lg:order-1'>
            {/* Decorative Background Elements */}
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50' />
            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50' />

            <div className='relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white'>
              <Image
                src={imageSrc}
                alt='Tim Customer Service CashoutByAisyah'
                width={600}
                height={800}
                className='object-cover w-full h-auto hover:scale-105 transition-transform duration-700'
                sizes='(max-width: 768px) 100vw, 50vw'
              />

              {/* Floating Badge (Trust Signal) */}
              <div className='absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-green-100 p-2 rounded-full'>
                    <CheckCircle2 className='w-5 h-5 text-green-600' />
                  </div>
                  <p className='font-bold text-sm text-gray-800'>
                    Terverifikasi
                  </p>
                </div>
                <p className='text-xs text-gray-500'>
                  Layanan kami telah membantu 5000+ pelanggan.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Teks (Kanan) */}
          <div className='order-1 lg:order-2 space-y-6'>
            <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-bold tracking-wider uppercase'>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
              {t.about.badge}
            </span>

            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 leading-tight'>
              {t.about.title}
            </h2>

            <p className='text-lg text-gray-600 leading-relaxed'>
              {t.about.desc}
            </p>

            <div className='pt-4 border-t border-gray-100'>
              <ul className='space-y-3'>
                {/* Hardcoded highlights yang relevan dengan about */}
                <li className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-primary' />
                  <span className='text-gray-700 font-medium'>
                    Respon Cepat (Hitungan Menit)
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-primary' />
                  <span className='text-gray-700 font-medium'>
                    Data Privasi Terjamin Aman
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-primary' />
                  <span className='text-gray-700 font-medium'>
                    Rate Kompetitif & Transparan
                  </span>
                </li>
              </ul>
            </div>

            <div className='pt-4'>
              <Button
                href='#contact'
                variant='outline'>
                Hubungi Tim Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
