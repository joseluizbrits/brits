function Quotes({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.2062 8.77869C25.4859 10.0239 0.014 12.853 0 47.5573V91.2214H39.542V44.5039H26.4122C25.5804 32.0295 35.8525 28.8084 47.0228 26.3359L43.2062 8.77869ZM96.1832 8.77869C78.4629 10.0239 52.991 12.8531 52.9771 47.5573V91.2214H92.5192V44.5039H79.3893C78.5574 32.0295 88.8297 28.8084 100 26.3359L96.1832 8.77869Z"
        fill="url(#paint0_linear_72_505)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_72_505"
          x1="50"
          y1="8.77869"
          x2="50"
          y2="91.2214"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.351301" stopColor="#862FA4" />
          <stop offset="1" stopColor="#692FA4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Quotes;
