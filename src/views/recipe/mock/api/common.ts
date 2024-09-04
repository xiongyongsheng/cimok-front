import { handleMockList } from '../utils';

export const selectOptions = () => {
  return handleMockList({
    length: 20,
    columns: [
      {
        dataIndex: 'name',
      },
      {
        dataIndex: 'id',
      },
    ],
  });
};
