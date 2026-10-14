'use client';

import React, { useRef, useState, useEffect } from 'react';

export function CustomerExperienceFigure({ intensity = 0.65 }: { intensity?: number }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const [bubbleLift, setBubbleLift] = useState(10);
  const animFrame = useRef<number | null>(null);

  const targetLift = pointer.active ? 10 + 20 * intensity * (1 - pointer.y * 0.4) : 10;

  useEffect(() => {
    let current = bubbleLift;
    const loop = () => {
      const diff = targetLift - current;
      if (Math.abs(diff) > 0.05) {
        current += diff * 0.16;
        setBubbleLift(current);
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

  // Scale 1.85 — fills viewport
  const scale = 1.85;
  const cos30 = 0.866025 * scale;
  const sin30 = 0.5 * scale;
  // Centre the phone
  const cx = 152;
  const cy = 112;

  const pt = (x: number, y: number, z = 0): [number, number] => [
    Math.round((cx + (x - y) * cos30) * 10) / 10,
    Math.round((cy + (x + y) * sin30 - z * scale) * 10) / 10,
  ];

  const pstr = (x: number, y: number, z = 0) => {
    const [px, py] = pt(x, y, z);
    return `${px},${py}`;
  };

  // Phone — narrower width, tall depth so it reads as portrait device
  const pw = 26;  // half-width
  const pd = 42;  // half-depth
  const pz = 4;   // slab height

  // Floating concierge bubble (responds to pointer)
  const cw = 24;
  const cd = 16;
  const cz = 3.5;
  const cxOff = -2 + pointer.x * 6;
  const cyOff = 2 + pointer.y * 4;

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
        <radialGradient id="cx-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity={pointer.active ? '0.18' : '0.08'} />
          <stop offset="100%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={cx} cy={cy + 20} rx="130" ry="80" fill="url(#cx-glow)" />

      {/* CAD Grid */}
      <g stroke="var(--hairline-lo, #382218)" strokeWidth="0.7" fill="none" opacity="0.5">
        {[-40, 0, 40].map((gy, i) => (
          <line key={`gy${i}`} x1={pt(-55, gy)[0]} y1={pt(-55, gy)[1]} x2={pt(55, gy)[0]} y2={pt(55, gy)[1]} />
        ))}
        {[-40, 0, 40].map((gx, i) => (
          <line key={`gx${i}`} x1={pt(gx, -50)[0]} y1={pt(gx, -50)[1]} x2={pt(gx, 50)[0]} y2={pt(gx, 50)[1]} />
        ))}
      </g>

      {/* ─── SMARTPHONE CHASSIS ─── */}
      {/* Left thickness wall */}
      <polygon
        points={`${pstr(-pw, -pd, 0)} ${pstr(-pw, pd, 0)} ${pstr(-pw, pd, pz)} ${pstr(-pw, -pd, pz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Front thickness wall */}
      <polygon
        points={`${pstr(-pw, pd, 0)} ${pstr(pw, pd, 0)} ${pstr(pw, pd, pz)} ${pstr(-pw, pd, pz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Top glass screen */}
      <polygon
        points={`${pstr(-pw, -pd, pz)} ${pstr(pw, -pd, pz)} ${pstr(pw, pd, pz)} ${pstr(-pw, pd, pz)}`}
        fill="var(--hairline-plate, #16140F)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />

      {/* Speaker notch */}
      <polygon
        points={`${pstr(-7, -pd + 2.5, pz)} ${pstr(7, -pd + 2.5, pz)} ${pstr(7, -pd + 5.5, pz)} ${pstr(-7, -pd + 5.5, pz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="0.7"
      />
      {/* Camera dot */}
      <circle cx={pt(11, -pd + 4, pz)[0]} cy={pt(11, -pd + 4, pz)[1]} r="1.1" fill="var(--hairline-edge, #E07A52)" />

      {/* Screen header — RIAD CONCIERGE */}
      <line
        x1={pt(-pw + 3, -pd + 9.5, pz)[0]} y1={pt(-pw + 3, -pd + 9.5, pz)[1]}
        x2={pt(pw - 3, -pd + 9.5, pz)[0]}  y2={pt(pw - 3, -pd + 9.5, pz)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.9"
      />
      {/* Online dot */}
      <circle cx={pt(-pw + 6, -pd + 13.5, pz)[0]} cy={pt(-pw + 6, -pd + 13.5, pz)[1]} r="1.6" fill="var(--hairline-edge, #C8643C)" />
      <line
        x1={pt(-pw + 10, -pd + 13.5, pz)[0]} y1={pt(-pw + 10, -pd + 13.5, pz)[1]}
        x2={pt(2, -pd + 13.5, pz)[0]}         y2={pt(2, -pd + 13.5, pz)[1]}
        stroke="var(--hairline-edge, #E07A52)" strokeWidth="1.6" strokeLinecap="round"
      />

      {/* ─── GUEST MESSAGE BUBBLE ─── */}
      <polygon
        points={`${pstr(-8, -pd + 19, pz + 1.5)} ${pstr(pw - 4, -pd + 19, pz + 1.5)} ${pstr(pw - 4, -pd + 29, pz + 1.5)} ${pstr(-8, -pd + 29, pz + 1.5)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-mid, #9E5D43)"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <line
        x1={pt(-4, -pd + 22.5, pz + 1.5)[0]} y1={pt(-4, -pd + 22.5, pz + 1.5)[1]}
        x2={pt(pw - 8, -pd + 22.5, pz + 1.5)[0]} y2={pt(pw - 8, -pd + 22.5, pz + 1.5)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="1.2" strokeLinecap="round"
      />
      <line
        x1={pt(-4, -pd + 26.5, pz + 1.5)[0]} y1={pt(-4, -pd + 26.5, pz + 1.5)[1]}
        x2={pt(pw - 14, -pd + 26.5, pz + 1.5)[0]} y2={pt(pw - 14, -pd + 26.5, pz + 1.5)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="1.2" strokeLinecap="round"
      />

      {/* ─── FLOATING AI CONCIERGE BUBBLE ─── */}
      {/* Dashed vertical drops */}
      <g stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.8" strokeDasharray="2.5 3" opacity="0.55">
        {[[-cw, -cd], [cw, -cd], [cw, cd], [-cw, cd]].map(([dx, dy], i) => (
          <line
            key={`drop${i}`}
            x1={pt(cxOff + dx, cyOff + dy, bubbleLift + pz)[0]} y1={pt(cxOff + dx, cyOff + dy, bubbleLift + pz)[1]}
            x2={pt(cxOff + dx, cyOff + dy, pz)[0]}               y2={pt(cxOff + dx, cyOff + dy, pz)[1]}
          />
        ))}
      </g>

      {/* Bubble left face */}
      <polygon
        points={`${pstr(cxOff - cw, cyOff - cd, bubbleLift + pz)} ${pstr(cxOff - cw, cyOff + cd, bubbleLift + pz)} ${pstr(cxOff - cw, cyOff + cd, bubbleLift + pz + cz)} ${pstr(cxOff - cw, cyOff - cd, bubbleLift + pz + cz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Bubble front face */}
      <polygon
        points={`${pstr(cxOff - cw, cyOff + cd, bubbleLift + pz)} ${pstr(cxOff + cw, cyOff + cd, bubbleLift + pz)} ${pstr(cxOff + cw, cyOff + cd, bubbleLift + pz + cz)} ${pstr(cxOff - cw, cyOff + cd, bubbleLift + pz + cz)}`}
        fill="var(--hairline-lo, #382218)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Bubble top face */}
      <polygon
        points={`${pstr(cxOff - cw, cyOff - cd, bubbleLift + pz + cz)} ${pstr(cxOff + cw, cyOff - cd, bubbleLift + pz + cz)} ${pstr(cxOff + cw, cyOff + cd, bubbleLift + pz + cz)} ${pstr(cxOff - cw, cyOff + cd, bubbleLift + pz + cz)}`}
        fill="var(--hairline-plate, #16140F)"
        stroke={pointer.active ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-edge, #E07A52)'}
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />
      {/* Concierge reply text lines */}
      <line
        x1={pt(cxOff - cw + 4, cyOff - cd + 5, bubbleLift + pz + cz)[0]} y1={pt(cxOff - cw + 4, cyOff - cd + 5, bubbleLift + pz + cz)[1]}
        x2={pt(cxOff + cw - 7, cyOff - cd + 5, bubbleLift + pz + cz)[0]} y2={pt(cxOff + cw - 7, cyOff - cd + 5, bubbleLift + pz + cz)[1]}
        stroke="var(--hairline-hi, #F4EFE6)" strokeWidth="1.7" strokeLinecap="round"
      />
      <line
        x1={pt(cxOff - cw + 4, cyOff - cd + 10, bubbleLift + pz + cz)[0]} y1={pt(cxOff - cw + 4, cyOff - cd + 10, bubbleLift + pz + cz)[1]}
        x2={pt(cxOff + cw - 12, cyOff - cd + 10, bubbleLift + pz + cz)[0]} y2={pt(cxOff + cw - 12, cyOff - cd + 10, bubbleLift + pz + cz)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="1.2" strokeLinecap="round"
      />
      {/* ✓✓ double checkmark */}
      <g stroke={pointer.active ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-edge, #C8643C)'} strokeWidth="1.4" fill="none">
        <polyline points={`${pt(cxOff + cw - 10, cyOff + cd - 5, bubbleLift + pz + cz).join(',')} ${pt(cxOff + cw - 8, cyOff + cd - 3, bubbleLift + pz + cz).join(',')} ${pt(cxOff + cw - 5, cyOff + cd - 7, bubbleLift + pz + cz).join(',')}`} />
        <polyline points={`${pt(cxOff + cw - 7, cyOff + cd - 5, bubbleLift + pz + cz).join(',')} ${pt(cxOff + cw - 5, cyOff + cd - 3, bubbleLift + pz + cz).join(',')} ${pt(cxOff + cw - 2, cyOff + cd - 7, bubbleLift + pz + cz).join(',')}`} />
      </g>

      {/* ─── SERVICE QUICK-ACTION PILLS ─── */}
      {[-20, 0, 20].map((bx, i) => (
        <polygon
          key={`btn-${i}`}
          points={`${pstr(bx - 7, pd - 12, pz + 1)} ${pstr(bx + 7, pd - 12, pz + 1)} ${pstr(bx + 7, pd - 4, pz + 1)} ${pstr(bx - 7, pd - 4, pz + 1)}`}
          fill="var(--hairline-lo, #382218)"
          stroke="var(--hairline-mid, #9E5D43)"
          strokeWidth="0.8"
        />
      ))}
      {[-20, 0, 20].map((bx, i) => (
        <circle
          key={`dot-${i}`}
          cx={pt(bx, pd - 8, pz + 1)[0]}
          cy={pt(bx, pd - 8, pz + 1)[1]}
          r="1.4" fill="var(--hairline-edge, #E07A52)"
        />
      ))}

      {/* Floating handoff token */}
      <g opacity={pointer.active ? '1' : '0.8'}>
        <polygon
          points={`${pstr(pw + 5, -10, 12)} ${pstr(pw + 20, -10, 12)} ${pstr(pw + 20, 10, 12)} ${pstr(pw + 5, 10, 12)}`}
          fill="var(--hairline-plate, #16140F)"
          stroke="var(--hairline-edge, #E07A52)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <line
          x1={pt(pw + 9, -3, 12)[0]}
          y1={pt(pw + 9, -3, 12)[1]}
          x2={pt(pw + 17, -3, 12)[0]}
          y2={pt(pw + 17, -3, 12)[1]}
          stroke="var(--hairline-hi, #F4EFE6)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <line
          x1={pt(pw + 9, 2, 12)[0]}
          y1={pt(pw + 9, 2, 12)[1]}
          x2={pt(pw + 15, 2, 12)[0]}
          y2={pt(pw + 15, 2, 12)[1]}
          stroke="var(--hairline-edge, #C8643C)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
