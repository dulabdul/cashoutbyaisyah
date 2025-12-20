'use client';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import { useLanguage } from '@/context/LanguageContext';
import { content as t } from '@/data/content';

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center', // Center active slide agar fokus
    skipSnaps: false,
  });
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  // Construct slides for lightbox
  const slides = t.testimonials.items.map((item) => ({ src: item.src }));

  return (
    <section
      id='testimonials'
      className='py-20 bg-secondary/30'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>
            {t.testimonials.title}
          </h2>
          <p className='text-sm text-gray-500 mt-2'>
            Klik gambar untuk memperbesar
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className='overflow-hidden px-4'
          ref={emblaRef}>
          <div className='flex -ml-4 py-8'>
            {t.testimonials.items.map((item, idx) => (
              // Adjust width: Mobile (60%), Tablet (33%), Desktop (20%)
              <div
                key={item.id}
                className='flex-[0_0_60%] sm:flex-[0_0_33.33%] md:flex-[0_0_22%] min-w-0 pl-4'>
                <div
                  className='group relative aspect-[9/19] w-full rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-white hover:-translate-y-2'
                  onClick={() => handleImageClick(idx)}>
                  <Image
                    // Menggunakan placeholder ukuran HP (360x800)
                    src={`/images/testimoni/testi${idx + 1}.jpeg`}
                    alt={item.alt}
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 768px) 60vw, 25vw'
                  />

                  {/* Overlay icon zoom */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center'>
                    <span className='opacity-0 group-hover:opacity-100 text-white bg-black/50 px-3 py-1 rounded-full text-xs transition-opacity backdrop-blur-sm'>
                      🔍 Zoom
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
};
