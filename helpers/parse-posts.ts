import matter from 'gray-matter';

const parsePosts = (context: __WebpackModuleApi.RequireContext) => {
  const keys = context.keys();
  const values = keys.map(key => context(key));

  const data = keys
    .map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);

      return {
        ...document.data,
        oldBlog: document.data.oldBlog || false,
        tags: document.data.tags || '',
        date: document.data.date,
        published: document.data.published,
        markdownBody: document.content,
        slug
      };
    })
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    .filter(post => post.published);
  return data;
};

export default parsePosts;
