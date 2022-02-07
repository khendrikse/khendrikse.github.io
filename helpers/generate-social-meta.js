import { Fragment } from 'react';

export const trimContent = (content, maxLength) => {
  let trimmed = content.substr(0, maxLength);

  if (trimmed.length !== content.length) {
    trimmed = trimmed
      .substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))
      .slice(0, trimmed.length - 3)
      .trim()
      .concat('...');
  }

  return trimmed;
};

const META_TAG_TYPES = {
  twitterCardType: content => (
    <meta key='twitter:card' name='twitter:card' content={content} />
  ),
  twitterSite: content => (
    <meta key='twitter:site' name='twitter:site' content={content} />
  ),
  twitterCreator: content => (
    <meta key='twitter:creator' name='twitter:creator' content={content} />
  ),
  description: content => (
    <Fragment key='description'>
      <meta name='description' content={trimContent(content, 155)} />
      <meta name='twitter:description' content={trimContent(content, 200)} />
      <meta property='og:description' content={trimContent(content, 250)} />
    </Fragment>
  ),
  title: content => (
    <Fragment key='title'>
      <title>{trimContent(content, 60)}</title>
      <meta name='twitter:title' content={trimContent(content, 70)} />
      <meta property='og:title' content={trimContent(content, 90)} />
    </Fragment>
  ),
  image: content => (
    <Fragment key='image'>
      <meta name='twitter:image' content={content} />
      <meta property='og:image' content={content} />
    </Fragment>
  ),
  imageAlt: content => (
    <meta
      key='twitter:image:alt'
      name='twitter:image:alt'
      content={trimContent(content, 70)}
    />
  ),
  type: content => <meta key='og:type' property='og:type' content={content} />,
  url: content => (
    <meta
      key='og:url'
      property='og:url'
      content={`https://khendrikse.github.io/${content}`}
    />
  )
};

const generateSocialMeta = data => {
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
    .filter(([key]) => META_TAG_TYPES[key])
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => META_TAG_TYPES[key](value));
};

export default generateSocialMeta;
