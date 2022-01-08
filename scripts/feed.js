const matter = require('gray-matter');
const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const { Feed } = require('feed');

const markDownConverter = new showdown.Converter();

const createHtmlFromContent = content => markDownConverter.makeHtml(content);

const getPosts = () => {
  const posts = fs
    .readdirSync(path.resolve(__dirname, '../posts'))
    .map((post, i) => {
      if (i !== 0) {
        return null;
      }
      const postSource = fs.readFileSync(
        path.resolve(__dirname, '../posts/', post),
        'utf8'
      );
      return matter(postSource);
    })
    .filter(Boolean);

  return posts.map(post => ({
    ...post,
    content: createHtmlFromContent(post.content)
  }));
};

const posts = getPosts();

const feed = new Feed({
  title: 'Feed Title',
  description: 'This is my personal feed!',
  id: 'http://example.com/',
  link: 'http://example.com/',
  language: 'en',
  image: 'http://example.com/image.png',
  favicon: 'http://example.com/favicon.ico',
  copyright: 'All rights reserved 2013, John Doe',
  updated: new Date(2013, 6, 14), // optional, default = today
  generator: 'awesome', // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: 'https://example.com/json',
    atom: 'https://example.com/atom'
  },
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    link: 'https://example.com/johndoe'
  }
});

posts.forEach(post => {
  feed.addItem({
    title: post.data.title,
    id: post.data.url,
    link: post.data.url,
    description: post.data.description,
    content: post.content,
    date: post.date,
    image: post.image
  });
});

fs.mkdirSync('public/feeds/', { recursive: true });
fs.writeFileSync('public/feeds/feed.xml', feed.rss2());
