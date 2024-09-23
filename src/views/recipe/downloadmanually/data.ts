import type { FormSchema } from '@/components/Table';

export const createFormSchema: FormSchema[] = [
  {
    label: '工单号',
    field: 'lotId',
    component: 'Input',
    required: true,
    labelWidth: 140,
  },
  {
    label: '设备号',
    field: 'eqptCode',
    component: 'Input',
    required: true,
    labelWidth: 140,
  },
  {
    label: 'Recipe名称',
    field: 'recipeName',
    component: 'Input',
    required: true,
    labelWidth: 140,
  },
];
