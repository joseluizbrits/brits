function Arrow({ color }: { color: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16m0 0l-4-4m4 4l-4 4"
      ></path>
    </svg>
  );
}

export default Arrow;
