export type Article = {
  slug: string;
  frontmatter: {
    [key: string]: string | string[];
    ['category']: string[];
    ['tags']: string[];
  };
};

export type Articles = Article[];
