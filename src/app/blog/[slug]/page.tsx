import HeroBlog from "@/components/HeroBlog";
import Share from "@/components/Share";

function page() {
  return (
    <>
      <HeroBlog />
      <main
        style={{
          backgroundColor: "var(--blogBody)",
          padding: "40px 400px 80px 400px",
        }}
      >
        <Share />
      </main>
    </>
  );
}

export default page;
