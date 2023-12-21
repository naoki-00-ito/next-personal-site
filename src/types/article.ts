export type Article = {
  slug: string;
  frontmatter: {
    [key: string]: string[];
  };
};

export type Articles = Article[];
