export type Language = 'my' | 'en';

export interface ContentData {
  nav: { [key: string]: string };
  hero: { headline: string; desc: string; cta: string; stats: { value: string; label: string }[] };
  about: { title: string; desc: string; badge: string };
  why: { title: string; desc: string; cta: string };
  services: { title: string; subtitle: string; items: { title: string; desc: string; icon: string }[] };
  advantages: { title: string; items: { title: string; desc: string; icon: string }[] };
  testimonials: { title: string; items: { id: number; src: string; alt: string }[] };
  contact: { title: string; desc: string; cta: string };
  footer: { desc: string; copyright: string };
  whatsapp: { message: string };
}