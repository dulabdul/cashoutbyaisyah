'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
// import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { content as t } from '@/data/content';
export const Navbar = () => {
  // const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.service, href: '#services' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2'
          aria-label='CashoutByAisyah Home'>
          <span className='text-2xl font-bold text-primary'>
            Cashout<span className='text-gray-800'>Aisyah</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-sm font-medium text-gray-700 hover:text-primary transition-colors'>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className='flex items-center gap-4 md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle Menu'>
            {isMobileMenuOpen ? (
              <X className='w-6 h-6 text-gray-800' />
            ) : (
              <Menu className='w-6 h-6 text-gray-800' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-base font-medium text-gray-800 py-2 border-b border-gray-100'
              onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
