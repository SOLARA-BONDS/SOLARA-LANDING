export function SolaraLogoMark({ size = 36 }: { size?: number }) {
  const uid = 'slm';
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0a0820"/>
      <defs>
        <linearGradient id={`${uid}g`} x1="62" y1="14" x2="40" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5E17A"/>
          <stop offset="30%" stopColor="#EDD382"/>
          <stop offset="62%" stopColor="#FC9E4F"/>
          <stop offset="100%" stopColor="#FF521B"/>
        </linearGradient>
        <mask id={`${uid}um`}>
          <circle cx="60" cy="37" r="32" fill="white"/>
          <circle cx="45" cy="51" r="22" fill="black"/>
        </mask>
        <mask id={`${uid}lm`}>
          <circle cx="40" cy="63" r="32" fill="white"/>
          <circle cx="55" cy="49" r="22" fill="black"/>
        </mask>
        <clipPath id={`${uid}uc`}><rect x="0" y="0" width="100" height="51"/></clipPath>
        <clipPath id={`${uid}lc`}><rect x="0" y="49" width="100" height="51"/></clipPath>
      </defs>
      {/* Upper crescent */}
      <g clipPath={`url(#${uid}uc)`}>
        <circle cx="60" cy="37" r="32" fill={`url(#${uid}g)`} mask={`url(#${uid}um)`}/>
      </g>
      {/* Lower crescent */}
      <g clipPath={`url(#${uid}lc)`}>
        <circle cx="40" cy="63" r="32" fill={`url(#${uid}g)`} mask={`url(#${uid}lm)`}/>
      </g>
    </svg>
  );
}

export function SolaraLogoFull({ size = 40 }: { size?: number }) {
  const uid = 'slf';
  return (
    <svg width={size * 3.2} height={size} viewBox="0 0 320 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#0a0820"/>
      <defs>
        <linearGradient id={`${uid}g`} x1="62" y1="14" x2="40" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5E17A"/>
          <stop offset="30%" stopColor="#EDD382"/>
          <stop offset="62%" stopColor="#FC9E4F"/>
          <stop offset="100%" stopColor="#FF521B"/>
        </linearGradient>
        <mask id={`${uid}um`}>
          <circle cx="60" cy="37" r="32" fill="white"/>
          <circle cx="45" cy="51" r="22" fill="black"/>
        </mask>
        <mask id={`${uid}lm`}>
          <circle cx="40" cy="63" r="32" fill="white"/>
          <circle cx="55" cy="49" r="22" fill="black"/>
        </mask>
        <clipPath id={`${uid}uc`}><rect x="0" y="0" width="100" height="51"/></clipPath>
        <clipPath id={`${uid}lc`}><rect x="0" y="49" width="100" height="51"/></clipPath>
      </defs>
      <g clipPath={`url(#${uid}uc)`}>
        <circle cx="60" cy="37" r="32" fill={`url(#${uid}g)`} mask={`url(#${uid}um)`}/>
      </g>
      <g clipPath={`url(#${uid}lc)`}>
        <circle cx="40" cy="63" r="32" fill={`url(#${uid}g)`} mask={`url(#${uid}lm)`}/>
      </g>
      {/* Wordmark */}
      <text
        x="118"
        y="66"
        fontFamily="Outfit, system-ui, sans-serif"
        fontWeight="700"
        fontSize="46"
        letterSpacing="-1"
        fill="#F2F3AE"
      >
        SOLARA
      </text>
    </svg>
  );
}
