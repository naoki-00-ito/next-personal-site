/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ARTICLE_DIR, ARTICLE_FILE_EXTENTION } from '@/env';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkToc from 'remark-toc';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import gfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import TipList from '@/components/server/TipList';

export default async function Article({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    ARTICLE_DIR,
    `${slug}${ARTICLE_FILE_EXTENTION}`,
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const date = data.date;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const category = data.category;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const tags = data.tags;
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkToc, {
      heading: '目次',
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(gfm)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  const contentHtml = processedContent.toString();

  // console.log(data);

  return (
    <div>
      <h1 className='p-title'>{title}</h1>

      <time dateTime={date}>{date}</time>

      <TipList items={category} />

      <TipList items={tags} />

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} className='t-detail'></div>
    </div>
  );
}
