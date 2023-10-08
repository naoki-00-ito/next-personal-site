import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import gfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

export default async function Article({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title;
  const date = data.date;
  const category = data.category;
  const tags = data.tags;
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(gfm)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();

  // console.log(data);

  return (
    <div>
      <h1 className='p-title'>{title}</h1>

      <time dateTime={date}>
        {date}
      </time>

      <div className="c-tip">
        {category}
      </div>

      <div className="c-tips">
        {tags.map((tag: string) => {
          return (
            <div className="c-tip">
              {tag}
            </div>
          )
        })}
      </div>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} className='t-detail'></div>
    </div>
  );
}