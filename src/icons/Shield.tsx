function Shield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="100"
      fill="none"
    >
      <path
        stroke="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.3"
        d="M87.6 46.3a48 48 0 01-35 45c-1.4.4-2.9.4-4.2 0a48 48 0 01-35-45V28a10 10 0 015.8-8.5L42.4 10c5.2-2.2 11-2.2 16.3 0l23.2 9.5a10 10 0 015.8 8.5v18.3z"
      ></path>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="6.3"
        opacity="0.4"
      >
        <path
          stroke="url(#b)"
          d="M50.5 52a8.3 8.3 0 100-16.6 8.3 8.3 0 000 16.7z"
        ></path>
        <path stroke="url(#c)" d="M50.5 52v12.6"></path>
      </g>
      <defs>
        <linearGradient
          id="a"
          x1="50.5"
          x2="50.5"
          y1="16.8"
          y2="74.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="50.5"
          x2="50.5"
          y1="37.1"
          y2="48.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="51"
          x2="51"
          y1="53.4"
          y2="62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Shield;
