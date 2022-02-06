const matter = require('gray-matter');
const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const { Feed } = require('feed');

const root = process.cwd();

const markDownConverter = new showdown.Converter();

const createHtmlFromContent = content => markDownConverter.makeHtml(content);

const checkForHttpUrl = string => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url;
};

const getImageFileName = filename => {
  const isAlreadyUrl = checkForHttpUrl(filename);
  if (isAlreadyUrl || !filename) return filename;

  const fileWithoutExtension = filename.split('.')[0];
  const filePath = fs
    .readdirSync(path.resolve(root, '.next/static/chunks/images'))
    .find(name => name.includes(fileWithoutExtension));

  const url = `https://khendrikse.github.io/_next/static/chunks/images/${filePath}`;
  return url;
};

const parsePostData = (data, filename) => {
  const link = `https://khendrikse.github.io/blog/${filename.replace(
    '.md',
    ''
  )}`;
  const parsedData = {
    ...data.data,
    content: data.content,
    filename,
    date: new Date(data.date),
    image: getImageFileName(data.data.cover_image),
    link,
    id: link
  };

  return parsedData;
};

const getPosts = () => {
  const posts = fs
    .readdirSync(path.resolve(root, 'posts'))
    .map(post => {
      const postSource = fs.readFileSync(
        path.resolve(root, 'posts', post),
        'utf8'
      );

      return parsePostData(matter(postSource), post);
    })
    .filter(Boolean);

  return posts.map(post => ({
    ...post,
    content: createHtmlFromContent(post.content)
  }));
};

const createFeeds = () => {
  const posts = getPosts();

  const feed = new Feed({
    title: 'Karin Hendrikse blog feed',
    description:
      'This is a feed of all blogs on the website of Karin Hendrikse',
    link: 'https://khendrikse.github.io/',
    language: 'en',
    copyright: `All rights reserved ${new Date().getFullYear()}, Karin Hendrikse`
  });

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.id,
      link: post.link,
      description: post.description,
      content: post.content,
      date: post.date,
      image: post.image
    });
  });

  fs.mkdirSync('public/feeds/', { recursive: true });
  fs.writeFileSync('public/feeds/feed.xml', feed.rss2());
};

module.exports = createFeeds;
