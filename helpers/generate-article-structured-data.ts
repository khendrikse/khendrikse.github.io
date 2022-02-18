type StructuredDataInput = {
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
};

const generateArticleStructuredData = ({
  title,
  slug,
  description,
  image,
  date
}: StructuredDataInput) => {
  const BASE_URL = 'https://khendrikse.github.io/';

  const json = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${slug}`
    },
    headline: title,
    description,
    image,
    datePublished: date,
    dateModified: date, // '2015-02-05T09:20:00+08:00'
    author: {
      '@type': 'Person',
      name: 'Karin Hendrikse',
      url: `${BASE_URL}about`
    }
  };

  return JSON.stringify(json);
};

export default generateArticleStructuredData;
