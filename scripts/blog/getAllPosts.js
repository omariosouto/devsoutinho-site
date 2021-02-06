import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

export function getAllPosts(limit = 0) {
  const dir = './_posts/';
  let allPostsFileNames = fs.readdirSync(dir);

  allPostsFileNames.sort(function(a, b) {
    return fs.statSync(dir + b).mtime.getTime() - 
           fs.statSync(dir + a).mtime.getTime();
  });
  
  if (limit > 0) {
    allPostsFileNames = allPostsFileNames.slice(0, limit);
  }

  const posts = allPostsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);
    const htmlContent = remark()
      .use(remarkHTML)
      .processSync(content)
      .toString();

    return {
      metadata: {
        ...metadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent
    }
  })

  return posts;
}