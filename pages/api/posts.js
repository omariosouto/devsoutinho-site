import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const readdirPromise = promisify(fs.readdir);
const readFilePromise = promisify(fs.readFile);
const postsDirectory = path.join(process.cwd(), 'datasources', 'posts', 'data')

export default async (req, res) => { 
  const postsFilesPaths = await readdirPromise(postsDirectory);

  const postsPromise = postsFilesPaths.map(async (postFilePath) => {
    const postFileContent = await readFilePromise(path.join(postsDirectory, postFilePath), 'utf8');
    const post = matter(postFileContent);
    const slug = postFilePath.replace('.md', '');

    const remarkHTML = await remark().use(html).process(post.content)
    const content = remarkHTML.toString()

    return {
      slug,
      metadata: {
        ...post.data,
      },
      content,
    };
  })

  const posts = await Promise.all(postsPromise);

  res.send({
    posts,
  });
}