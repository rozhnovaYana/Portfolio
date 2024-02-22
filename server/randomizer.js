const path = require("path");
const fs = require("fs");
const randomize = () => {
  const blogPath = path.join(__dirname, "data", "blogs.json");
  const blogs = fs.readFileSync(blogPath, "utf-8");
  const parseBlogs = JSON.parse(blogs);

  parseBlogs.forEach((i) => {
    const num = parseInt(Math.random() * 40);
    i.slug = `some-blog-${num}`;
    i.title = `some blog ${num}`;
  });
  fs.writeFileSync(blogPath, JSON.stringify(parseBlogs, null, 2));
};
setInterval(randomize, 3000);
