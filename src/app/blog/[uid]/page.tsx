import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import HeroBlog from "@/components/HeroBlog";
import Author from "@/components/Author";
import Share from "@/components/Share";
import CallMe from "@/components/CallMe";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return (
    <>
      <HeroBlog data={page.data.hero[0]} />
      <article className="blog-wrapper">
        <Share position="top" />
        <Author />
        <SliceZone slices={page.data.slices} components={components} />
        <Share position="bottom" />
        <CallMe />
      </article>
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
    title: page.data.meta_title,
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
