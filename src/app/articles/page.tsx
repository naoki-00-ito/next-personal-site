import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function Articles() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  );

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <p>{post.frontmatter.date}</p>
            <Link href={`/articles/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}