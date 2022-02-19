import generateSocialMeta, { trimContent } from './generate-social-meta';

describe('trimContent', () => {
  it('trims a string to the right size', () => {
    expect(trimContent('A long string that can be smaller', 15)).toBe(
      'A long strin...'
    );
  });
});

describe('generateSocialMeta', () => {
  it('generates social meta tags using default fields', () => {
    const result = generateSocialMeta();
    expect(result).toMatchSnapshot();
  });

  it('generates social meta tags using the passed object', () => {
    const input = {
      twitterCardType: 'summary',
      twitterSite: 'A site',
      twitterCreator: 'A creator',
      description: 'A description',
      title: 'A title',
      image: 'image-alt.png',
      imageAlt: 'An image alt',
      type: 'website',
      url: 'fake-url'
    };
    const result = generateSocialMeta(input);
    expect(result).toMatchSnapshot();
  });
});
