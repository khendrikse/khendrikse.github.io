const getCategories = (posts: Array<{ tags?: string }>) =>
  posts.reduce((tags: Array<string>, post) => {
    if (!post?.tags) return tags;
    const newTags = post.tags.split(', ').filter(tag => !tags.includes(tag));
    return [...tags, ...newTags];
  }, []);

export default getCategories;
