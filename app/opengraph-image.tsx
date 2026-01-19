import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cashout SPayLater & Boost PayFlex - CashoutByAisyah';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // LOGIKA PENENTUAN URL:
  // 1. Cek apakah ada Custom Domain (NEXT_PUBLIC_APP_URL) -> Prioritas Utama
  // 2. Jika tidak, cek apakah sedang di Vercel Preview (VERCEL_URL)
  // 3. Jika tidak, anggap di Localhost

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
    ? process.env.NEXT_PUBLIC_APP_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

  // Gabungkan URL dengan path gambar
  const heroImageSrc = `${baseUrl}/images/hero-img.png`;

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        fontFamily: 'sans-serif',
        padding: '40px',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          padding: '40px',
          overflow: 'hidden',
        }}>
        {/* KOLOM KIRI: GAMBAR */}
        <div
          style={{
            display: 'flex',
            width: '40%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginRight: '20px',
          }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '6px solid white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transform: 'rotate(-2deg)',
              display: 'flex',
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImageSrc}
              alt='Cashout Hero'
              width='100%'
              height='100%'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* KOLOM KANAN: TEKS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '60%',
            height: '100%',
          }}>
          <div
            style={{
              backgroundColor: '#f0f2f5',
              padding: '8px 16px',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#4b5563',
              marginBottom: '20px',
              alignSelf: 'flex-start',
            }}>
            cashoutbyaisyah.net
          </div>

          <h1
            style={{
              fontSize: '48px',
              fontWeight: '900',
              lineHeight: '1.1',
              color: '#111827',
              margin: '0 0 16px 0',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <span>SPAYLATER</span>
            <span>BOOSTPAYFLEX</span>
          </h1>

          <p
            style={{
              fontSize: '22px',
              lineHeight: '1.4',
              color: '#4b5563',
              margin: '0 0 32px 0',
              maxWidth: '90%',
            }}>
            Cairkan limit Shopee & Boost Anda jadi tunai.{' '}
            <span
              style={{
                color: '#EE4D2D',
                fontWeight: 'bold',
                marginLeft: '6px',
              }}>
              Aman & Cepat.
            </span>
          </p>

          <div
            style={{
              backgroundColor: '#EE4D2D',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-start',
              boxShadow: '0 4px 12px rgba(238, 77, 45, 0.3)',
            }}>
            Cashout Sekarang
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
