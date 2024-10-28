import { getSourceList } from "@/api/base/item";
import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'
import { DICT_TYPE, getDictOptions } from '@/utils/dict'

const sourceList = await getSourceList();

export const columns: BasicColumn[] = [
        {
          title: '项目名称',
          dataIndex: 'itemName',
          width: 160,
        },
        {
          title: '项目代码',
          dataIndex: 'itemCode',
          width: 160,
        },
        {
          title: '数据类型',
          dataIndex: 'valueType',
          width: 160,
          customRender: ({ text }) => {
            return useRender.renderDict(text, DICT_TYPE.ELOG_ITEM_SOURCE)
          },
        },
        {
          title: '来源',
          dataIndex: 'sourceId',
          width: 160,
          customRender: ({ text }) => {
            if(text != '' && text !== null) {
              const sourceData = findSource(sourceList,'id', text);
              return  sourceData.sourceName;
            }
            
          }
        },
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '项目代码',
        field: 'itemCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '项目名称',
        field: 'itemName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据类型',
        field: 'valueType',
          component: 'Select',
          componentProps: {
            options: getDictOptions(DICT_TYPE.ELOG_ITEM_SOURCE, 'string'),
          },
        colProps: { span: 8 },
      },
      {
        label: '来源',
        field: 'sourceId',
          component: 'Input',
        colProps: { span: 8 },
      },
      // {
      //   label: '部门id',
      //   field: 'deptId',
      //     component: 'Input',
      //   colProps: { span: 8 },
      // },
      // {
      //   label: '创建人',
      //   field: 'creator',
      //     component: 'Input',
      //   colProps: { span: 8 },
      // },
      // {
      //   label: '创建时间',
      //   field: 'createTime',
      //     component: 'RangePicker',
      //   colProps: { span: 8 },
      // },
      // {
      //   label: '更新人',
      //   field: 'updater',
      //     component: 'Input',
      //   colProps: { span: 8 },
      // },
      // {
      //   label: '更新时间',
      //   field: 'updateTime',
      //     component: 'RangePicker',
      //   colProps: { span: 8 },
      // },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
        {
          label: '项目名称',
          field: 'itemName',
          required: true,
            component: 'Input',
        },
        {
          label: '项目代码',
          field: 'itemCode',
          required: true,
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'valueType',
          required: true,
            component: 'Select',
            componentProps: ({formModel}) => {
              return {
                options: getDictOptions(DICT_TYPE.ELOG_ITEM_SOURCE, 'string'),
                onChange(value){    
                  formModel.sourceId = null;   
                  if(value == "RADIO"){
                    const sourceData = findSource(sourceList,'sourceType','ENUM')
                    formModel.sourceId =sourceData.id;
                 }
                }
              }
            },
        },
        {
          label: '来源',
          field: 'sourceId',
          component: 'ApiTreeSelect',
          ifShow: ({ values }) => (values.valueType === 'RADIO' || values.valueType === 'CHECKBOX'),
          componentProps: {
            api: async () => {       
              const newdata = renameItemNameToName(sourceList)
              return newdata;
            } ,
            fieldNames: {
              label: 'name',
              key: 'id',
              value: 'id',
            },
          }
        },
        {
          label: '入参',
          field: 'inputParam',
            component: 'Input',
            ifShow: ({ values }) =>  (handleParams(values))

        },
        {
          label: '出参',
          field: 'outputParam',
            component: 'Input',
            ifShow: ({ values }) =>  (handleParams(values))

        },
]
function handleParams(values) {
    if(values.sourceId != null){
      const sourceData = findSource(sourceList, 'id', values.sourceId);
      if(values.valueType== 'CHECKBOX' && sourceData.sourceType == 'API') {
        return true;
      }
    }
  return false;
}
export const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
        {
          label: '项目代码',
          field: 'itemCode',
            component: 'Input',
        },
        {
          label: '项目名称',
          field: 'itemName',
            component: 'Input',
        },
        {
          label: '数据类型',
          field: 'valueType',
          required: true,
            component: 'Select',
            componentProps: ({formModel}) => {
              return {
                options: getDictOptions(DICT_TYPE.ELOG_ITEM_SOURCE, 'string'),
                onChange(value){    
                  formModel.sourceId = null;   
                  if(value == "RADIO"){
                    const sourceData = findSource(sourceList,'sourceType','ENUM')
                    formModel.sourceId =sourceData.id;
                 }
                }
              }
            },
        },
        {
          label: '来源',
          field: 'sourceId',
          component: 'ApiTreeSelect',
          ifShow: ({ values }) => (values.valueType === 'RADIO' || values.valueType === 'CHECKBOX'),
          componentProps: {
            api: async () => {
              const res = await getSourceList();
              const newdata = renameItemNameToName(res)
              return newdata;
            } ,
            fieldNames: {
              label: 'name',
              key: 'id',
              value: 'id',
            },
          }
        },
        {
          label: '入参',
          field: 'inputParam',
            component: 'Input',
            ifShow: ({ values }) =>  (handleParams(values))

        },
        {
          label: '出参',
          field: 'outputParam',
            component: 'Input',
            ifShow: ({ values }) =>  (handleParams(values))

        },
        // {
        //   label: '部门id',
        //   field: 'deptId',
        //     component: 'Input',
        // },
]

function renameItemNameToName(array) {  
  return array.map(item => {  
      // 创建一个新对象，避免直接修改原对象  
      const newItem = { ...item };  

      // 重命名 itemName 为 name  
      if (newItem.sourceName !== undefined) {  
          newItem.name = newItem.sourceName;  
      }  
      // 如果存在 children 数组，则递归处理  
      if (newItem.children && Array.isArray(newItem.children)) {  
          newItem.children = renameItemNameToName(newItem.children);  
      }  

      return newItem;  
  });  
}

function findSource(array: any[], key: string, value: string): any | undefined {
  if (value != null && value !== '') {
    for (const item of array) {
      // 检查当前项是否具有目标值
      if (item[key] === value) {
        return item; // 返回对应的对象
      }

      // 如果当前项有 children 数组，则递归查找
      if (item.children && Array.isArray(item.children)) {
        const result = findSource(item.children, key, value);
        if (result !== undefined) {
          return result; // 返回在 children 中找到的对象
        }
      }
    }
  }
    // 如果没有找到匹配的 id，则返回 undefined  
    return undefined;  
  }
