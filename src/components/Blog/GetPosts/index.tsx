import { createClient } from "@/prismicio";
import PostList from "../PostList";

type GetPosts = {
  onlyFirst?: boolean;
  except?: string;
};

async function GetPosts({ onlyFirst, except }: GetPosts) {
  const client = createClient();
  const posts = onlyFirst
    ? [await client.getFirst()]
    : await client.getAllByType("blog_post");

  return <PostList posts={posts} except={except} />;
}

export default GetPosts;
