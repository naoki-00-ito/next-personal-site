type Stack = {
  title: string;
  item?: string[];
  items?: string[];
};

type Item = {
  id: number;
  date: string;
  title: string;
  text: string;
  stack: Stack[];
};

export type Profile = {
  list: Item[];
};
