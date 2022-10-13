import { SocialMeta } from 'interfaces';
import { Fragment } from 'react';

export const trimContent = (content: string, maxLength: number) => {
  let trimmed = content.substring(0, maxLength);

  if (trimmed.length !== content.length) {
    trimmed = trimmed
      .substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))
      .slice(0, trimmed.length - 3)
      .trim()
      .concat('...');
  }

  return trimmed;
};

const META_TAG_TYPES = {
  twitterCardType: (content: string) => (
    <meta key='twitter:card' name='twitter:card' content={content} />
  ),
  twitterSite: (content: string) => (
    <meta key='twitter:site' name='twitter:site' content={content} />
  ),
  twitterCreator: (content: string) => (
    <meta key='twitter:creator' name='twitter:creator' content={content} />
  ),
  description: (content: string) => (
    <Fragment key='description'>
      <meta name='description' content={trimContent(content, 155)} />
      <meta name='twitter:description' content={trimContent(content, 200)} />
      <meta property='og:description' content={trimContent(content, 250)} />
    </Fragment>
  ),
  title: (content: string) => (
    <Fragment key='title'>
      <title>{trimContent(content, 60)}</title>
      <meta name='twitter:title' content={trimContent(content, 70)} />
      <meta property='og:title' content={trimContent(content, 90)} />
    </Fragment>
  ),
  image: (content: string) => (
    <Fragment key='image'>
      <meta name='twitter:image' content={content} />
      <meta property='og:image' content={content} />
    </Fragment>
  ),
  imageAlt: (content: string) => (
    <meta
      key='twitter:image:alt'
      name='twitter:image:alt'
      content={trimContent(content, 70)}
    />
  ),
  type: (content: string) => (
    <meta key='og:type' property='og:type' content={content} />
  ),
  url: (content: string) => (
    <meta
      key='og:url'
      property='og:url'
      content={`https://velvety-tartufo-f1de54.netlify.app/${content}`}
    />
  )
};

const generateSocialMeta = (data?: SocialMeta) => {
  const withDefault = {
    title: 'Karin Hendrikse',
    description: 'A personal playground and portfolio.',
    twitterSite: '@k_henhey',
    twitterCreator: '@k_henhey',
    twitterCardType: 'summary',
    type: 'website',
    url: '',
    ...data
  };
  return Object.entries(withDefault)
    .filter(([key]) => META_TAG_TYPES.hasOwnProperty(key))
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => {
      const typeElement = META_TAG_TYPES[key as keyof typeof META_TAG_TYPES];
      return typeElement(value);
    });
};

export default generateSocialMeta;
