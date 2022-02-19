import { ParsedUrlQuery } from 'querystring';

export type FaqItem = {
  question: string;
  answer: string;
}

export type Faq = Array<FaqItem> | null;
export type Post = {
  slug: string;
  intro: string;
  date: string;
  tags: string;
  description: string;
  title: string;
  cover_image_alt: string;
  cover_image: string;
  faq: Faq;
  oldBlog?: boolean;
};

export interface StaticPropsContextParams extends ParsedUrlQuery {
  slug: string;
}

export type Breadcrumb = {
  item: string;
  name: string;
};

export type SocialMeta = {
  twitterCardType?: string;
  description?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  url?: string;
};

export type Project = {
  title: string;
  image: string;
  content: string;
  link: string;
  key?: string;
};

export type RequireContext = {
  [x: string]: any;
}

export interface BlogPostProps extends Post {
  image: string;
  markdownBody: string;
  frontmatter: Post;
  siteTitle: string;
}

export type BlogProps = {
  title: string;
  posts: Array<Post>;
  currentCategory: string;
  socialMeta: SocialMeta;
  categories: Array<string>;
  breadcrumbs: Array<Breadcrumb>;
};
