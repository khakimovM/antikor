import { ImageResponse } from 'next/og';

export const size = { width: 128, height: 128 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A365D 0%, #1c33b4 100%)',
          borderRadius: '22px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <div style={{ color: '#93C5FD', fontSize: 38, fontWeight: 900, lineHeight: 1, letterSpacing: '-1px' }}>
            XIM
          </div>
          <div style={{ color: '#F97316', fontSize: 17, fontWeight: 800, lineHeight: 1 }}>
            ZASHITA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
