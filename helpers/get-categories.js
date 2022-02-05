const getCategories = posts =>
  posts.reduce((tags, post) => {
    if (!post?.tags) return tags;
    const newTags = post.tags.split(', ').filter(tag => !tags.includes(tag));
    return [...tags, ...newTags];
  }, []);

export default getCategories;
