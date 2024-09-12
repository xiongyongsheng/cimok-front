import type { BasicColumn } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'Recipe名称',
    dataIndex: 'rcpName',
    width: 160,
    key: 'name',
  },
  {
    title: 'Recipe类型',
    dataIndex: 'rcpVerType',
    width: 160,
  },
  {
    title: '文件标识',
    dataIndex: 'rcpIdentId',
    width: 160,
  },
  {
    title: '操作类型',
    dataIndex: 'rcpOpType',
    width: 160,
  },
  {
    title: '时间',
    dataIndex: 'createTime',
    width: 160,
  },
  {
    title: 'Source',
    dataIndex: 'source',
    width: 160,
  },
  {
    title: 'Target',
    dataIndex: 'target',
    width: 160,
  },
  {
    title: '结果',
    dataIndex: 'opResult',
    width: 160,
  },
];
