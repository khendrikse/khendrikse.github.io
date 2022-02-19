import generateBreadcrumbs from './generate-breadcrumbs';

describe('generateBreadcrumbs', () => {
  it('generates breadcrumbs structured data', () => {
    const input = [{ name: 'a name', item: 'thing' }];
    const result = generateBreadcrumbs(input);
    expect(result).toMatchSnapshot();
  });

  it('generates breadcrumbs structured data with only home', () => {
    const result = generateBreadcrumbs();
    expect(result).toMatchSnapshot();
  });
});
