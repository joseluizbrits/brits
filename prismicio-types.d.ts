// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Blog Post → Hero*
 */
export interface BlogPostDocumentDataHeroItem {
  /**
   * Title field in *Blog Post → Hero*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero[].blog_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_title: prismic.TitleField;

  /**
   * Título Ênfase field in *Blog Post → Hero*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero[].blog_title_emphasis
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blog_title_emphasis: prismic.KeyTextField;

  /**
   * Sub-título field in *Blog Post → Hero*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero[].blog_subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_subtitle: prismic.RichTextField;
}

type BlogPostDocumentDataSlicesSlice =
  | QuoteSlice
  | BlogImageSlice
  | ParagraphSlice
  | ParagraphTitleSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Hero field in *Blog Post*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.hero[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hero: prismic.GroupField<Simplify<BlogPostDocumentDataHeroItem>>;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.og_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

export type AllDocumentTypes = BlogPostDocument;

/**
 * Primary content in *BlogImage → Primary*
 */
export interface BlogImageSliceDefaultPrimary {
  /**
   * Imagem field in *BlogImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_image.primary.blog_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blog_image: prismic.ImageField<never>;
}

/**
 * Default variation for BlogImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogImage*
 */
type BlogImageSliceVariation = BlogImageSliceDefault;

/**
 * BlogImage Shared Slice
 *
 * - **API ID**: `blog_image`
 * - **Description**: BlogImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogImageSlice = prismic.SharedSlice<
  "blog_image",
  BlogImageSliceVariation
>;

/**
 * Primary content in *Paragraph → Primary*
 */
export interface ParagraphSliceDefaultPrimary {
  /**
   * Parágrafo field in *Paragraph → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph.primary.blog_paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_paragraph: prismic.RichTextField;
}

/**
 * Default variation for Paragraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Paragraph*
 */
type ParagraphSliceVariation = ParagraphSliceDefault;

/**
 * Paragraph Shared Slice
 *
 * - **API ID**: `paragraph`
 * - **Description**: Paragraph
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphSlice = prismic.SharedSlice<
  "paragraph",
  ParagraphSliceVariation
>;

/**
 * Primary content in *ParagraphTitle → Primary*
 */
export interface ParagraphTitleSliceDefaultPrimary {
  /**
   * Título do Parágrafo field in *ParagraphTitle → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: paragraph_title.primary.blog_paragraph_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_paragraph_title: prismic.TitleField;
}

/**
 * Default variation for ParagraphTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParagraphTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ParagraphTitle*
 */
type ParagraphTitleSliceVariation = ParagraphTitleSliceDefault;

/**
 * ParagraphTitle Shared Slice
 *
 * - **API ID**: `paragraph_title`
 * - **Description**: ParagraphTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParagraphTitleSlice = prismic.SharedSlice<
  "paragraph_title",
  ParagraphTitleSliceVariation
>;

/**
 * Primary content in *Quote → Primary*
 */
export interface QuoteSliceDefaultPrimary {
  /**
   * Citação field in *Quote → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.blog_quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blog_quote: prismic.RichTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataHeroItem,
      BlogPostDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogImageSlice,
      BlogImageSliceDefaultPrimary,
      BlogImageSliceVariation,
      BlogImageSliceDefault,
      ParagraphSlice,
      ParagraphSliceDefaultPrimary,
      ParagraphSliceVariation,
      ParagraphSliceDefault,
      ParagraphTitleSlice,
      ParagraphTitleSliceDefaultPrimary,
      ParagraphTitleSliceVariation,
      ParagraphTitleSliceDefault,
      QuoteSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceVariation,
      QuoteSliceDefault,
    };
  }
}
