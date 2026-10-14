import { ImageResponse } from 'next/og';

export const alt = 'SANAD — Digital Infrastructure for Moroccan Tourism';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0D0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          style={{
            position: 'absolute',
            width: 800,
            height: 400,
            background: 'radial-gradient(circle, rgba(200,100,60,0.15) 0%, rgba(14,13,11,0) 70%)',
            top: 115,
          }}
        />

        {/* Top Telemetry Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 36,
            fontSize: 18,
            color: '#C8643C',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#C8643C',
            }}
          />
          SANAD // DIGITAL INFRASTRUCTURE
        </div>

        {/* Center Brand Lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Architectural Vector Logo Mark (120x120) */}
          <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
            {/* Top Surface */}
            <polygon
              points="20,4 35,12 20,20 5,12"
              fill="#16140F"
              stroke="#C8643C"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Left Wall */}
            <polygon
              points="5,12 20,20 20,36 5,28"
              fill="#0E0D0B"
              stroke="#9E5D43"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Right Wall */}
            <polygon
              points="35,12 20,20 20,36 35,28"
              fill="#1D1A14"
              stroke="#9E5D43"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Moroccan Keyhole Arch */}
            <path
              d="M 23,32 L 23,24 Q 23,21.5 25.5,21.5 Q 28,21.5 28,24 L 28,32"
              stroke="#F4EFE6"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="25.5" cy="23.5" r="1.2" fill="#C8643C" />
            <circle cx="20" cy="4" r="1" fill="#F4EFE6" />
          </svg>

          {/* Typographic Wordmark */}
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: '#F4EFE6',
            }}
          >
            SANAD
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 34,
            color: '#A8A092',
            marginTop: 32,
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          The technology layer for Moroccan tourism
        </div>

        {/* Footer Spec Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            fontSize: 16,
            color: '#A8A092',
            letterSpacing: '0.15em',
            opacity: 0.6,
          }}
        >
          <span>DISCOVER</span>
          <span>·</span>
          <span>CAPTURE</span>
          <span>·</span>
          <span>OPERATE</span>
          <span>·</span>
          <span>AUTOMATE</span>
          <span>·</span>
          <span>INTELLIGENCE</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
