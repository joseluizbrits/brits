import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "calc(100vh - 240px)",
        margin: "0 80px",
        display: "grid",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.5rem, 2vw, 2rem)",
          color: "var(--blogText)",
          alignSelf: "end",
        }}
      >
        Oops! Esta página não existe 😕
      </h1>

      <Link
        href="/"
        style={{
          width: "fit-content",
          borderBottom: "1px solid var(--primary-light)",
          color: "var(--primary-light)",
          alignSelf: "start",
        }}
      >
        Volte para a home
      </Link>
    </div>
  );
}
