import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Tambahkan domain lain di sini jika nanti Anda menggunakan gambar dari URL lain
    ],
  },
};

export default nextConfig;
