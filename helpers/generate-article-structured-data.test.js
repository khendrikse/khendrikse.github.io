import generateArticleStructuredData from './generate-article-structured-data';

describe('generateArticleStructuredData', () => {
  it('generates the correct structured data', () => {
    const input = {
      title: 'title',
      slug: 'fake-slug',
      description: 'this is a description',
      image: 'image.png',
      date: '2015-02-05T09:20:00+08:00'
    };
    expect(generateArticleStructuredData(input)).toBe(
      // eslint-disable-next-line max-len
      '{"@context":"https://schema.org","@type":"BlogPosting","mainEntityOfPage":{"@type":"WebPage","@id":"https://khendrikse.github.io/fake-slug"},"headline":"title","description":"this is a description","image":"image.png","datePublished":"2015-02-05T09:20:00+08:00","dateModified":"2015-02-05T09:20:00+08:00","author":{"@type":"Person","name":"Karin Hendrikse","url":"https://khendrikse.github.io/about"}}'
    );
  });
});
