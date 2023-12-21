import fsPromises from 'fs/promises';
import path from 'path';

import { Profile } from '@/types/profile';

type Props = {
  fileName: string;
};

export async function getData({ fileName }: Props) {
  const filePath = path.join(process.cwd(), `data/${fileName}`);

  const data = await fsPromises.readFile(filePath, 'utf-8');
  const objectData = JSON.parse(data) as Profile;

  return objectData;
}
