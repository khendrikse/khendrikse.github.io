import matter from 'gray-matter';

const parsePosts = context => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys
    .map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      return {
        ...document.data,
        markdownBody: document.content,
        slug
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter(post => post.published);
  return data;
};

export default parsePosts;
