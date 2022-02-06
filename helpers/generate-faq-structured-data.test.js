import generateFaqStructuredData from './generate-faq-structured-data';

describe('generateFaqStructuredData', () => {
  it('generates faq structured data', () => {
    const input = [{ question: 'a question', answer: 'an answer' }];
    expect(generateFaqStructuredData(input)).toBe(
      // eslint-disable-next-line max-len
      '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[[{"@type":"Question","name":"a question","acceptedAnswer":{"@type":"Answer","text":"an answer"}}]]}'
    );
  });

  it('returns null without input', () => {
    expect(generateFaqStructuredData()).toBe(null);
  });
});
