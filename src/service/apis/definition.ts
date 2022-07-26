/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type BaseSortCreateAt = "asc" | "desc";
export type AdminAccountListSearchStatus = 1 | 2;
export type AdminRoleItemType = AdminAccountListSearchStatus;
export type AdminAccountItemStatus = AdminAccountListSearchStatus;
export type AdminAccountResetRequestAction = 1 | 2 | 3 | 4;
export type AdminAccountDetailResponseStatus = AdminAccountListSearchStatus;
export type AgentStatsSnapshotDetailRequestType =
  AdminAccountResetRequestAction;
export type AgentStatsSnapshotDetailResponseType =
  AdminAccountResetRequestAction;
export type AdminRoleDetailResponseType = AdminAccountListSearchStatus;
export type UserStatsSnapshotItemType = AdminAccountResetRequestAction;
export type AdminPermissionItemType = 1 | 2 | 3;
export type CoinDataStatus = AdminAccountListSearchStatus;
export type WithdrawOrderListSearchStatus = 1 | 2 | 3 | 4 | 5;
export type WithdrawOrderItemStatus = WithdrawOrderListSearchStatus;
export type AgentAccountItemStatus = AdminAccountListSearchStatus;
export type AgentAccountDetailResponseStatus = AdminAccountListSearchStatus;
export type UserBalanceRecordItemType = AdminAccountResetRequestAction;
export type GameItemGameType = WithdrawOrderListSearchStatus;
export type UserStatsSnapshotDetailRequestType = AdminAccountResetRequestAction;
export type UserStatsSnapshotDetailResponseType =
  AdminAccountResetRequestAction;
export type AgentRoleItemType = AdminAccountListSearchStatus;
export type AgentRoleDetailResponseType = AdminAccountListSearchStatus;
export type OrderItemGameType = WithdrawOrderListSearchStatus;
export type OrderItemBetType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type OrderItemGameResult = 1 | 2 | 3 | 4 | 10;
export type OrderItemStatus = 1 | 3 | 4 | 10 | 11 | 12 | 13 | 32;
export type OrderDetailResponseGameType = WithdrawOrderListSearchStatus;
export type OrderDetailResponseBetType = OrderItemBetType;
export type OrderDetailResponseGameResult = OrderItemGameResult;
export type OrderDetailResponseStatus = OrderItemStatus;
export type ChargeCallbackRequestType =
  | "TransferContract"
  | "TriggerSmartContract";
export type UserResetRequestAction = AdminAccountResetRequestAction;
export type AgentItemType = AdminAccountListSearchStatus;
export type AgentItemStatus = AdminAccountListSearchStatus;
export type AgentDetailResponseType = AdminAccountListSearchStatus;
export type AgentDetailResponseStatus = AdminAccountListSearchStatus;
export type AgentResetRequestAction = AdminAccountResetRequestAction;
export type GenerateAgentStatsRequestType = AdminAccountListSearchStatus;
export type GenerateAgentStatsRequestStatsType = AdminAccountResetRequestAction;
export type StatsSnapshotDetailRequestType = AdminAccountResetRequestAction;
export type StoreStatsSnapshotDetailRequestType =
  AdminAccountResetRequestAction;
/**
 * @description
 *   控制参数
 */
export interface OrderBonusDetailCondition {}

/**
 * @description
 *   搜索参数
 */
export interface OrderBonusDetailListSearch {}

/**
 * @description
 *   分页参数
 */
export interface Page {
  /**
   * @description
   * @default 1
   */
  page?: number;
  /**
   * @description
   * @default 20
   */
  page_size?: number;
  /**
   * @description
   * @default false
   */
  all?: boolean;
  /**
   * @description
   * @default true
   */
  total?: boolean;
}

/**
 * @description
 *   排序参数
 */
export interface BaseSort {
  /**
   * @description
   *   创建时间排序
   * @default [object Object]
   */
  create_at?: BaseSortCreateAt;
}

export interface OrderBonusDetailListRequest {
  condition?: OrderBonusDetailCondition;
  search?: OrderBonusDetailListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface OrderBonusDetailItem {
  /**
   * @description
   *   明细ID
   */
  detail_id?: string;
  /**
   * @description
   *   订单ID
   */
  order_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   来源人
   */
  from_id?: string;
  /**
   * @description
   *   获利人
   */
  user_id?: string;
  /**
   * @description
   *   等级
   */
  level?: number;
  /**
   * @description
   *   奖励
   */
  reward?: string;
}

export interface OrderBonusDetailListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<OrderBonusDetailItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface UserStatsDailySnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserStatsDailySnapshotListSearch {}

export interface UserStatsDailySnapshotListRequest {
  condition?: UserStatsDailySnapshotCondition;
  search?: UserStatsDailySnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface UserStatsDailySnapshotItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   总投注金额
   * @default 0.00
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   * @default 0.00
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   * @default 0.00
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   * @default 0.00
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   * @default 0.00
   */
  total_withdraw?: string;
}

export interface UserStatsDailySnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserStatsDailySnapshotItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface AdminAccountCondition {
  /**
   * @description
   *   关联角色信息
   * @default 0
   */
  with_role?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface AdminAccountListSearch {
  /**
   * @description
   *   角色ID
   * @default null
   */
  role_id?: number;
  /**
   * @description
   *   账号状态
   * @default null
   */
  status?: AdminAccountListSearchStatus;
}

export interface AdminAccountListRequest {
  condition?: AdminAccountCondition;
  search?: AdminAccountListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AdminRoleItem {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   类型
   */
  type?: AdminRoleItemType;
  /**
   * @description
   *   权限集合001
   */
  permission001?: string;
  /**
   * @description
   *   权限集合002
   */
  permission002?: string;
  /**
   * @description
   *   权限集合003
   */
  permission003?: string;
  /**
   * @description
   *   权限集合
   * @default
   */
  permission_list?: Array<Array<any>>;
}

export interface AdminAccountItem {
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
  /**
   * @description
   *   状态
   */
  status?: AdminAccountItemStatus;
  role?: AdminRoleItem;
}

export interface AdminAccountListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AdminAccountItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface AdminAccountData {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
}

export interface AdminAccountCreateRequest {
  condition?: AdminAccountCondition;
  data?: AdminAccountData;
}

export interface BaseSuccessResponse {
  /**
   * @description
   *   请求结果
   * @default true
   */
  result?: boolean;
}

/**
 * @description
 *   搜索参数
 */
export interface AdminAccountSearch {
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
}

export interface AdminAccountModifyRequest {
  condition?: AdminAccountCondition;
  search?: AdminAccountSearch;
  data?: AdminAccountData;
}

export interface AdminAccountResetRequest {
  search?: AdminAccountSearch;
  /**
   * @description
   *   重置操作
   */
  action?: AdminAccountResetRequestAction;
}

export interface AdminAccountRemoveRequest {
  condition?: AdminAccountCondition;
  search?: AdminAccountSearch;
}

export interface AdminAccountDetailRequest {
  condition?: AdminAccountCondition;
  search?: AdminAccountSearch;
}

export interface AdminAccountDetailResponse {
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
  /**
   * @description
   *   状态
   */
  status?: AdminAccountDetailResponseStatus;
  role?: AdminRoleItem;
}

export interface AgentStatsSnapshotDetailRequest {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: AgentStatsSnapshotDetailRequestType;
}

export interface AgentStatsSnapshotDetailResponse {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: AgentStatsSnapshotDetailResponseType;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

/**
 * @description
 *   控制参数
 */
export interface StoreCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StoreListSearch {}

export interface StoreListRequest {
  condition?: StoreCondition;
  search?: StoreListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StoreItem {
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   站点名称
   */
  store_name?: string;
  /**
   * @description
   *   访问域名
   */
  domain?: string;
  /**
   * @description
   *   归集地址
   */
  collect_address?: string;
  /**
   * @description
   *   站点状态
   */
  status?: number;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
}

export interface StoreListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StoreItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface StoreData {
  /**
   * @description
   *   站点名称
   */
  store_name?: string;
  /**
   * @description
   *   访问域名
   */
  domain?: string;
}

export interface StoreCreateRequest {
  condition?: StoreCondition;
  data?: StoreData;
}

/**
 * @description
 *   搜索参数
 */
export interface StoreSearch {
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
}

export interface StoreModifyRequest {
  condition?: StoreCondition;
  search?: StoreSearch;
  data?: StoreData;
}

export interface StoreRemoveRequest {
  condition?: StoreCondition;
  search?: StoreSearch;
}

export interface StoreDetailRequest {
  condition?: StoreCondition;
  search?: StoreSearch;
}

export interface StoreDetailResponse {
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   站点名称
   */
  store_name?: string;
  /**
   * @description
   *   访问域名
   */
  domain?: string;
  /**
   * @description
   *   归集地址
   */
  collect_address?: string;
  /**
   * @description
   *   站点状态
   */
  status?: number;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
}

export interface ProfileLoginRequest {
  /**
   * @description
   *   账号
   */
  account?: string;
  /**
   * @description
   *   密码
   */
  password?: string;
}

export interface ProfileLoginResponse {
  /**
   * @description
   *   token
   */
  token?: string;
}

export interface ProfileChangePasswordRequest {
  /**
   * @description
   *   原密码
   */
  origin_password?: string;
  /**
   * @description
   *   新密码
   */
  password?: string;
}

/**
 * @description
 *   控制参数
 */
export interface AdminRoleCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AdminRoleListSearch {}

export interface AdminRoleListRequest {
  condition?: AdminRoleCondition;
  search?: AdminRoleListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AdminRoleListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AdminRoleItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface AdminRoleData {
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   权限集合
   * @default
   */
  permission_list?: Array<Array<any>>;
}

export interface AdminRoleCreateRequest {
  condition?: AdminRoleCondition;
  data?: AdminRoleData;
}

/**
 * @description
 *   搜索参数
 */
export interface AdminRoleSearch {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
}

export interface AdminRoleModifyRequest {
  condition?: AdminRoleCondition;
  search?: AdminRoleSearch;
  data?: AdminRoleData;
}

export interface AdminRoleRemoveRequest {
  condition?: AdminRoleCondition;
  search?: AdminRoleSearch;
}

export interface AdminRoleDetailRequest {
  condition?: AdminRoleCondition;
  search?: AdminRoleSearch;
}

export interface AdminRoleDetailResponse {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   类型
   */
  type?: AdminRoleDetailResponseType;
  /**
   * @description
   *   权限集合001
   */
  permission001?: string;
  /**
   * @description
   *   权限集合002
   */
  permission002?: string;
  /**
   * @description
   *   权限集合003
   */
  permission003?: string;
  /**
   * @description
   *   权限集合
   * @default
   */
  permission_list?: Array<Array<any>>;
}

export interface SystemSettingListRequest {}

export interface SystemSettingItem {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
  /**
   * @description
   *   配置名称
   */
  setting_name?: string;
  /**
   * @description
   *   值
   */
  value?: string;
}

export interface SystemSettingListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<SystemSettingItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface SystemSettingCondition {}

/**
 * @description
 *   搜索参数
 */
export interface SystemSettingSearch {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface SystemSettingData {
  /**
   * @description
   *   值
   */
  value?: string;
}

export interface SystemSettingModifyRequest {
  condition?: SystemSettingCondition;
  search?: SystemSettingSearch;
  data?: SystemSettingData;
}

export interface StatsDailySnapshotDetailRequest {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
}

export interface StatsDailySnapshotDetailResponse {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

/**
 * @description
 *   控制参数
 */
export interface DefaultBonusSettingCondition {}

/**
 * @description
 *   搜索参数
 */
export interface DefaultBonusSettingListSearch {}

export interface DefaultBonusSettingListRequest {
  condition?: DefaultBonusSettingCondition;
  search?: DefaultBonusSettingListSearch;
}

export interface DefaultBonusSettingItem {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
  /**
   * @description
   *   配置名称
   */
  setting_name?: string;
  /**
   * @description
   *   默认值
   */
  default_value?: Array<Array<any>>;
}

export interface DefaultBonusSettingAgentTypeItem {
  /**
   * @description
   *   名称
   */
  name?: string;
  /**
   * @description
   *   列表
   */
  settings?: Array<DefaultBonusSettingItem>;
}

export interface DefaultBonusSettingTypeItem {
  /**
   * @description
   *   名称
   */
  name?: string;
  /**
   * @description
   *   列表
   */
  list?: Array<DefaultBonusSettingAgentTypeItem>;
}

export interface DefaultBonusSettingListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<DefaultBonusSettingTypeItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface DefaultBonusSettingSearch {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface DefaultBonusSettingData {
  /**
   * @description
   *   默认值
   */
  default_value?: Array<Array<any>>;
}

export interface DefaultBonusSettingModifyRequest {
  condition?: DefaultBonusSettingCondition;
  search?: DefaultBonusSettingSearch;
  data?: DefaultBonusSettingData;
}

/**
 * @description
 *   控制参数
 */
export interface UserStatsSnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserStatsSnapshotListSearch {}

export interface UserStatsSnapshotListRequest {
  condition?: UserStatsSnapshotCondition;
  search?: UserStatsSnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface UserStatsSnapshotItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: UserStatsSnapshotItemType;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface UserStatsSnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserStatsSnapshotItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface AdminPermissionCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AdminPermissionListSearch {
  /**
   * @description
   *   上级ID
   * @default null
   */
  parent_id?: string;
}

export interface AdminPermissionListRequest {
  condition?: AdminPermissionCondition;
  search?: AdminPermissionListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AdminPermissionItem {
  /**
   * @description
   *   权限ID
   */
  permission_id?: string;
  /**
   * @description
   *   权限名称
   */
  permission_name?: string;
  /**
   * @description
   *   组ID
   */
  group_id?: string;
  /**
   * @description
   *   上级ID
   */
  parent_id?: string;
  /**
   * @description
   *   类型
   */
  type?: AdminPermissionItemType;
  /**
   * @description
   *   编号
   */
  number?: number;
  /**
   * @description
   *   下标
   */
  index?: number;
}

export interface AdminPermissionListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AdminPermissionItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface CoinCondition {}

/**
 * @description
 *   搜索参数
 */
export interface CoinListSearch {}

export interface CoinListRequest {}

export interface CoinItem {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   币种名称
   */
  coin_name?: string;
  /**
   * @description
   *   手续费分界值
   */
  min_fee_amount?: string;
  /**
   * @description
   *   固定手续费
   */
  fee?: string;
  /**
   * @description
   *   手续费率
   */
  fee_rate?: string;
  /**
   * @description
   *   自动开奖最大投注金额
   */
  auto_open_amount?: string;
  /**
   * @description
   *   最小投注金额
   */
  min_bet_amount?: string;
  /**
   * @description
   *   最大投注金额
   */
  max_bet_amount?: string;
}

export interface CoinListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<CoinItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface CoinSearch {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface CoinData {
  /**
   * @description
   *   手续费分界值
   * @default null
   */
  min_fee_amount?: string;
  /**
   * @description
   *   固定手续费
   * @default null
   */
  fee?: string;
  /**
   * @description
   *   手续费率
   * @default null
   */
  fee_rate?: string;
  /**
   * @description
   *   自动开奖最大投注金额
   * @default null
   */
  auto_open_amount?: string;
  /**
   * @description
   *   最小投注金额
   * @default null
   */
  min_bet_amount?: string;
  /**
   * @description
   *   最大投注金额
   * @default null
   */
  max_bet_amount?: string;
  /**
   * @description
   *   状态
   * @default null
   */
  status?: CoinDataStatus;
}

export interface CoinModifyRequest {
  condition?: CoinCondition;
  search?: CoinSearch;
  data?: CoinData;
}

/**
 * @description
 *   控制参数
 */
export interface AgentStatsDailySnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentStatsDailySnapshotListSearch {}

export interface AgentStatsDailySnapshotListRequest {
  condition?: AgentStatsDailySnapshotCondition;
  search?: AgentStatsDailySnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AgentStatsDailySnapshotItem {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface AgentStatsDailySnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentStatsDailySnapshotItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface WithdrawOrderCondition {}

/**
 * @description
 *   搜索参数
 */
export interface WithdrawOrderListSearch {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   申请单状态
   * @default null
   */
  status?: WithdrawOrderListSearchStatus;
}

export interface WithdrawOrderListRequest {
  condition?: WithdrawOrderCondition;
  search?: WithdrawOrderListSearch;
  page?: Page;
  sort?: BaseSort;
}

/**
 * @description
 *   用户
 */
export interface BaseUserItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   用户名
   */
  username?: string;
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
}

/**
 * @description
 *   币种
 */
export interface BaseCoinItem {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   币种名称
   */
  coin_name?: string;
}

/**
 * @description
 *   管理账号
 */
export interface BaseAccountItem {
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
}

export interface WithdrawOrderItem {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
  /**
   * @description
   *   到账金额
   */
  amount?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   状态
   */
  status?: WithdrawOrderItemStatus;
  /**
   * @description
   *   备注
   */
  remark?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  coin?: CoinInfoItem;
}

export interface WithdrawOrderListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<WithdrawOrderItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface WithdrawOrderSearch {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface WithdrawOrderData {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   申请金额
   */
  apply_amount?: string;
}

export interface WithdrawOrderModifyRequest {
  condition?: WithdrawOrderCondition;
  search?: WithdrawOrderSearch;
  data?: WithdrawOrderData;
}

/**
 * @description
 *   控制参数
 */
export interface AgentAccountCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentAccountListSearch {
  /**
   * @description
   *   角色ID
   * @default null
   */
  role_id?: string;
}

export interface AgentAccountListRequest {
  condition?: AgentAccountCondition;
  search?: AgentAccountListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AgentAccountItem {
  /**
   * @description
   *   代理账号ID
   */
  agent_account_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   账号角色
   */
  role_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
  /**
   * @description
   *   账号状态
   */
  status?: AgentAccountItemStatus;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  role?: AgentRoleItem;
}

export interface AgentAccountListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentAccountItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface AgentAccountSearch {
  /**
   * @description
   *   代理账号ID
   */
  agent_account_id?: string;
}

export interface AgentAccountDetailRequest {
  condition?: AgentAccountCondition;
  search?: AgentAccountSearch;
}

export interface AgentAccountDetailResponse {
  /**
   * @description
   *   代理账号ID
   */
  agent_account_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   账号角色
   */
  role_id?: string;
  /**
   * @description
   *   账号
   */
  account?: string;
  /**
   * @description
   *   账号状态
   */
  status?: AgentAccountDetailResponseStatus;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  role?: AgentRoleItem;
}

/**
 * @description
 *   控制参数
 */
export interface UserBalanceRecordCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserBalanceRecordListSearch {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
}

export interface UserBalanceRecordListRequest {
  condition?: UserBalanceRecordCondition;
  search?: UserBalanceRecordListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface UserBalanceRecordItem {
  /**
   * @description
   *   记录ID
   */
  record_id?: string;
  /**
   * @description
   *   变更类型
   */
  type?: UserBalanceRecordItemType;
  /**
   * @description
   *   变更前
   */
  before?: string;
  /**
   * @description
   *   变更值
   */
  modify?: string;
  /**
   * @description
   *   变更后
   */
  after?: string;
  /**
   * @description
   *   备注
   */
  remark?: string;
}

export interface UserBalanceRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserBalanceRecordItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface UserData {
  /**
   * @description
   *   账号
   */
  username?: string;
  /**
   * @description
   *   密码
   */
  password?: string;
  /**
   * @description
   *   钱包地址
   * @default null
   */
  wallet_address?: string;
}

export interface UserLoginRequest {
  data?: UserData;
}

export interface UserLoginResponse {
  /**
   * @description
   *   token
   */
  token?: string;
}

/**
 * @description
 *   控制参数
 */
export interface UserCondition {}

export interface UserRegisterRequest {
  condition?: UserCondition;
  data?: UserData;
}

export interface UserBindGoogleAuthRequest {}

export interface ResponseInterface {}

/**
 * @description
 *   搜索参数
 */
export interface UserSearch {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
}

export interface UserDetailRequest {
  condition?: UserCondition;
  search?: UserSearch;
}

export interface UserBalanceItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   币种名称
   * @default null
   */
  coin_name?: string;
  /**
   * @description
   *   可用余额
   */
  available?: string;
}

/**
 * @description
 *   上下级信息
 */
export interface UserRelationItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   等级
   */
  level?: number;
  /**
   * @description
   *   上级ID
   */
  pid?: string;
  /**
   * @description
   *   上上级ID
   */
  ppid?: string;
  /**
   * @description
   *   上上上级ID
   */
  pppid?: string;
}

export interface UserDetailResponse {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   用户名
   */
  username?: string;
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   谷歌验证器
   */
  google_auth?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   余额信息
   * @default
   */
  user_balance?: Array<UserBalanceItem>;
  parent?: UserParentItem;
  up_parent?: UserParentItem;
  up_up_parent?: UserParentItem;
  agent?: BaseAgentItem;
}

export interface UserChangePasswordRequest {
  /**
   * @description
   *   原密码
   */
  origin_password?: string;
  /**
   * @description
   *   新密码
   */
  password?: string;
}

/**
 * @description
 *   控制参数
 */
export interface GameCondition {}

/**
 * @description
 *   搜索参数
 */
export interface GameListSearch {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
}

export interface GameListRequest {
  search?: GameListSearch;
}

export interface GameItem {
  /**
   * @description
   *   游戏ID
   */
  game_id?: string;
  /**
   * @description
   *   游戏枚举
   */
  game_type?: GameItemGameType;
  /**
   * @description
   *   投注地址
   */
  address?: string;
  /**
   * @description
   *   赔率
   */
  rate?: Array<Array<any>>;
}

export interface GameListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<GameItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface UserStatsDailySnapshotDetailRequest {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
}

export interface UserStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   总投注金额
   * @default 0.00
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   * @default 0.00
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   * @default 0.00
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   * @default 0.00
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   * @default 0.00
   */
  total_withdraw?: string;
}

/**
 * @description
 *   控制参数
 */
export interface UserRelationCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserRelationListSearch {
  /**
   * @description
   *   1级粉丝
   * @default 0
   */
  pid?: number;
  /**
   * @description
   *   2级粉丝
   * @default 0
   */
  ppid?: number;
  /**
   * @description
   *   3级粉丝
   * @default 0
   */
  pppid?: number;
}

export interface UserRelationListRequest {
  condition?: UserRelationCondition;
  search?: UserRelationListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface UserRelationInfo {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   用户名称
   */
  username?: string;
}

export interface UserRelationListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserRelationInfo>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface UserRelationSearch {}

export interface UserRelationDetailRequest {
  condition?: UserRelationCondition;
  search?: UserRelationSearch;
}

export interface UserRelationDetailResponse {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   等级
   */
  level?: number;
  /**
   * @description
   *   上级ID
   */
  pid?: string;
  /**
   * @description
   *   上上级ID
   */
  ppid?: string;
  /**
   * @description
   *   上上上级ID
   */
  pppid?: string;
}

/**
 * @description
 *   控制参数
 */
export interface UserBalanceCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserBalanceSearch {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
}

export interface UserBalanceDetailRequest {
  condition?: UserBalanceCondition;
  search?: UserBalanceSearch;
}

export interface UserBalanceDetailResponse {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /** @description */
  coin_id?: string;
  /**
   * @description
   *   币种名称
   * @default null
   */
  coin_name?: string;
  /**
   * @description
   *   可用余额
   */
  available?: string;
}

export interface UserStatsSnapshotDetailRequest {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: UserStatsSnapshotDetailRequestType;
}

export interface UserStatsSnapshotDetailResponse {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: UserStatsSnapshotDetailResponseType;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

/**
 * @description
 *   币种信息
 */
export interface CoinInfoItem {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   币种名称
   */
  coin_name?: string;
}

export interface WithdrawOrderCreateRequest {
  condition?: WithdrawOrderCondition;
  data?: WithdrawOrderData;
}

export interface WithdrawOrderCancelRequest {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
}

/**
 * @description
 *   搜索参数
 */
export interface UserListSearch {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
  /**
   * @description
   *   上级ID
   * @default null
   */
  pid?: string;
  /**
   * @description
   *   上上级ID
   * @default null
   */
  ppid?: string;
  /**
   * @description
   *   上上上级ID
   * @default null
   */
  pppid?: string;
  /**
   * @description
   *   钱包地址
   * @default null
   */
  wallet_address?: string;
  /**
   * @description
   *   登录账号
   * @default null
   */
  username?: string;
}

export interface UserListRequest {
  condition?: UserCondition;
  search?: UserListSearch;
  page?: Page;
  sort?: BaseSort;
}

/**
 * @description
 *   上上上级信息
 */
export interface UserParentItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   用户名
   */
  username?: string;
}

/**
 * @description
 *   代理
 */
export interface BaseAgentItem {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   代理名称
   */
  agent_name?: string;
}

export interface UserItem {
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   用户名
   */
  username?: string;
  /**
   * @description
   *   钱包地址
   */
  wallet_address?: string;
  /**
   * @description
   *   谷歌验证器
   */
  google_auth?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   余额信息
   * @default
   */
  user_balance?: Array<UserBalanceItem>;
  parent?: UserParentItem;
  up_parent?: UserParentItem;
  up_up_parent?: UserParentItem;
  agent?: BaseAgentItem;
}

export interface UserListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface AgentRoleCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentRoleListSearch {}

export interface AgentRoleListRequest {
  condition?: AgentRoleCondition;
  search?: AgentRoleListSearch;
  page?: Page;
  sort?: BaseSort;
}

/**
 * @description
 *   角色
 */
export interface AgentRoleItem {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   类型
   */
  type?: AgentRoleItemType;
  /**
   * @description
   *   权限集合001
   */
  permission001?: string;
  /**
   * @description
   *   权限集合002
   */
  permission002?: string;
  /**
   * @description
   *   权限集合003
   */
  permission003?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   权限集合
   * @default
   */
  permission_list?: Array<Array<any>>;
}

export interface AgentRoleListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentRoleItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface AgentRoleData {
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   权限集合
   */
  permission_list?: Array<Array<any>>;
}

export interface AgentRoleCreateRequest {
  condition?: AgentRoleCondition;
  data?: AgentRoleData;
}

/**
 * @description
 *   搜索参数
 */
export interface AgentRoleSearch {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
}

export interface AgentRoleModifyRequest {
  condition?: AgentRoleCondition;
  search?: AgentRoleSearch;
  data?: AgentRoleData;
}

export interface AgentRoleRemoveRequest {
  condition?: AgentRoleCondition;
  search?: AgentRoleSearch;
}

export interface AgentRoleDetailRequest {
  condition?: AgentRoleCondition;
  search?: AgentRoleSearch;
}

export interface AgentRoleDetailResponse {
  /**
   * @description
   *   角色ID
   */
  role_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   角色名称
   */
  role_name?: string;
  /**
   * @description
   *   类型
   */
  type?: AgentRoleDetailResponseType;
  /**
   * @description
   *   权限集合001
   */
  permission001?: string;
  /**
   * @description
   *   权限集合002
   */
  permission002?: string;
  /**
   * @description
   *   权限集合003
   */
  permission003?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   权限集合
   * @default
   */
  permission_list?: Array<Array<any>>;
}

/**
 * @description
 *   控制参数
 */
export interface OrderCondition {}

/**
 * @description
 *   搜索参数
 */
export interface OrderListSearch {}

export interface OrderListRequest {
  condition?: OrderCondition;
  search?: OrderListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface OrderItem {
  /**
   * @description
   *   订单ID
   */
  order_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   客服ID
   */
  operator_id?: string;
  /**
   * @description
   *   货币ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  create_date?: number;
  /**
   * @description
   *   游戏类型
   */
  game_type?: OrderItemGameType;
  /**
   * @description
   *   下注类型
   */
  bet_type?: OrderItemBetType;
  /**
   * @description
   *   投注结果
   */
  game_result?: OrderItemGameResult;
  /**
   * @description
   *   投注金额
   */
  amount?: string;
  /**
   * @description
   *   奖金
   */
  reward?: string;
  /**
   * @description
   *   投注Hash
   */
  trade_hash?: string;
  /**
   * @description
   *   发奖交易Hash
   */
  reward_hash?: string;
  /**
   * @description
   *   投注状态
   */
  status?: OrderItemStatus;
  /**
   * @description
   *   手动发奖时间
   */
  open_at?: number;
  /**
   * @description
   *   下单时间
   */
  create_at?: number;
}

export interface OrderListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<OrderItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface OrderSearch {
  /**
   * @description
   *   订单ID
   */
  order_id?: string;
}

export interface OrderDetailRequest {
  condition?: OrderCondition;
  search?: OrderSearch;
}

export interface OrderDetailResponse {
  /**
   * @description
   *   订单ID
   */
  order_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   用户ID
   */
  user_id?: string;
  /**
   * @description
   *   客服ID
   */
  operator_id?: string;
  /**
   * @description
   *   货币ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  create_date?: number;
  /**
   * @description
   *   游戏类型
   */
  game_type?: OrderDetailResponseGameType;
  /**
   * @description
   *   下注类型
   */
  bet_type?: OrderDetailResponseBetType;
  /** @description */
  game_result?: OrderDetailResponseGameResult;
  /**
   * @description
   *   投注金额
   */
  amount?: string;
  /**
   * @description
   *   奖金
   */
  reward?: string;
  /**
   * @description
   *   投注Hash
   */
  trade_hash?: string;
  /**
   * @description
   *   发奖交易Hash
   */
  reward_hash?: string;
  /**
   * @description
   *   投注状态
   */
  status?: OrderDetailResponseStatus;
  /**
   * @description
   *   手动发奖时间
   */
  open_at?: number;
  /**
   * @description
   *   下单时间
   */
  create_at?: number;
}

/**
 * @description
 *   控制参数
 */
export interface AgentRelationCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentRelationSearch {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
}

export interface AgentRelationDetailRequest {
  condition?: AgentRelationCondition;
  search?: AgentRelationSearch;
}

export interface AgentRelationDetailResponse {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   等级
   */
  level?: number;
  /**
   * @description
   *   上级ID
   */
  pid?: string;
  /**
   * @description
   *   上上级ID
   */
  ppid?: string;
  /**
   * @description
   *   上上上级ID
   */
  pppid?: string;
}

export interface AgentStatsDailySnapshotDetailRequest {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
}

export interface AgentStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface AgentPermissionItem {
  /**
   * @description
   *   权限ID
   */
  permission_id?: string;
  /**
   * @description
   *   权限名称
   */
  permission_name?: string;
  /**
   * @description
   *   组ID
   */
  group_id?: string;
  /**
   * @description
   *   上级ID
   */
  parent_id?: string;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   编号
   */
  number?: number;
  /**
   * @description
   *   下标
   */
  index?: number;
}

export interface AgentPermissionListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentPermissionItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   代理类型
 */
export interface AgentAccountData {
  /**
   * @description
   *   账号名称
   */
  account?: string;
}

export interface AgentAccountCreateRequest {
  condition?: AgentAccountCondition;
  data?: AgentAccountData;
}

export interface AgentAccountModifyRequest {
  condition?: AgentAccountCondition;
  search?: AgentAccountSearch;
  data?: AgentAccountData;
}

export interface AgentAccountRemoveRequest {
  condition?: AgentAccountCondition;
  search?: AgentAccountSearch;
}

/**
 * @description
 *   搜索参数
 */
export interface AgentBonusRecordListSearch {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
}

export interface AgentBonusRecordListRequest {
  search?: AgentBonusRecordListSearch;
}

export interface AgentBonusRecordItem {
  /**
   * @description
   *   等级
   */
  level?: number;
  /**
   * @description
   *   流水
   */
  total_amount?: string;
  /**
   * @description
   *   盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   佣金
   */
  total_bonus?: string;
}

export interface AgentBonusRecordGroup {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentBonusRecordItem>;
}

export interface AgentBonusRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentBonusRecordGroup>;
}

export interface WithdrawCallbackRequest {
  /**
   * @description
   *   合约地址
   */
  contract?: string;
  /**
   * @description
   *   发起转账地址
   */
  order_id?: string;
  /**
   * @description
   *   交易Hash
   */
  hash_id?: string;
  /**
   * @description
   *   状态
   */
  status?: number;
  /**
   * @description
   *   金额
   */
  amount?: string;
  /**
   * @description
   *   回调地址
   */
  call_back_url?: string;
}

export interface ChargeCallbackRequest {
  /**
   * @description
   *   合约地址
   */
  contract?: string;
  /**
   * @description
   *   发起转账地址
   */
  platform_id?: string;
  /**
   * @description
   *   发起转账地址
   */
  form?: string;
  /**
   * @description
   *   收币地址
   */
  to?: string;
  /**
   * @description
   *   区块Hash
   */
  block_hash?: string;
  /**
   * @description
   *   交易Hash
   */
  hash_id?: string;
  /**
   * @description
   *   状态
   */
  status?: number;
  /**
   * @description
   *   金额
   */
  amount?: string;
  /**
   * @description
   *   类型
   */
  type?: ChargeCallbackRequestType;
}

export interface UserResetRequest {
  search?: UserSearch;
  /**
   * @description
   *   重置操作
   */
  action?: UserResetRequestAction;
}

/**
 * @description
 *   控制参数
 */
export interface AgentCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentListSearch {}

export interface AgentListRequest {
  condition?: AgentCondition;
  search?: AgentListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface BaseAgentAccountItem {
  /**
   * @description
   *   账号
   */
  account?: string;
}

export interface AgentItem {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   代理名称
   */
  agent_name?: string;
  /**
   * @description
   *   层级
   */
  level?: number;
  /**
   * @description
   *   代理类型
   */
  type?: AgentItemType;
  /**
   * @description
   *   状态
   */
  status?: AgentItemStatus;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   上级代理ID
   */
  parent_id?: string;
  /**
   * @description
   *   上级代理名称
   */
  parent_name?: string;
}

export interface AgentListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface AgentData {
  /**
   * @description
   *   代理名称
   */
  agent_name?: string;
  account_data?: AgentAccountData;
}

export interface AgentCreateRequest {
  condition?: AgentCondition;
  data?: AgentData;
}

/**
 * @description
 *   搜索参数
 */
export interface AgentSearch {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
}

export interface AgentModifyRequest {
  condition?: AgentCondition;
  search?: AgentSearch;
  data?: AgentData;
}

export interface AgentRemoveRequest {
  condition?: AgentCondition;
  search?: AgentSearch;
}

export interface AgentDetailRequest {
  condition?: AgentCondition;
  search?: AgentSearch;
}

export interface AgentDetailResponse {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   代理名称
   */
  agent_name?: string;
  /**
   * @description
   *   层级
   */
  level?: number;
  /**
   * @description
   *   代理类型
   */
  type?: AgentDetailResponseType;
  /**
   * @description
   *   状态
   */
  status?: AgentDetailResponseStatus;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
  /**
   * @description
   *   上级代理ID
   */
  parent_id?: string;
  /**
   * @description
   *   上级代理名称
   */
  parent_name?: string;
}

export interface AgentResetRequest {
  search?: AgentSearch;
  /**
   * @description
   *   重置操作
   */
  action?: AgentResetRequestAction;
}

export interface GenerateAgentStatsRequest {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   代理类型
   */
  type?: GenerateAgentStatsRequestType;
  /**
   * @description
   *   周期类型
   */
  stats_type?: GenerateAgentStatsRequestStatsType;
}

/**
 * @description
 *   控制参数
 */
export interface BlacklistCondition {}

/**
 * @description
 *   搜索参数
 */
export interface BlacklistListSearch {}

export interface BlacklistListRequest {
  condition?: BlacklistCondition;
  search?: BlacklistListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface BlacklistItem {
  /**
   * @description
   *   地址
   */
  address?: string;
  /**
   * @description
   *   备注
   */
  remark?: string;
  /**
   * @description
   *   创建时间
   */
  create_at?: number;
}

export interface BlacklistListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<BlacklistItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   请求数据
 */
export interface BlacklistData {
  /**
   * @description
   *   地址
   */
  address?: string;
  /**
   * @description
   *   备注
   * @default
   */
  remark?: string;
}

export interface BlacklistCreateRequest {
  condition?: BlacklistCondition;
  data?: BlacklistData;
}

/**
 * @description
 *   搜索参数
 */
export interface BlacklistSearch {
  /**
   * @description
   *   地址
   */
  address?: string;
}

export interface BlacklistRemoveRequest {
  search?: BlacklistSearch;
}

/**
 * @description
 *   搜索参数
 */
export interface AgentSettingListSearch {
  /**
   * @description
   *   代理ID
   * @default null
   */
  agent_id?: string;
}

export interface AgentSettingListRequest {
  search?: AgentSettingListSearch;
}

export interface AgentSettingItem {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   KEY
   */
  setting_key?: string;
  /**
   * @description
   *   配置名称
   */
  setting_name?: string;
  /**
   * @description
   *   值
   */
  value?: Array<Array<any>>;
}

export interface AgentSettingListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentSettingItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   控制参数
 */
export interface AgentSettingCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentSettingSearch {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface AgentSettingData {
  /**
   * @description
   *   值
   */
  value?: Array<Array<any>>;
}

export interface AgentSettingModifyRequest {
  condition?: AgentSettingCondition;
  search?: AgentSettingSearch;
  data?: AgentSettingData;
}

export interface AgentGameListRequest {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
}

export interface StatsSnapshotDetailRequest {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: StatsSnapshotDetailRequestType;
}

export interface StatsSnapshotDetailResponse {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface WalletBalanceResponse {
  /**
   * @description
   *   手续费余额
   */
  fee_amount?: string;
  /**
   * @description
   *   派奖地址TRX余额
   */
  trx_amount?: string;
  /**
   * @description
   *   派奖地址USDT余额
   */
  usdt_amount?: string;
}

/**
 * @description
 *   订单创建时间
 */
export interface BaseTimeZone {
  /**
   * @description
   *   开始时间
   * @default 0
   */
  start?: number;
  /**
   * @description
   *   结束时间
   * @default 0
   */
  end?: number;
}

export interface OrderExportRequest {
  search?: OrderListSearch;
}

export interface OrderOpenRequest {
  /**
   * @description
   *   订单ID
   */
  order_id?: string;
}

/**
 * @description
 *   控制参数
 */
export interface StoreSettingCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StoreSettingListSearch {}

export interface StoreSettingListRequest {
  condition?: StoreSettingCondition;
  search?: StoreSettingListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StoreSettingItem {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
  /**
   * @description
   *   站点名称
   */
  store_id?: string;
  /**
   * @description
   *   KEY
   */
  setting_key?: string;
  /**
   * @description
   *   配置名称
   */
  setting_name?: string;
  /**
   * @description
   *   值
   */
  value?: string;
}

export interface StoreSettingListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StoreSettingItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

/**
 * @description
 *   搜索参数
 */
export interface StoreSettingSearch {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface StoreSettingData {
  /**
   * @description
   *   值
   */
  value?: Array<Array<any>>;
}

export interface StoreSettingModifyRequest {
  condition?: StoreSettingCondition;
  search?: StoreSettingSearch;
  data?: StoreSettingData;
}

/**
 * @description
 *   搜索参数
 */
export interface GameSearch {
  /**
   * @description
   *   游戏ID
   */
  game_id?: string;
}

/**
 * @description
 *   请求数据
 */
export interface GameData {
  /**
   * @description
   *   赔率
   */
  rate?: Array<Array<any>>;
}

export interface GameModifyRequest {
  condition?: GameCondition;
  search?: GameSearch;
  data?: GameData;
}

/**
 * @description
 *   控制参数
 */
export interface StoreStatsDailySnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StoreStatsDailySnapshotListSearch {}

export interface StoreStatsDailySnapshotListRequest {
  condition?: StoreStatsDailySnapshotCondition;
  search?: StoreStatsDailySnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StoreStatsDailySnapshotItem {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface StoreStatsDailySnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StoreStatsDailySnapshotItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface StoreStatsDailySnapshotDetailRequest {
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
}

export interface StoreStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

/**
 * @description
 *   控制参数
 */
export interface StoreStatsSnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StoreStatsSnapshotListSearch {}

export interface StoreStatsSnapshotListRequest {
  condition?: StoreStatsSnapshotCondition;
  search?: StoreStatsSnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StoreStatsSnapshotItem {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

export interface StoreStatsSnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StoreStatsSnapshotItem>;
  /**
   * @description
   *   页码
   * @default 0
   */
  page?: number;
  /**
   * @description
   *   分类名称
   * @default 0
   */
  page_size?: number;
  /**
   * @description
   *   总数
   * @default 0
   */
  total?: number;
}

export interface StoreStatsSnapshotDetailRequest {
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: StoreStatsSnapshotDetailRequestType;
}

export interface StoreStatsSnapshotDetailResponse {
  /**
   * @description
   *   日期
   */
  date?: number;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   总投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   总奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   总盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   总用户奖金
   */
  total_bonus?: string;
  /**
   * @description
   *   总提现金额
   */
  total_withdraw?: string;
}

/**
 * @description
 *   搜索参数
 */
export interface OrderRecentListSearch {}

export interface OrderRecentListRequest {
  condition?: OrderCondition;
  search?: OrderRecentListSearch;
}
