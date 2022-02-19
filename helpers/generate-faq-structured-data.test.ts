import generateFaqStructuredData from './generate-faq-structured-data';

describe('generateFaqStructuredData', () => {
  it('generates faq structured data', () => {
    const input = [{ question: 'a question', answer: 'an answer' }];
    const result = generateFaqStructuredData(input);
    expect(result).toMatchSnapshot();
  });

  it('returns null without input', () => {
    expect(generateFaqStructuredData()).toBe(null);
  });
});
