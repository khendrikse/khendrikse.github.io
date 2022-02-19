import generateArticleStructuredData from './generate-article-structured-data';

describe('generateArticleStructuredData', () => {
  it('generates article structured data', () => {
    const input = {
      title: 'title',
      slug: 'fake-slug',
      description: 'this is a description',
      image: 'image.png',
      date: '2015-02-05T09:20:00+08:00'
    };

    const result = generateArticleStructuredData(input)
    expect(result).toMatchSnapshot();
  });
});
