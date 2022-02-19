import { Breadcrumb } from 'interfaces';

const generateBreadcrumbs = (crumbs: Array<Breadcrumb> = []) => {
  const BASE_URL = 'https://khendrikse.github.io/';
  const crumbsList = [{ name: 'home', item: '' }, ...crumbs];

  const json = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: crumbsList.map(({ name, item }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${BASE_URL}${item}`
    }))
  };

  return JSON.stringify(json);
};

export default generateBreadcrumbs;
