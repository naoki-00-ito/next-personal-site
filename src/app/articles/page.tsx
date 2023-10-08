import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AlticleList from '@/app/components/AlticleList';
import { Articles } from '@/app/types/article';

export default async function Articles() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const articlesDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(articlesDirectory);

  // 各ファイルの中身を取得
  const articles: Articles = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((articles) =>
    // 最新日付順に並び替え
    articles.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  );

  console.log(articles)

  return (
    <AlticleList
      articles={articles}
    />
  );
}