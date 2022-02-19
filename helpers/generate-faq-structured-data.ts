import { Faq } from '../interfaces';

const generateFaqStructuredData = (faq?: Faq) => {
  if (!faq) return null;

  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    ]
  };

  return JSON.stringify(json);
};

export default generateFaqStructuredData;
