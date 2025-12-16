import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cashoutbyaisyah.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada folder yang ingin disembunyikan
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}