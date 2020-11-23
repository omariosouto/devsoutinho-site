import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '_posts')

export async function getAllPosts() {
  const allPostFileNames = fs.readdirSync(postsDirectory);

  const filesPromise = allPostFileNames.map(async (postFileName) => {
    const fullPostPath = path.join(postsDirectory, postFileName);
    const fileContent = fs.readFileSync(fullPostPath, 'utf8');
    const { data, content } = matter(fileContent)
    const remarkHTML = await remark().use(html).process(content || '');

    return {
      metadata: data,
      content: await remarkHTML.toString()
    };
  });

  const files = await Promise.all(filesPromise);

  return files;
}