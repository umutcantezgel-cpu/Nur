import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // dynamische Titel Generierung
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Nur | Premium Islamic Lifestyle & Handcrafted Decor';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FDFCFB',
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(214, 163, 169, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(214, 163, 169, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '40px 80px',
          }}
        >
          {/* Decorative Arch */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              bottom: '50px',
              left: '50px',
              right: '50px',
              border: '2px solid rgba(74, 63, 65, 0.1)',
              borderRadius: '200px 200px 20px 20px',
              display: 'flex',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* Logo Equivalent */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
                width: '80px',
                height: '80px',
                borderRadius: '40px',
                backgroundColor: '#4A3F41',
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '18px',
                  boxShadow: 'inset 8px 0px 0px 0px #FDFCFB',
                  transform: 'rotate(-20deg) scale(1.1)'
                }}
              />
            </div>
            
            <div
              style={{
                fontSize: 64,
                fontFamily: 'serif',
                letterSpacing: '-0.02em',
                color: '#4A3F41',
                lineHeight: 1.1,
                marginBottom: '20px',
                maxWidth: '800px',
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 24,
                color: '#D6A3A9',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 600,
              }}
            >
              Handcrafted in Istanbul
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
