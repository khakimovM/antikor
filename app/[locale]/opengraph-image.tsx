import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Uzbekistan Xim Zashita Antikor — Ximzashita';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

type Locale = 'ru' | 'uz' | 'en';

const CFG: Record<Locale, { services: string; tagline: string; geo: string }> = {
  ru: {
    services: 'Himzashita  •  Antikorroziya  •  Futerovka  •  Gidroizolyatsiya',
    tagline: '#1 v Uzbekistane  •  20+ let opyta',
    geo: 'Tashkent  •  Fergana  •  Navoi  •  Ves Uzbekistan',
  },
  uz: {
    services: 'Kimyoviy Himoya  •  Antikorroziya  •  Futerovka  •  Gidroizolyatsiya',
    tagline: "#1 O'zbekistonda  •  20+ yil tajriba",
    geo: "Toshkent  •  Farg'ona  •  Navoiy  •  O'zbekiston",
  },
  en: {
    services: 'Chemical Protection  •  Anti-Corrosion  •  Lining  •  Waterproofing',
    tagline: '#1 in Uzbekistan  •  20+ Years Experience',
    geo: 'Tashkent  •  Fergana  •  Navoi  •  Uzbekistan',
  },
};

type Props = { params: { locale: string } };

export default function OGImage({ params }: Props) {
  const locale = params.locale as Locale;
  const cfg = CFG[locale] ?? CFG.ru;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060d1f 0%, #0d1a36 45%, #0a1525 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Orange top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #ea580c, #f97316, #fb923c)',
            display: 'flex',
          }}
        />

        {/* Blue glow — top left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -180,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,78,216,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Orange glow — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
            display: 'flex',
          }}
        />

        {/* Domain */}
        <div
          style={{
            color: '#f97316',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 22,
            opacity: 0.9,
          }}
        >
          uzximzashita.uz
        </div>

        {/* Main title */}
        <div
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 900,
            textAlign: 'center',
            lineHeight: 1.0,
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          Ximzashita Uzbekistan
        </div>

        {/* Services */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: 23,
            textAlign: 'center',
            marginBottom: 36,
            fontWeight: 400,
            letterSpacing: 0.3,
          }}
        >
          {cfg.services}
        </div>

        {/* Tagline pill */}
        <div
          style={{
            background: 'rgba(249, 115, 22, 0.14)',
            border: '1px solid rgba(249, 115, 22, 0.45)',
            borderRadius: 50,
            padding: '12px 36px',
            color: '#fdba74',
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 22,
          }}
        >
          {cfg.tagline}
        </div>

        {/* Geo line */}
        <div
          style={{
            color: '#475569',
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          {cfg.geo}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.5) 50%, transparent 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    size,
  );
}
