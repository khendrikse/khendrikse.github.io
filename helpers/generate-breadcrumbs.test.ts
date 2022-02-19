import generateBreadcrumbs from './generate-breadcrumbs';

describe('generateBreadcrumbs', () => {
  it('generates breadcrumbs structured data', () => {
    const input = [{ name: 'a name', item: 'thing' }];
    expect(generateBreadcrumbs(input)).toBe(
      // eslint-disable-next-line max-len
      '{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"home","item":"https://khendrikse.github.io/"},{"@type":"ListItem","position":2,"name":"a name","item":"https://khendrikse.github.io/thing"}]}'
    );
  });

  it('generates breadcrumbs structured data with only home', () => {
    expect(generateBreadcrumbs()).toBe(
      // eslint-disable-next-line max-len
      '{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"home","item":"https://khendrikse.github.io/"}]}'
    );
  });
});
