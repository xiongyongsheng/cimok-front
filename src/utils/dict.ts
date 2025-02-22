/**
 * 数据字典工具类
 */
import { useDictStoreWithOut } from '@/store/modules/dict';

const dictStore = useDictStoreWithOut();

/**
 * 获取 dictType 对应的数据字典数组
 *
 * @param dictType 数据类型
 * @returns {*|Array} 数据字典数组
 */
export interface DictDataType {
  dictType: string;
  label: string;
  value: string | number | boolean;
  key?: any;
  colorType: string;
  cssClass: string;
}

export function getDictDatas(dictType: string) {
  return dictStore.getDictMap[dictType] || [];
}

export function getDictOpts(dictType: string) {
  /**
   * 这里原来是转换类型  转换类型后反而显示不出来正确的Tag
   * 实际类型转换交给下面的getDictOptions来处理
   *
   * bugfix:
   * dictOption.push({
          ...dict,
          value: parseInt(dict.value + '')
        })
     原来的这种写法是造成页面卡死的原因
   */
  return getDictDatas(dictType);
}

export function getDictOptions(
  dictType: string,
  valueType?: 'string' | 'number' | 'boolean'
) {
  const dictOption: DictDataType[] = [];
  const dictOptions: DictDataType[] = getDictDatas(dictType);
  if (dictOptions && dictOptions.length > 0) {
    dictOptions.forEach((dict: DictDataType) => {
      dictOption.push({
        ...dict,
        key: dict.value,
        value:
          valueType === 'string'
            ? `${dict.value}`
            : valueType === 'boolean'
              ? `${dict.value}` === 'true'
              : Number.parseInt(`${dict.value}`),
      });
    });
  }
  return dictOption;
}

export function getDictObj(dictType: string, value: any) {
  const dictOptions: DictDataType[] = getDictDatas(dictType);
  if (dictOptions) {
    dictOptions.forEach((dict: DictDataType) => {
      if (dict.value === value.toString()) return dict;
    });
  } else {
    return null;
  }
}

export enum DICT_TYPE {
  // recipe
  RULE_TYPE_ENUM = 'RuleTypeEnum',
  RECIPE_TYPE_ENUM = 'RecipeTypeEnum',
  RECIPE_STATUS_ENUM = 'RecipeStatusEnum',
  RECIPE_VERIFICATION_TYPE = 'recipe_verification_type',
  RECIPE_ACTION_TYPE = 'recipe_action_type',
  RECIPE_SITE = 'recipe_site',
  RECIPE_APPROVAL_STATUS = 'recipe_approval_status',
  RECIPE_VERSION_TYPE = 'recipe_version_type',
  RECIPE_DEVICE_TYPE = 'recipe_device_type',
  RECIPE_ESCUTE_RES = 'exec_excute_res',

  USER_TYPE = 'user_type',
  COMMON_STATUS = 'common_status',
  SYSTEM_TENANT_PACKAGE_ID = 'system_tenant_package_id',
  ALARM_SHIFT_TYPE = 'alarm_sheft_type',
  // ========== SYSTEM 模块 ==========
  SYSTEM_USER_SEX = 'system_user_sex',
  SYSTEM_MENU_TYPE = 'system_menu_type',
  SYSTEM_ROLE_TYPE = 'system_role_type',
  SYSTEM_DATA_SCOPE = 'system_data_scope',
  SYSTEM_NOTICE_TYPE = 'system_notice_type',
  SYSTEM_LOGIN_TYPE = 'system_login_type',
  SYSTEM_LOGIN_RESULT = 'system_login_result',
  SYSTEM_SMS_CHANNEL_CODE = 'system_sms_channel_code',
  SYSTEM_SMS_TEMPLATE_TYPE = 'system_sms_template_type',
  SYSTEM_SMS_SEND_STATUS = 'system_sms_send_status',
  SYSTEM_SMS_RECEIVE_STATUS = 'system_sms_receive_status',
  SYSTEM_OAUTH2_GRANT_TYPE = 'system_oauth2_grant_type',
  SYSTEM_MAIL_SEND_STATUS = 'system_mail_send_status',
  SYSTEM_NOTIFY_TEMPLATE_TYPE = 'system_notify_template_type',

  // ========== INFRA 模块 ==========
  INFRA_BOOLEAN_STRING = 'infra_boolean_string',
  INFRA_JOB_STATUS = 'infra_job_status',
  INFRA_JOB_LOG_STATUS = 'infra_job_log_status',
  INFRA_API_ERROR_LOG_PROCESS_STATUS = 'infra_api_error_log_process_status',
  INFRA_CONFIG_TYPE = 'infra_config_type',
  INFRA_CODEGEN_TEMPLATE_TYPE = 'infra_codegen_template_type',
  INFRA_CODEGEN_FRONT_TYPE = 'infra_codegen_front_type',
  INFRA_CODEGEN_SCENE = 'infra_codegen_scene',
  INFRA_FILE_STORAGE = 'infra_file_storage',
  INFRA_OPERATE_TYPE = 'infra_operate_type',

  // ========== BPM 模块 ==========
  BPM_MODEL_CATEGORY = 'bpm_model_category',
  BPM_MODEL_FORM_TYPE = 'bpm_model_form_type',
  BPM_TASK_ASSIGN_RULE_TYPE = 'bpm_task_assign_rule_type',
  BPM_PROCESS_INSTANCE_STATUS = 'bpm_process_instance_status',
  BPM_PROCESS_INSTANCE_RESULT = 'bpm_process_instance_result',
  BPM_TASK_ASSIGN_SCRIPT = 'bpm_task_assign_script',
  BPM_OA_LEAVE_TYPE = 'bpm_oa_leave_type',

  // ========== PAY 模块 ==========
  PAY_CHANNEL_CODE = 'pay_channel_code', // 支付渠道编码类型
  PAY_ORDER_STATUS = 'pay_order_status', // 商户支付订单状态
  PAY_REFUND_STATUS = 'pay_refund_status', // 退款订单状态
  PAY_NOTIFY_STATUS = 'pay_notify_status', // 商户支付回调状态
  PAY_NOTIFY_TYPE = 'pay_notify_type', // 商户支付回调状态

  // ========== MP 模块 ==========
  MP_AUTO_REPLY_REQUEST_MATCH = 'mp_auto_reply_request_match', // 自动回复请求匹配类型
  MP_MESSAGE_TYPE = 'mp_message_type', // 消息类型

  // ========== MALL - 会员模块 ==========
  MEMBER_POINT_BIZ_TYPE = 'member_point_biz_type', // 积分的业务类型

  // ========== MALL - 商品模块 ==========
  PRODUCT_UNIT = 'product_unit', // 商品单位
  PRODUCT_SPU_STATUS = 'product_spu_status', // 商品状态

  // ========== MALL - 交易模块 ==========
  EXPRESS_CHARGE_MODE = 'trade_delivery_express_charge_mode', // 快递的计费方式
  TRADE_AFTER_SALE_STATUS = 'trade_after_sale_status', // 售后 - 状态
  TRADE_AFTER_SALE_WAY = 'trade_after_sale_way', // 售后 - 方式
  TRADE_AFTER_SALE_TYPE = 'trade_after_sale_type', // 售后 - 类型
  TRADE_ORDER_TYPE = 'trade_order_type', // 订单 - 类型
  TRADE_ORDER_STATUS = 'trade_order_status', // 订单 - 状态
  TRADE_ORDER_ITEM_AFTER_SALE_STATUS = 'trade_order_item_after_sale_status', // 订单项 - 售后状态
  TERMINAL = 'terminal', // 终端

  // ========== MALL - 营销模块 ==========
  PROMOTION_DISCOUNT_TYPE = 'promotion_discount_type', // 优惠类型
  PROMOTION_PRODUCT_SCOPE = 'promotion_product_scope', // 营销的商品范围
  PROMOTION_COUPON_TEMPLATE_VALIDITY_TYPE = 'promotion_coupon_template_validity_type', // 优惠劵模板的有限期类型
  PROMOTION_COUPON_STATUS = 'promotion_coupon_status', // 优惠劵的状态
  PROMOTION_COUPON_TAKE_TYPE = 'promotion_coupon_take_type', // 优惠劵的领取方式
  PROMOTION_ACTIVITY_STATUS = 'promotion_activity_status', // 优惠活动的状态
  PROMOTION_CONDITION_TYPE = 'promotion_condition_type', // 营销的条件类型枚举

  //========== WAFER-MAP ===============
  WAFER_BIN_CODE_COLOR = 'wafer_bin_code_color', //wafer 显示颜色
  WAFER_BIN_CODE_TYPE = 'wafer_bin_code_type', //wafer 显示颜色
  WAFER_ORIENTATION = 'wafer_orientation', //wafer方向字典
  WAFER_ROTATION_ANGLE = 'wafer_rotation_angle', //wafer旋转角度
  WAFER_OP_TYPE = 'wafer_op_type', //wafer操作类型
  //类型 process_type
  PROCESS_TYPE = 'process_type',

  //========== strip ===============
  // 作业前后数据字典 strip_mapdata_type
  STRIP_MAPDATA_TYPE = 'strip_mapdata_type',
  // strip来源数据字典：strip_source
  STRIP_SOURCE = 'strip_source',
  // strip_bin_code_color
  STRIP_BIN_CODE_COLOR = 'strip_bin_code_color', // strip 颜色
  // 状态字典：code_conversion_status
  CODE_CONVERSION_STATUS = 'code_conversion_status',
  // 范围字典：code_conversion_use_scope
  CODE_CONVERSION_USE_SCOPE = 'code_conversion_use_scope',
  // strip作业类型数据字典：strip_process_type
  STRIP_PROCESS_TYPE = 'strip_process_type',
  // strip作业状态 strip_process_status
  STRIP_PROCESS_STATUS = 'strip_process_status',
  // strip站点 strip_process_step
  STRIP_PROCESS_STEP = 'strip_process_step',
  // 场景字典:strip_bin_code_scene
  STRIP_BIN_CODE_SCENE = 'strip_bin_code_scene',
  // BIN类型字典: strip_bin_code_type
  STRIP_BIN_CODE_TYPE = 'strip_bin_code_type',
  //数据类型
  ELOG_ITEM_SOURCE = 'elog_item_source',
}
