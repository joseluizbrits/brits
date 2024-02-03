function Bars({ className }: { className: "top" | "bottom" }) {
  return (
    <svg
      className={"bars " + className}
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="136"
      fill="none"
    >
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M-179 181.1H95v4h-274z"
          transform="rotate(-31.7 -179 181.1)"
        ></path>
        <path
          fill="url(#c)"
          d="M-74 144.1h274v4H-74z"
          transform="rotate(-31.7 -74 144.1)"
        ></path>
        <path
          fill="url(#d)"
          d="M-89 181.1h274v4H-89z"
          transform="rotate(-31.7 -89 181.1)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="-42"
          x2="-42"
          y1="181.5"
          y2="184.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="63"
          x2="63"
          y1="144.5"
          y2="147.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <linearGradient
          id="d"
          x1="48"
          x2="48"
          y1="181.5"
          y2="184.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A2A99"></stop>
          <stop offset="1" stopColor="#8DFFF8"></stop>
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h160v136H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Bars;
