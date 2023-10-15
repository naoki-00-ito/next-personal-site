export type Article = {
  slug: string;
  frontmatter: {
    [key: string]: string | string[];
  };
};

export type Articles = Article[];
