function XTwitterSquare({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" fill="none">
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M4.9 0A5 5 0 000 5v25a5 5 0 004.9 5H29a5 5 0 004.9-5V5A5 5 0 0029 0H5zm22.5 6.6l-7.9 9.2 9.3 12.6h-7.3L16 20.8l-6.5 7.6H5.8l8.4-9.9-9-12h7.5l5.2 7 5.9-7h3.6zm-2.9 19.6L11.6 8.7H9.5l13 17.5h2z"
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

export default XTwitterSquare;
