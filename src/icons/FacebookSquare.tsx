function FacebookSquare({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" fill="none">
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M4.9 0A5 5 0 000 5v25a5 5 0 004.9 5h7.4V23.6h-4v-6.1h4v-2.6c0-6.8 3-10 9.5-10 1.2 0 3.4.3 4.2.5V11h-2.2c-3.2 0-4.4 1.2-4.4 4.4v2.2h6.3l-1 6.1h-5.3V35H29a5 5 0 004.9-5V5A5 5 0 0029 0H5z"
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

export default FacebookSquare;
