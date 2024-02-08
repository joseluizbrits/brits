import { createClient } from "@/prismicio";

import TitleCircle from "@/components/TitleCircle";
import GalaxiesImage from "@/components/GalaxiesImage";
import BlogPostList from "@/components/BlogPostList";

async function page() {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <>
      <GalaxiesImage position="top" />

      <main
        className="container"
        style={{
          backgroundColor: "var(--blogBody)",
          paddingBottom: "80px",
          display: "grid",
          gap: "80px",
        }}
      >
        <TitleCircle>Todos os Posts</TitleCircle>
        <BlogPostList posts={blogPosts} />
      </main>

      <GalaxiesImage position="bottom" />
    </>
  );
}

export default page;
