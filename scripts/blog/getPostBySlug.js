import fs from 'fs';
import grayMatter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

export function getPostBySlug(slug) {
  const fileContent = fs.readFileSync(`./_posts/${slug}.md`, 'utf-8');

  const { content, data: metadata } = grayMatter(fileContent);
  const htmlContent = remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();

  return {
    metadata,
    content: htmlContent
  }

}