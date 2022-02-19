import getCategories from './get-categories';

describe('getCategories', () => {
  it('returns an empty array without input', () => {
    const input: Array<{ tags: string }> = [];
    expect(getCategories(input)).toStrictEqual([]);
  });

  it('returns an array with categories', () => {
    const input = [
      { tags: 'category1, category2' },
      { tags: 'category3, category2' }
    ];
    expect(getCategories(input)).toStrictEqual([
      'category1',
      'category2',
      'category3'
    ]);
  });

  it('returns an array without categories if there are no tags a post', () => {
    const input: Array<{}> = [{}];
    expect(getCategories(input)).toStrictEqual([]);
  });
});
