import { BasicColumn } from '@/components/Table/src/types/table';

export function handleMockList({
  length,
  columns,
}: {
  length: number;
  columns: BasicColumn[];
}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list: Array.from({
          length,
        }).map((_, index) => {
          const item = {};
          columns.forEach((column) => {
            // @ts-ignore
            item[column.dataIndex] = `item-${index}-${column.dataIndex}`;
          });
          return item;
        }),
      });
    }, 2000);
  });
}

export function handleMockSelect({
  length,
  columns,
}: {
  length: number;
  columns: BasicColumn[];
}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({
          length,
        }).map((_, index) => {
          const item = {};
          columns.forEach((column) => {
            // @ts-ignore
            item[column.dataIndex] = `item-${index}-${column.dataIndex}`;
          });
          return item;
        })
      );
    }, 2000);
  });
}
