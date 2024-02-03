function LinkedInSquare({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" fill="none">
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M31.6 0H2.4A2.5 2.5 0 000 2.5v30C0 33.9 1 35 2.4 35h29.2c1.3 0 2.4-1.1 2.4-2.5v-30C34 1.1 33 0 31.6 0zM10.3 30h-5V13.3h5V30zM7.8 11a3 3 0 01-3-3 3 3 0 013-3 3 3 0 012.9 3 3 3 0 01-3 3zm21.4 19h-5v-8.1c0-2-.1-4.5-2.7-4.5s-3 2.2-3 4.3V30h-5V13.3h4.8v2.3a5.3 5.3 0 014.8-2.7c5.1 0 6 3.4 6 8V30z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h34v35H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedInSquare;
