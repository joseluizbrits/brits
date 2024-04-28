import { createClient } from "@/prismicio";
import BlogPostList from "../BlogPostList";

type GetBlogPosts = {
  onlyFirst?: boolean;
  except?: string;
};

async function GetBlogPosts({ onlyFirst, except }: GetBlogPosts) {
  const client = createClient();
  const posts = onlyFirst
    ? [await client.getFirst()]
    : await client.getAllByType("blog_post");

  return <BlogPostList posts={posts} except={except} />;
}

export default GetBlogPosts;
