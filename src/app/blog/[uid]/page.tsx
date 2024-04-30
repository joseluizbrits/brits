import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Hero from "@/containers/Blog/Hero";
import Post from "@/containers/Blog/Post";
import Author from "@/components/Blog/Author";
import Share from "@/components/Blog/Share";
import CallMe from "@/components/Blog/CallMe";

import Popup from "@/components/Blog/Popup";
import GetPosts from "@/components/Blog/GetPosts";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return (
    <>
      <Hero data={page.data.hero[0]} />

      <Post>
        <Share position="top" />
        <Author date={page.data.blog_post_date} />
        <SliceZone slices={page.data.slices} components={components} />
        <Share position="bottom" />
        <CallMe />
      </Post>

      <div
        className="container"
        style={{
          paddingBottom: "120px",
          display: "grid",
          gap: "80px",
        }}
      >
        <span
          style={{
            fontSize: "3rem",
            textAlign: "center",
            letterSpacing: "0.1rem",
            color: "var(--primary)",
            fontWeight: 700,
          }}
        >
          Veja também
          <br />
          ...
        </span>

        <GetPosts except={page.uid} />
      </div>

      <Popup />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title + " | BRITS Blog",
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.og_image.url || ""],
      description: page.data.meta_description || "",
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
