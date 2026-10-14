'use client';

import React, { useRef, useState, useEffect } from 'react';

export function OperationsFigure({ intensity = 0.65 }: { intensity?: number }) {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });
  const [activeRow, setActiveRow] = useState(1);
  const [animOffset, setAnimOffset] = useState(0);
  const animFrame = useRef<number | null>(null);

  const targetOffset = pointer.active ? pointer.x * 14 * intensity : 0;

  useEffect(() => {
    let current = animOffset;
    const loop = () => {
      const diff = targetOffset - current;
      if (Math.abs(diff) > 0.05) {
        current += diff * 0.18;
        setAnimOffset(current);
        animFrame.current = requestAnimationFrame(loop);
      }
    };
    animFrame.current = requestAnimationFrame(loop);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [targetOffset]);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x, y, active: true });
    if (y < -0.3) setActiveRow(0);
    else if (y < 0.1) setActiveRow(1);
    else if (y < 0.5) setActiveRow(2);
    else setActiveRow(3);
  };

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0, active: false });
    setActiveRow(1);
  };

  // Scale 1.85 — fills viewport
  const scale = 1.85;
  const cos30 = 0.866025 * scale;
  const sin30 = 0.5 * scale;
  const cx = 160;
  const cy = 108;

  const pt = (x: number, y: number, z = 0): [number, number] => [
    Math.round((cx + (x - y) * cos30) * 10) / 10,
    Math.round((cy + (x + y) * sin30 - z * scale) * 10) / 10,
  ];

  const pstr = (x: number, y: number, z = 0) => {
    const [px, py] = pt(x, y, z);
    return `${px},${py}`;
  };

  // Board dimensions — tighter to fill viewport
  const bw = 50;
  const bd = 36;
  const bz = 3;

  const bookings = [
    { row: 0, x0: -32, x1: 6,  label: 'Suite Atlas' },
    { row: 1, x0: -14, x1: 36, label: 'Room Jardin' },
    { row: 2, x0: -36, x1: 10, label: 'Patio Deluxe' },
    { row: 3, x0: -2,  x1: 40, label: 'Terrace Suite' },
  ];

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
        <radialGradient id="op-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity={pointer.active ? '0.18' : '0.08'} />
          <stop offset="100%" stopColor="var(--hairline-edge, #C8643C)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={cx} cy={cy + 20} rx="130" ry="80" fill="url(#op-glow)" />

      {/* CAD Grid */}
      <g stroke="var(--hairline-lo, #382218)" strokeWidth="0.7" fill="none" opacity="0.5">
        {[-36, 0, 36].map((gy, i) => (
          <line key={`gy${i}`} x1={pt(-60, gy)[0]} y1={pt(-60, gy)[1]} x2={pt(60, gy)[0]} y2={pt(60, gy)[1]} />
        ))}
        {[-36, 0, 36].map((gx, i) => (
          <line key={`gx${i}`} x1={pt(gx, -50)[0]} y1={pt(gx, -50)[1]} x2={pt(gx, 50)[0]} y2={pt(gx, 50)[1]} />
        ))}
      </g>

      {/* ─── BOARD PLINTH ─── */}
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
      {/* Top surface */}
      <polygon
        points={`${pstr(-bw, -bd, bz)} ${pstr(bw, -bd, bz)} ${pstr(bw, bd, bz)} ${pstr(-bw, bd, bz)}`}
        fill="var(--hairline-plate, #16140F)"
        stroke="var(--hairline-edge, #E07A52)"
        strokeWidth="var(--hairline-stroke, 1.05)"
        strokeLinejoin="round"
      />

      {/* Chrome header bar */}
      <line
        x1={pt(-bw, -bd + 9, bz)[0]} y1={pt(-bw, -bd + 9, bz)[1]}
        x2={pt(bw, -bd + 9, bz)[0]}  y2={pt(bw, -bd + 9, bz)[1]}
        stroke="var(--hairline-mid, #9E5D43)" strokeWidth="0.9"
      />

      {/* Day column dividers */}
      {[-22, 0, 20].map((colX, i) => (
        <line
          key={`col-${i}`}
          x1={pt(colX, -bd + 9, bz)[0]} y1={pt(colX, -bd + 9, bz)[1]}
          x2={pt(colX, bd, bz)[0]}      y2={pt(colX, bd, bz)[1]}
          stroke="var(--hairline-lo, #382218)"
          strokeWidth="0.8"
          strokeDasharray="2.5 3"
        />
      ))}

      {/* Day notch dots */}
      {[-38, -11, 10, 32, 50].map((dayX, i) => (
        <circle
          key={`day-${i}`}
          cx={pt(dayX, -bd + 4.5, bz)[0]}
          cy={pt(dayX, -bd + 4.5, bz)[1]}
          r="1.4" fill="var(--hairline-mid, #9E5D43)"
        />
      ))}

      {/* ─── ROOM RESERVATION ROW SLABS ─── */}
      {bookings.map((item, idx) => {
        const rowY = -bd + 13 + idx * 14;
        const isCurrent = activeRow === idx;
        const rowLift = isCurrent ? 7 : 1.8;
        const xOff = isCurrent ? animOffset : 0;
        const sx = item.x0 + xOff;
        const ex = item.x1 + xOff;
        const depth = 9;

        return (
          <g key={`row-${idx}`}>
            {/* Row label notch */}
            <line
              x1={pt(-bw + 3, rowY + 4.5, bz)[0]} y1={pt(-bw + 3, rowY + 4.5, bz)[1]}
              x2={pt(-bw + 14, rowY + 4.5, bz)[0]} y2={pt(-bw + 14, rowY + 4.5, bz)[1]}
              stroke={isCurrent ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-mid, #9E5D43)'}
              strokeWidth={isCurrent ? 2 : 1.2}
              strokeLinecap="round"
            />
            {/* Status dot */}
            <circle
              cx={pt(-bw + 18, rowY + 4.5, bz)[0]}
              cy={pt(-bw + 18, rowY + 4.5, bz)[1]}
              r={isCurrent ? 2 : 1.3}
              fill={isCurrent ? 'var(--hairline-edge, #C8643C)' : 'var(--hairline-mid, #9E5D43)'}
            />

            {/* Shadow on board when lifted */}
            {isCurrent && (
              <polygon
                points={`${pstr(sx, rowY, bz)} ${pstr(ex, rowY, bz)} ${pstr(ex, rowY + depth, bz)} ${pstr(sx, rowY + depth, bz)}`}
                fill="var(--hairline-lo, #382218)"
                opacity="0.85"
              />
            )}

            {/* Left thickness */}
            <polygon
              points={`${pstr(sx, rowY, bz)} ${pstr(sx, rowY + depth, bz)} ${pstr(sx, rowY + depth, bz + rowLift)} ${pstr(sx, rowY, bz + rowLift)}`}
              fill="var(--hairline-lo, #382218)"
              stroke="var(--hairline-edge, #E07A52)"
              strokeWidth="var(--hairline-stroke, 1.05)"
              strokeLinejoin="round"
            />
            {/* Front thickness */}
            <polygon
              points={`${pstr(sx, rowY + depth, bz)} ${pstr(ex, rowY + depth, bz)} ${pstr(ex, rowY + depth, bz + rowLift)} ${pstr(sx, rowY + depth, bz + rowLift)}`}
              fill="var(--hairline-lo, #382218)"
              stroke="var(--hairline-edge, #E07A52)"
              strokeWidth="var(--hairline-stroke, 1.05)"
              strokeLinejoin="round"
            />
            {/* Top face */}
            <polygon
              points={`${pstr(sx, rowY, bz + rowLift)} ${pstr(ex, rowY, bz + rowLift)} ${pstr(ex, rowY + depth, bz + rowLift)} ${pstr(sx, rowY + depth, bz + rowLift)}`}
              fill={isCurrent ? 'var(--hairline-plate, #16140F)' : 'var(--hairline-lo, #382218)'}
              stroke={isCurrent ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-edge, #E07A52)'}
              strokeWidth="var(--hairline-stroke, 1.05)"
              strokeLinejoin="round"
            />
            {/* Booking detail line */}
            <line
              x1={pt(sx + 3, rowY + 4.5, bz + rowLift)[0]} y1={pt(sx + 3, rowY + 4.5, bz + rowLift)[1]}
              x2={pt(ex - 8, rowY + 4.5, bz + rowLift)[0]} y2={pt(ex - 8, rowY + 4.5, bz + rowLift)[1]}
              stroke={isCurrent ? 'var(--hairline-edge, #E07A52)' : 'var(--hairline-mid, #9E5D43)'}
              strokeWidth={isCurrent ? 1.8 : 1.1}
              strokeLinecap="round"
            />
            {/* Guest badge */}
            <circle
              cx={pt(ex - 3, rowY + 4.5, bz + rowLift)[0]}
              cy={pt(ex - 3, rowY + 4.5, bz + rowLift)[1]}
              r="1.6"
              fill={isCurrent ? 'var(--hairline-hi, #F4EFE6)' : 'var(--hairline-edge, #E07A52)'}
            />
          </g>
        );
      })}

      {/* ─── FLOATING DISPATCH BADGE (upper-right) ─── */}
      <g opacity={pointer.active ? '1' : '0.8'}>
        <polygon
          points={`${pstr(30, -bd - 8, 14)} ${pstr(50, -bd - 8, 14)} ${pstr(50, -bd + 4, 14)} ${pstr(30, -bd + 4, 14)}`}
          fill="var(--hairline-plate, #16140F)"
          stroke="var(--hairline-hi, #F4EFE6)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Checkmark */}
        <polyline
          points={`${pt(33, -bd - 2, 14).join(',')} ${pt(37, -bd + 2, 14).join(',')} ${pt(46, -bd - 6, 14).join(',')}`}
          fill="none"
          stroke="var(--hairline-edge, #C8643C)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
