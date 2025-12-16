'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-24 right-8 z-30 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-black transition-all'
      aria-label='Scroll to top'>
      <ArrowUp className='w-5 h-5' />
    </button>
  );
};
