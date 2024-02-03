function Talk() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          fillRule="evenodd"
          d="M22 16a2 2 0 104 0 2 2 0 00-4 0zm-8 0a2 2 0 104 0 2 2 0 00-4 0zm-8 0a2 2 0 104 0 2 2 0 00-4 0zM16 0A16 16 0 002.3 24.2l-2.1 5a2 2 0 002.6 2.6l5-2.1A16 16 0 1016 0z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="16"
          x2="16"
          y1="3.2"
          y2="25.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Talk;
