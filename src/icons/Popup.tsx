function Popup({ secondary }: { secondary?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={secondary ? "var(--white)" : "var(--primaryDark)"}
        d="M19.2 2.4H9.57A2.37 2.37 0 007.2 4.78v9.62a2.4 2.4 0 002.4 2.4h9.6a2.4 2.4 0 002.4-2.4V4.8a2.4 2.4 0 00-2.4-2.4zm0 12H9.6V4.8h9.6v9.6zM4.8 12H2.4v7.2a2.4 2.4 0 002.4 2.4H12v-2.4H4.8V12z"
      ></path>
    </svg>
  );
}

export default Popup;
