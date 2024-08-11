import type {BasicColumn, FormSchema} from '@/components/Table'
import {useRender} from '@/components/Table'

export const columns: BasicColumn[] = [
        {
          title: 'ID',
          dataIndex: 'id',
          width: 160,
        },
        {
          title: '晶圆批号',
          dataIndex: 'waferLotId',
          width: 160,
        },
        {
          title: '产品类型',
          dataIndex: 'deviceCode',
          width: 160,
        },
        {
          title: '文件编号',
          dataIndex: 'fileIdentId',
          width: 160,
        },
        {
          title: '文件名称',
          dataIndex: 'fileName',
          width: 160,
        },
        {
          title: '晶圆ID',
          dataIndex: 'waferId',
          width: 160,
        },
        {
          title: '行数',
          dataIndex: 'rows',
          width: 160,
        },
        {
          title: '列数',
          dataIndex: 'cols',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'unitCnt',
          width: 160,
        },
        {
          title: '良品数',
          dataIndex: 'goodCnt',
          width: 160,
        },
        {
          title: '不良数',
          dataIndex: 'failCnt',
          width: 160,
        },
        {
          title: '总数',
          dataIndex: 'totalCnt',
          width: 160,
        },
        {
          title: '剩余数量',
          dataIndex: 'usefulLeft',
          width: 160,
        },
        {
          title: '数据版本',
          dataIndex: 'mapdataVer',
          width: 160,
        },
        {
          title: 'Flat/Notch Location',
          dataIndex: 'fnloc',
          width: 160,
        },
        {
          title: 'Frame Rotation',
          dataIndex: 'ffrot',
          width: 160,
        },
        {
          title: 'Origin原点',
          dataIndex: 'orloc',
          width: 160,
        },
        {
          title: '作业类型(量产/测试)',
          dataIndex: 'processType',
          width: 160,
        },
        {
          title: '部门id',
          dataIndex: 'deptId',
          width: 160,
        },
        {
          title: '创建人',
          dataIndex: 'creator',
          width: 160,
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
        {
          title: '更新人',
          dataIndex: 'updater',
          width: 160,
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          width: 180,
          customRender: ({ text }) => {
            return useRender.renderDate(text)
          },
        },
]

export const searchFormSchema: FormSchema[] = [
      {
        label: '晶圆批号',
        field: 'waferLotId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '产品类型',
        field: 'deviceCode',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '文件编号',
        field: 'fileIdentId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '文件名称',
        field: 'fileName',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '晶圆ID',
        field: 'waferId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '行数',
        field: 'rows',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '列数',
        field: 'cols',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'unitCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '良品数',
        field: 'goodCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '不良数',
        field: 'failCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '总数',
        field: 'totalCnt',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '剩余数量',
        field: 'usefulLeft',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '数据版本',
        field: 'mapdataVer',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Flat/Notch Location',
        field: 'fnloc',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Frame Rotation',
        field: 'ffrot',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: 'Origin原点',
        field: 'orloc',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '作业类型(量产/测试)',
        field: 'processType',
          component: 'Select',
          componentProps: {
              options: [],
          },
        colProps: { span: 8 },
      },
      {
        label: '部门id',
        field: 'deptId',
          component: 'Input',
        colProps: { span: 8 },
      },
      {
        label: '创建时间',
        field: 'createTime',
          component: 'RangePicker',
        colProps: { span: 8 },
      },
]

export const createFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
        {
          label: '晶圆批号',
          field: 'waferLotId',
            component: 'Input',
        },
        {
          label: '产品类型',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '文件编号',
          field: 'fileIdentId',
            component: 'Input',
        },
        {
          label: '文件名称',
          field: 'fileName',
            component: 'Input',
        },
        {
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '良品数',
          field: 'goodCnt',
            component: 'Input',
        },
        {
          label: '不良数',
          field: 'failCnt',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'totalCnt',
            component: 'Input',
        },
        {
          label: '剩余数量',
          field: 'usefulLeft',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: 'Flat/Notch Location',
          field: 'fnloc',
            component: 'Input',
        },
        {
          label: 'Frame Rotation',
          field: 'ffrot',
            component: 'Input',
        },
        {
          label: 'Origin原点',
          field: 'orloc',
            component: 'Input',
        },
        {
          label: '作业类型(量产/测试)',
          field: 'processType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]

export const updateFormSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
        {
          label: '晶圆批号',
          field: 'waferLotId',
            component: 'Input',
        },
        {
          label: '产品类型',
          field: 'deviceCode',
            component: 'Input',
        },
        {
          label: '文件编号',
          field: 'fileIdentId',
            component: 'Input',
        },
        {
          label: '文件名称',
          field: 'fileName',
            component: 'Input',
        },
        {
          label: '晶圆ID',
          field: 'waferId',
            component: 'Input',
        },
        {
          label: '行数',
          field: 'rows',
            component: 'Input',
        },
        {
          label: '列数',
          field: 'cols',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'unitCnt',
            component: 'Input',
        },
        {
          label: '良品数',
          field: 'goodCnt',
            component: 'Input',
        },
        {
          label: '不良数',
          field: 'failCnt',
            component: 'Input',
        },
        {
          label: '总数',
          field: 'totalCnt',
            component: 'Input',
        },
        {
          label: '剩余数量',
          field: 'usefulLeft',
            component: 'Input',
        },
        {
          label: '数据版本',
          field: 'mapdataVer',
            component: 'Input',
        },
        {
          label: 'Flat/Notch Location',
          field: 'fnloc',
            component: 'Input',
        },
        {
          label: 'Frame Rotation',
          field: 'ffrot',
            component: 'Input',
        },
        {
          label: 'Origin原点',
          field: 'orloc',
            component: 'Input',
        },
        {
          label: '作业类型(量产/测试)',
          field: 'processType',
            component: 'Select',
            componentProps: {
                options:[],
            },
        },
        {
          label: '部门id',
          field: 'deptId',
            component: 'Input',
        },
]