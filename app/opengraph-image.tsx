import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Cashout SPayLater & Boost PayFlex - CashoutByAisyah';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Font data (Optional: Load font if needed, here using system sans-serif for speed)
  // const interSemiBold = fetch(new URL('./Inter-SemiBold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EE4D2D', // Shopee Orange Primary Color
          backgroundImage: 'linear-gradient(to bottom right, #EE4D2D, #C03518)',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}>
        {/* Decorative Circle Background */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}>
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'white',
              color: '#EE4D2D',
              padding: '10px 24px',
              borderRadius: '50px',
              fontSize: 24,
              fontWeight: 800,
              marginBottom: 20,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}>
            TRUSTED & FAST
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              margin: 0,
              marginBottom: 10,
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            }}>
            CashoutByAisyah
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 32,
              margin: 0,
              opacity: 0.9,
              textAlign: 'center',
              maxWidth: '900px',
            }}>
            Cairkan SPayLater • Boost PayFlex • Grab PayLater
          </p>

          {/* Features / Icons mockup text */}
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              gap: 20,
              opacity: 0.9,
              fontSize: 24,
              fontWeight: 600,
            }}>
            <span>✅ Proses 5 Menit</span>
            <span>•</span>
            <span>✅ Rate Terbaik</span>
            <span>•</span>
            <span>✅ Amanah</span>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // Untuk hasil terbaik, Anda bisa load font Google (Inter/Poppins) di sini
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await interSemiBold,
      //     style: 'normal',
      //     weight: 400,
      //   },
      // ],
      ...size,
    }
  );
}
