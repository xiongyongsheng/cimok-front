import type { BasicColumn, FormSchema } from '@/components/Table';
export function handleSearchFormSchema(item: FormSchema) {
  if (!item.componentProps) {
    item.componentProps = {
      placeholder: item.label || '请输入',
      type: 'text',
    };
  }
  item.label = ' ';
  item.labelWidth = 15;
  item.colProps = { span: 4 };
  return item as FormSchema;
}
