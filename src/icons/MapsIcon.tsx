function MapsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none">
      <path
        stroke="url(#a)"
        strokeWidth="4"
        d="M32 7.3a17.3 17.3 0 00-17.3 17.4c0 5.6 1.4 9.6 6.9 16.3 2.6 3 4.8 6.1 6.7 9.5 2 4 1.7 6.8 3.7 6.8s1.7-2.7 3.7-6.8c1.9-3.4 4.1-6.5 6.7-9.5 5.5-6.7 7-10.7 7-16.3A17.5 17.5 0 0032 7.3z"
      ></path>
      <path
        stroke="url(#b)"
        strokeWidth="4"
        d="M32 31.3A6.7 6.7 0 1032 18a6.7 6.7 0 000 13.3z"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="41.9"
          x2="42.1"
          y1="17.3"
          y2="57.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#692FA4"></stop>
          <stop offset="1" stopColor="#8A2A99"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="35.8"
          x2="35.9"
          y1="20.7"
          y2="31.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#692FA4"></stop>
          <stop offset="1" stopColor="#8A2A99"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MapsIcon;
