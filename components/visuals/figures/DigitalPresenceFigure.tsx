'use client';

import React, { useRef, useState, useEffect } from 'react';

export function DigitalPresenceFigure({ intensity = 0.65 }: { intensity?: number }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const [lift, setLift] = useState(16);
  const animFrame = useRef<number | null>(null);

  const targetLift = pointer.active ? 16 + 22 * intensity * (1 - pointer.y * 0.5) : 16;

  useEffect(() => {
    let current = lift;
    const loop = () => {
      const diff = targetLift - current;
      if (Math.abs(diff) > 0.05) {
        current += diff * 0.15;
        setLift(current);
        animFrame.current = requestAnimationFrame(loop);
      }
    };
    animFrame.current = requestAnimationFrame(loop);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [targetLift]);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x, y, active: true });
  };

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0, active: false });
  };

  // Enlarged isometric projection — scale 1.85 fills the viewport
  const scale = 1.85;
  const cos30 = 0.866025 * scale;
  const sin30 = 0.5 * scale;
  // Shift origin slightly up so browser + modal fit without clipping
  const cx = 160;
  const cy = 105;

  const pt = (x: number, y: number, z = 0): [number, number] => [
    Math.round((cx + (x - y) * cos30) * 10) / 10,
    Math.round((cy + (x + y) * sin30 - z * scale) * 10) / 10,
  ];

  const pstr = (x: number, y: number, z = 0) => {
    const [px, py] = pt(x, y, z);
    return `${px},${py}`;
  };

  // Browser window in world-space — kept tight so modal can float above
  const bw = 48;  // half-width
  const bd = 32;  // half-depth
  const bz = 3;   // slab height

  // Floating booking modal (offsets respond to pointer)
  const mw = 28;
  const md = 22;
  const mz = 4;
  const mxOff = 10 + pointer.x * 5;
  const myOff = 6 + pointer.y * 3;

  return (
    <svg
      viewBox="0 0 320 256"
      width="100%"
      height="100%"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="w-full h-full cursor-pointer select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <defs>
        <radialGradient id="dp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity={pointer.active ? '0.18' : '0.08'} />
          <stop offset="100%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Backdrop */}
      <ellipse cx={cx} cy={cy + 20} rx="130" ry="80" fill="url(#dp-glow)" />

      {/* CAD Grid — tight range */}
      <g stroke="var(--hairline-lo, #382218)" strokeWidth="0.7" fill="none" opacity="0.5">
        {[-40, 0, 40].map((gy, i) => (
          <line key={`gy${i}`} x1={pt(-60, gy)[0]} y1={pt(-60, gy)[1]} x2={pt(60, gy)[0]} y2={pt(60, gy)[1]} />
        ))}
        {[-40, 0, 40].map((gx, i) => (
          <line key={`gx${i}`} x1={pt(gx, -50)[0]} y1={pt(gx, -50)[1]} x2={pt(gx, 50)[0]} y2={pt(gx, 50)[1]} />
        ))}
      </g>

      {/* ─── BROWSER WINDOW ─── */}
      {/* Left wall */}
      <polygon
        points={`${pstr(-bw, -bd, 0)} ${pstr(-bw, bd, 0)} ${pstr(-bw, bd, bz)} ${pstr(-bw, -bd, bz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Front wall */}
      <polygon
        points={`${pstr(-bw, bd, 0)} ${pstr(bw, bd, 0)} ${pstr(bw, bd, bz)} ${pstr(-bw, bd, bz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Top screen surface */}
      <polygon
        points={`${pstr(-bw, -bd, bz)} ${pstr(bw, -bd, bz)} ${pstr(bw, bd, bz)} ${pstr(-bw, bd, bz)}`}
        fill="var(--hairline-plate, #16140F)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />

      {/* Chrome header divider */}
      <line
        x1={pt(-bw, -bd + 9, bz)[0]} y1={pt(-bw, -bd + 9, bz)[1]}
        x2={pt(bw, -bd + 9, bz)[0]}  y2={pt(bw, -bd + 9, bz)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.9"
      />
      {/* Traffic dots */}
      <circle cx={pt(-bw + 5, -bd + 4.5, bz)[0]} cy={pt(-bw + 5, -bd + 4.5, bz)[1]} r="1.8" fill="var(--hairline-edge, #E07A52)" />
      <circle cx={pt(-bw + 11, -bd + 4.5, bz)[0]} cy={pt(-bw + 11, -bd + 4.5, bz)[1]} r="1.8" fill="var(--hairline-mid, #9E5D43)" />
      <circle cx={pt(-bw + 17, -bd + 4.5, bz)[0]} cy={pt(-bw + 17, -bd + 4.5, bz)[1]} r="1.8" fill="var(--hairline-mid, #9E5D43)" />

      {/* URL pill */}
      <polygon
        points={`${pstr(-bw + 22, -bd + 2.5, bz)} ${pstr(bw - 6, -bd + 2.5, bz)} ${pstr(bw - 6, -bd + 7, bz)} ${pstr(-bw + 22, -bd + 7, bz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="0.7"
      />

      {/* Hero block with Moroccan arch motif */}
      <polygon
        points={`${pstr(-bw + 6, -bd + 13, bz)} ${pstr(bw - 22, -bd + 13, bz)} ${pstr(bw - 22, -bd + 30, bz)} ${pstr(-bw + 6, -bd + 30, bz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* Arch stroke */}
      <path
        d={`M ${pt(-bw + 14, -bd + 27, bz).join(' ')} L ${pt(-bw + 14, -bd + 20, bz).join(' ')} Q ${pt(0, -bd + 14, bz).join(' ')} ${pt(bw - 28, -bd + 20, bz).join(' ')} L ${pt(bw - 28, -bd + 27, bz).join(' ')}`}
        fill="none"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="1.1"
        opacity="0.9"
      />

      {/* Page body text stubs */}
      {[bd - 16, bd - 10, bd - 4].map((dy, i) => (
        <line
          key={`txt${i}`}
          x1={pt(-bw + 6, dy, bz)[0]} y1={pt(-bw + 6, dy, bz)[1]}
          x2={pt(-bw + (i === 0 ? 30 : i === 1 ? 40 : 34), dy, bz)[0]} y2={pt(-bw + (i === 0 ? 30 : i === 1 ? 40 : 34), dy, bz)[1]}
          stroke={i === 0 ? 'var(--hairline-edge, #E07A52)' : 'var(--hairline-mid, #9E5D43)'}
          strokeWidth={i === 0 ? 2 : 1.1}
          strokeLinecap="round"
        />
      ))}

      {/* ─── FLOATING BOOKING MODAL ─── */}
      {/* Dashed vertical drop connectors */}
      <g stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.8" strokeDasharray="2.5 3" opacity="0.55">
        {[[-mw, -md], [mw, -md], [mw, md], [-mw, md]].map(([dx, dy], i) => (
          <line
            key={`drop${i}`}
            x1={pt(mxOff + dx, myOff + dy, lift + bz)[0]} y1={pt(mxOff + dx, myOff + dy, lift + bz)[1]}
            x2={pt(mxOff + dx, myOff + dy, bz)[0]}         y2={pt(mxOff + dx, myOff + dy, bz)[1]}
          />
        ))}
      </g>

      {/* Modal left face */}
      <polygon
        points={`${pstr(mxOff - mw, myOff - md, lift + bz)} ${pstr(mxOff - mw, myOff + md, lift + bz)} ${pstr(mxOff - mw, myOff + md, lift + bz + mz)} ${pstr(mxOff - mw, myOff - md, lift + bz + mz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Modal front face */}
      <polygon
        points={`${pstr(mxOff - mw, myOff + md, lift + bz)} ${pstr(mxOff + mw, myOff + md, lift + bz)} ${pstr(mxOff + mw, myOff + md, lift + bz + mz)} ${pstr(mxOff - mw, myOff + md, lift + bz + mz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Modal top face */}
      <polygon
        points={`${pstr(mxOff - mw, myOff - md, lift + bz + mz)} ${pstr(mxOff + mw, myOff - md, lift + bz + mz)} ${pstr(mxOff + mw, myOff + md, lift + bz + mz)} ${pstr(mxOff - mw, myOff + md, lift + bz + mz)}`}
        fill="var(--hairline-plate, #16140F)"
        stroke={pointer.active ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-edge, #E07A52)'}
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />

      {/* Modal header line — "DIRECT BOOKING" */}
      <line
        x1={pt(mxOff - mw + 4, myOff - md + 5, lift + bz + mz)[0]} y1={pt(mxOff - mw + 4, myOff - md + 5, lift + bz + mz)[1]}
        x2={pt(mxOff - mw + 22, myOff - md + 5, lift + bz + mz)[0]} y2={pt(mxOff - mw + 22, myOff - md + 5, lift + bz + mz)[1]}
        stroke="var(--hairline-edge, #E07A52)" strokeWidth="2" strokeLinecap="round"
      />

      {/* QR code placeholder */}
      <rect
        x={pt(mxOff + mw - 13, myOff - md + 3, lift + bz + mz)[0] - 4.5}
        y={pt(mxOff + mw - 13, myOff - md + 3, lift + bz + mz)[1] - 3.5}
        width="10" height="9" rx="1.2"
        stroke="var(--hairline-edge, #E07A52)"
        fill="var(--hairline-lo, #382218)"
        strokeWidth="0.9"
      />
      <circle
        cx={pt(mxOff + mw - 13, myOff - md + 3, lift + bz + mz)[0]}
        cy={pt(mxOff + mw - 13, myOff - md + 3, lift + bz + mz)[1]}
        r="1.2" fill="var(--hairline-hi, #F4EFE6)"
      />

      {/* Date / room input bar */}
      <polygon
        points={`${pstr(mxOff - mw + 4, myOff - md + 10, lift + bz + mz)} ${pstr(mxOff + mw - 4, myOff - md + 10, lift + bz + mz)} ${pstr(mxOff + mw - 4, myOff - md + 15, lift + bz + mz)} ${pstr(mxOff - mw + 4, myOff - md + 15, lift + bz + mz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="0.8"
      />
      <line
        x1={pt(mxOff - mw + 7, myOff - md + 12.5, lift + bz + mz)[0]} y1={pt(mxOff - mw + 7, myOff - md + 12.5, lift + bz + mz)[1]}
        x2={pt(mxOff + mw - 12, myOff - md + 12.5, lift + bz + mz)[0]} y2={pt(mxOff + mw - 12, myOff - md + 12.5, lift + bz + mz)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="1" strokeLinecap="round"
      />

      {/* Reserve CTA button */}
      <polygon
        points={`${pstr(mxOff - mw + 4, myOff + md - 6, lift + bz + mz)} ${pstr(mxOff + mw - 4, myOff + md - 6, lift + bz + mz)} ${pstr(mxOff + mw - 4, myOff + md - 2, lift + bz + mz)} ${pstr(mxOff - mw + 4, myOff + md - 2, lift + bz + mz)}`}
        fill={pointer.active ? 'var(--hairline-edge, #C8643C)' : 'var(--hairline-lo, #382218)'}
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle
        cx={pt(mxOff, myOff + md - 4, lift + bz + mz)[0]}
        cy={pt(mxOff, myOff + md - 4, lift + bz + mz)[1]}
        r="1.5" fill="var(--hairline-hi, #F4EFE6)"
      />
    </svg>
  );
}
