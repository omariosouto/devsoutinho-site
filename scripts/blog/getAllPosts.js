import { unified } from 'unified';
import fs from 'fs';
import grayMatter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import deepmerge from 'deepmerge';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

export function getAllPosts() {
  const allPostsFileNames = fs.readdirSync('./_posts');

  const preventCrossSiteScripting = deepmerge(defaultSchema, {
    tagNames: ['math', 'mi'],
  });

  const posts = allPostsFileNames.map((filename) => {
    const fileContent = fs.readFileSync(`./_posts/${filename}`, 'utf-8');
    const { content, data: metadata } = grayMatter(fileContent);

    // This compiles html and markdown :)
      const htmlContent = unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSanitize, preventCrossSiteScripting)
      .processSync(content)
      .toString();

    return {
      metadata: {
        ...parseMetadata,
        slug: filename.replace('.md', ''),
      },
      content: htmlContent,
    };
  })

  return posts;
}