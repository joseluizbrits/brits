function GalleryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none">
      <path fill="url(#a)" d="M18 36a6 6 0 100-12 6 6 0 000 12z"></path>
      <path
        fill="url(#b)"
        d="M56 52a8 8 0 01-8 8H8a8 8 0 01-8-8V20a8 8 0 018-8 8 8 0 018-8h40a8 8 0 018 8v32a8 8 0 01-8 8zm0-44H16a4 4 0 00-4 4h36a8 8 0 018 8v28a4 4 0 004-4V12a4 4 0 00-4-4zM8 16a4 4 0 00-4 4v32l10.6-9.4a2 2 0 012.5-.3l10.7 7.1 14.8-14.8a2 2 0 012.3-.4L52 42V20a4 4 0 00-4-4H8z"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="21.4"
          x2="21.5"
          y1="26.4"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#692FA4"></stop>
          <stop offset="1" stopColor="#8A2A99"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="50.3"
          x2="50.4"
          y1="15.2"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#692FA4"></stop>
          <stop offset="1" stopColor="#8A2A99"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GalleryIcon;
