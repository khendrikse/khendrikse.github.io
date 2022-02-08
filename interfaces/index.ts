export type Post = {
  slug: string;
  intro: string;
  date: string;
  description: string;
  title: string;
};

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
