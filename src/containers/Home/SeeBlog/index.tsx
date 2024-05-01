import { createClient } from "@/prismicio";
import SeeBlogContent from "./content";

async function SeeBlog() {
  const client = createClient();
  const post = await client.getFirst();

  return <SeeBlogContent post={post} />;
}

export default SeeBlog;
