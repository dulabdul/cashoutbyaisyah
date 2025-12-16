import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  external?: boolean;
}

export const Button = ({
  className,
  variant = 'primary',
  href,
  external,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary text-primary hover:bg-secondary focus:ring-primary',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };

  const combinedClasses = cn(baseStyles, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={combinedClasses}
          aria-label={props['aria-label']}>
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-label={props['aria-label']}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}>
      {children}
    </button>
  );
};
