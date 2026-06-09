interface LogoProps {
  size?: number;
  className?: string;
}

// The S spiral paths extracted from the full SVG, as absolute coordinates.
// Original combined path had rectangle + S as subpaths; here only the S arcs.
// Coordinate system: translate(0,10800) scale(0.1,-0.1) maps path units to viewBox 0-1080.
const S_PATH =
  // Arc 1: starts at M5680,8610 (= 0+5680, 5400+3210 in path coords)
  'M5680 8610 c458 -35 907 -191 1300 -453 132 -88 208 -149 340 -273 352 -330 582 -682 725 -1109 92 -275 127 -499 128 -800 0 -230 -8 -273 -54 -308 -23 -17 -29 -17 -52 -5 -13 7 -64 58 -113 113 -126 144 -373 387 -489 484 -630 523 -1443 972 -1961 1083 -93 20 -136 23 -289 22 -163 -1 -189 -3 -279 -28 -348 -95 -613 -310 -763 -622 -80 -165 -105 -275 -106 -454 -1 -161 15 -249 73 -398 57 -149 185 -331 303 -434 97 -84 539 -394 710 -497 43 -26 47 -58 8 -53 -51 5 -538 285 -833 478 -413 270 -751 553 -930 779 -302 381 -389 741 -257 1071 91 232 218 414 439 634 391 390 885 645 1421 734 263 44 443 54 679 36z ' +
  // Arc 2: starts at M5708,6196 (= 5680+28, 8610-2414 in path coords)
  'M5708 6196 c547 -211 1219 -606 1623 -953 206 -177 367 -365 458 -534 120 -223 155 -473 97 -702 -156 -616 -741 -1190 -1490 -1461 -302 -110 -588 -158 -926 -158 -450 0 -832 94 -1251 308 -290 148 -505 307 -749 553 -229 230 -377 435 -510 706 -143 293 -222 566 -256 894 -19 176 -15 388 9 443 20 47 56 72 88 59 13 -5 83 -73 154 -152 488 -536 1298 -1105 2035 -1429 505 -222 947 -237 1319 -45 331 171 542 522 518 859 -17 223 -110 420 -281 592 -136 137 -323 242 -671 379 -270 105 -292 115 -313 138 -33 35 -49 84 -66 202 -28 204 -29 217 -11 263 32 80 90 90 223 38z';

export default function Logo({ size = 36, className = '' }: LogoProps) {
  const radius = Math.round(size * 0.22);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1080 1080"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ borderRadius: radius, display: 'block' }}
    >
      <defs>
        <linearGradient id="sg" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#EDD382" />
          <stop offset="40%" stopColor="#FC9E4F" />
          <stop offset="100%" stopColor="#FF521B" />
        </linearGradient>
      </defs>
      {/* Black background */}
      <rect width="1080" height="1080" fill="#000000" />
      {/* S spiral — orange gradient, S arcs only (no rectangle) */}
      <g transform="translate(0,1080) scale(0.1,-0.1)" fill="url(#sg)" stroke="none">
        <path d={S_PATH} />
      </g>
    </svg>
  );
}
