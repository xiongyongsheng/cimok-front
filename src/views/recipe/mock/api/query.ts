import { columns, searchFormSchema } from '@/views/recipe/query/data';
import { handleMockList } from '../utils';

export const list = () => {
  return handleMockList({ length: 20, columns });
};
