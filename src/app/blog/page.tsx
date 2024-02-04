import Link from "next/link";
import { useRouter } from "next/router";

function page() {
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
        Eu só tenho um post, então essa página ainda está sendo construída 🙃
      </h1>

      <Link
        href="/blog/eu-ainda-serei-um-profissional-relevante-no-futuro"
        style={{
          width: "fit-content",
          borderBottom: "1px solid var(--primaryLight)",
          color: "var(--primaryLight)",
          alignSelf: "start",
        }}
      >
        Vá para o meu primeiro post
      </Link>
    </div>
  );
}

export default page;
