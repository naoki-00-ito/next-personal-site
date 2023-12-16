import { ARTICLE_DIR, ARTICLE_FILE_EXTENTION } from '@/env';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Articles } from '@/types/article';

type Props = {
  max?: number;
  category?: string;
  tag?: string;
};

export async function getArticles({ max, category, tag }: Props): Promise<Articles> {
  const articlesDirectory = path.join(process.cwd(), ARTICLE_DIR);
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles: Articles = await Promise.all(
    fileNames.map((fileName) => {
      const filePath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(ARTICLE_FILE_EXTENTION, ''),
        frontmatter: data,
      };
    }),
  ).then((articles) => {
    articles.sort((a, b) =>
      new Date(a.frontmatter.date as string) > new Date(b.frontmatter.date as string)
        ? -1
        : 1,
    );

    // カテゴリが指定された場合は該当する記事のみをフィルタリング
    if (category) {
      articles = articles.filter((article) =>
        (article.frontmatter.category as string).includes(category),
      );
    }

    // タグが指定された場合も該当する記事のみをフィルタリング
    if (tag) {
      articles = articles.filter((article) =>
        (article.frontmatter.tags as string).includes(tag),
      );
    }

    // maxがある場合は指定された件数だけ記事を抽出
    if (max) {
      articles = articles.slice(0, max);
    }

    return articles;
  });

  return articles;
}
