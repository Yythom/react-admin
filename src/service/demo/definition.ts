/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type BaseSortCreateAt = "asc" | "desc";
export type AgentItemType = 1 | 2;
export type AgentItemStatus = 1 | 2;
export type AgentDetailResponseType = 1 | 2;
export type AgentDetailResponseStatus = 1 | 2;
export type AdminRoleItemType = 1 | 2;
export type AdminRoleDataType = 1 | 2;
export type AdminRoleDetailResponseType = 1 | 2;
export type OrderItemGameType = 1 | 2 | 3 | 4 | 5;
export type OrderItemBetType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type OrderItemStatus = 1 | 2 | 3 | 4 | 10 | 11 | 12 | 13;
export type OrderDetailResponseGameType = 1 | 2 | 3 | 4 | 5;
export type OrderDetailResponseBetType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type OrderDetailResponseStatus = 1 | 2 | 3 | 4 | 10 | 11 | 12 | 13;
export type CoinDataStatus = 1 | 2;
export type UserBalanceRecordItemType = 1 | 2 | 3 | 4;
export type GameItemGameType = 1 | 2 | 3 | 4 | 5;
export type UserStatsSnapshotDetailRequestType = 1 | 2 | 3;
export type UserStatsSnapshotDetailResponseType = 1 | 2 | 3;
export type WithdrawOrderItemStatus = 1 | 2 | 3 | 4 | 5;
export type UserResetRequestAction = 1 | 2 | 3 | 4;
export type GameDetailResponseGameType = 1 | 2 | 3 | 4 | 5;
export type AdminAccountListSearchStatus = 1 | 2;
export type AdminAccountItemStatus = 1 | 2;
export type AdminAccountDataStatus = 1 | 2;
export type AdminAccountDetailResponseStatus = 1 | 2;
export type UserStatsSnapshotItemType = 1 | 2 | 3;
export type AdminPermissionItemType = 1 | 2 | 3;
export interface OrderMakeRequest {
  /**
   * @description
   *   币种ID
   */
  coin_id?: string;
  /**
   * @description
   *   发起转账地址
   */
  from_address?: string;
  /**
   * @description
   *   接收转账地址
   */
  to_address?: string;
  /**
   * @description
   *   交易Hash
   */
  hash?: string;
  /**
   * @description
   *   金额
   */
  amount?: string;
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

export interface StoreSettingModifyRequest {
  condition?: StoreSettingCondition;
  search?: StoreSettingSearch;
  data?: StoreSettingData;
}

/**
 * @description
 *   控制参数
 */
export interface StatsSnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StatsSnapshotListSearch {}

export interface StatsSnapshotListRequest {
  condition?: StatsSnapshotCondition;
  search?: StatsSnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StatsSnapshotItem {
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
   *   活跃用户数
   */
  active_user?: number;
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

export interface StatsSnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StatsSnapshotItem>;
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
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
}

export interface BlacklistCreateRequest {
  condition?: BlacklistCondition;
  data?: BlacklistData;
}

/**
 * @description
 *   搜索参数
 */
export interface BlacklistSearch {}

export interface BlacklistModifyRequest {
  condition?: BlacklistCondition;
  search?: BlacklistSearch;
  data?: BlacklistData;
}

export interface BlacklistRemoveRequest {
  condition?: BlacklistCondition;
  search?: BlacklistSearch;
}

export interface BlacklistDetailRequest {
  condition?: BlacklistCondition;
  search?: BlacklistSearch;
}

export interface BlacklistDetailResponse {
  /**
   * @description
   *   地址
   */
  address?: string;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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

/**
 * @description
 *   控制参数
 */
export interface AgentStatsSnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentStatsSnapshotListSearch {}

export interface AgentStatsSnapshotListRequest {
  condition?: AgentStatsSnapshotCondition;
  search?: AgentStatsSnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AgentStatsSnapshotItem {
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
   *   活跃用户数
   */
  active_user?: number;
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

export interface AgentStatsSnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentStatsSnapshotItem>;
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

export interface AgentItem {
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   上级代理ID
   */
  parent_agent_id?: string;
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
   *   对赌地址
   */
  wallet_address?: string;
  /**
   * @description
   *   归集地址
   */
  collect_wallet_address?: string;
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
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   上级代理ID
   */
  parent_agent_id?: string;
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
  type?: number;
  /**
   * @description
   *   对赌地址
   */
  wallet_address?: string;
  /**
   * @description
   *   归集地址
   */
  collect_wallet_address?: string;
  /**
   * @description
   *   状态
   */
  status?: number;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   上级代理ID
   */
  parent_agent_id?: string;
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
   *   对赌地址
   */
  wallet_address?: string;
  /**
   * @description
   *   归集地址
   */
  collect_wallet_address?: string;
  /**
   * @description
   *   状态
   */
  status?: AgentDetailResponseStatus;
  /** @description */
  create_at?: number;
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

/**
 * @description
 *   角色
 */
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
   *   类型
   */
  type?: AdminRoleDataType;
  /**
   * @description
   *   权限集合001
   */
  permission001?: string;
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

export interface BaseStoreItem {
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
}

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
   *   站点ID
   */
  store_id?: string;
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

/**
 * @description
 *   请求数据
 */
export interface OrderData {
  /**
   * @description
   *   投注状态
   */
  status?: number;
}

export interface OrderModifyRequest {
  condition?: OrderCondition;
  search?: OrderSearch;
  data?: OrderData;
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
   *   站点ID
   */
  store_id?: string;
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
export interface StatsDailySnapshotCondition {}

/**
 * @description
 *   搜索参数
 */
export interface StatsDailySnapshotListSearch {}

export interface StatsDailySnapshotListRequest {
  condition?: StatsDailySnapshotCondition;
  search?: StatsDailySnapshotListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface StatsDailySnapshotItem {
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

export interface StatsDailySnapshotListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<StatsDailySnapshotItem>;
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
export interface DefaultBonusSettingCondition {}

/**
 * @description
 *   搜索参数
 */
export interface DefaultBonusSettingListSearch {}

export interface DefaultBonusSettingListRequest {
  condition?: DefaultBonusSettingCondition;
  search?: DefaultBonusSettingListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface DefaultBonusSettingItem {
  /**
   * @description
   *   配置ID
   */
  setting_id?: string;
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
   *   默认值
   */
  default_value?: string;
}

export interface DefaultBonusSettingListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<DefaultBonusSettingItem>;
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
   *   配置ID
   */
  setting_id?: string;
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
   *   默认值
   */
  default_value?: string;
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
export interface AgentBonusRecordCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentBonusRecordListSearch {}

export interface AgentBonusRecordListRequest {
  condition?: AgentBonusRecordCondition;
  search?: AgentBonusRecordListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface AgentBonusRecordItem {
  /**
   * @description
   *   记录ID
   */
  record_id?: string;
  /**
   * @description
   *   代理ID
   */
  agent_id?: string;
  /**
   * @description
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   类型
   */
  type?: number;
  /**
   * @description
   *   变更前值
   */
  before?: number;
  /**
   * @description
   *   变更值
   */
  modify?: number;
  /**
   * @description
   *   变更后值
   */
  after?: number;
  /**
   * @description
   *   备注
   */
  remark?: string;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
}

export interface AgentBonusRecordListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<AgentBonusRecordItem>;
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
export interface AgentSettingListSearch {}

export interface AgentSettingListRequest {
  condition?: AgentSettingCondition;
  search?: AgentSettingListSearch;
  page?: Page;
  sort?: BaseSort;
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
  value?: string;
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
 *   搜索参数
 */
export interface AgentSettingSearch {
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
export interface AgentSettingData {
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
  value?: string;
}

export interface AgentSettingModifyRequest {
  condition?: AgentSettingCondition;
  search?: AgentSettingSearch;
  data?: AgentSettingData;
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

export interface CoinListRequest {
  condition?: CoinCondition;
  search?: CoinListSearch;
}

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
export interface AgentAccountCondition {}

/**
 * @description
 *   搜索参数
 */
export interface AgentAccountListSearch {}

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
  account?: number;
  /**
   * @description
   *   密码
   */
  password?: number;
  /**
   * @description
   *   账号状态
   */
  status?: number;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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
  account?: number;
  /**
   * @description
   *   密码
   */
  password?: number;
  /**
   * @description
   *   账号状态
   */
  status?: number;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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
export interface UserBalanceRecordListSearch {}

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
export interface UserCondition {
  /**
   * @description
   *   关联余额
   * @default 0
   */
  with_user_balance?: number;
  /**
   * @description
   *   关联上级
   * @default 0
   */
  with_parent?: number;
  /**
   * @description
   *   关联上上级
   * @default 0
   */
  with_up_parent?: number;
  /**
   * @description
   *   关联上上上级
   * @default 0
   */
  with_up_up_parent?: number;
  /**
   * @description
   *   关联代理
   * @default 0
   */
  with_agent?: number;
  /**
   * @description
   *   关联站点
   * @default 0
   */
  with_store?: number;
}

export interface UserRegisterRequest {
  condition?: UserCondition;
  data?: UserData;
}

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

/**
 * @description
 *   请求数据
 */
export interface UserModifyData {
  /**
   * @description
   *   钱包地址
   * @default null
   */
  wallet_address?: string;
}

export interface UserModifyRequest {
  condition?: UserCondition;
  search?: UserSearch;
  data?: UserModifyData;
}

export interface UserBindGoogleAuthRequest {}

export interface ResponseInterface {}

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
   *   可用余额
   */
  available?: string;
}

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
   *   站点ID
   */
  store_id?: string;
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
  user_balance?: UserBalanceItem;
  parent?: UserParentItem;
  up_parent?: UserParentItem;
  up_up_parent?: UserParentItem;
  agent?: BaseAgentItem;
  store?: BaseStoreItem;
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
   *   站点ID
   * @default 0
   */
  store_id?: string;
}

export interface GameListRequest {
  condition?: GameCondition;
  search?: GameListSearch;
}

export interface GameItem {
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
   *   总推广佣金
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
export interface UserRelationCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserRelationListSearch {
  /**
   * @description
   *   1级粉丝
   */
  pid?: string;
  /**
   * @description
   *   2级粉丝
   */
  ppid?: string;
  /**
   * @description
   *   3级粉丝
   */
  pppid?: string;
}

export interface UserRelationListRequest {
  condition?: UserRelationCondition;
  search?: UserRelationListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface UserRelationListResponse {
  /**
   * @description
   *   列表
   */
  list?: Array<UserRelationItem>;
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
export interface UserBalanceCondition {}

/**
 * @description
 *   搜索参数
 */
export interface UserBalanceSearch {}

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
  /**
   * @description
   *   可用余额
   */
  available?: string;
}

export interface UserStatsSnapshotDetailRequest {
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
  type?: UserStatsSnapshotDetailResponseType;
  /**
   * @description
   *   投注金额
   */
  total_amount?: string;
  /**
   * @description
   *   奖励金额
   */
  total_reward?: string;
  /**
   * @description
   *   盈亏
   */
  total_profit?: string;
  /**
   * @description
   *   推广佣金
   */
  total_bonus?: string;
  /**
   * @description
   *   提现金额
   */
  total_withdraw?: string;
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
export interface WithdrawOrderListSearch {}

export interface WithdrawOrderListRequest {
  condition?: WithdrawOrderCondition;
  search?: WithdrawOrderListSearch;
  page?: Page;
  sort?: BaseSort;
}

export interface WithdrawOrderItem {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
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
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
  /**
   * @description
   *   申请金额
   */
  apply_amount?: string;
  /**
   * @description
   *   到账金额
   */
  amount?: string;
  /**
   * @description
   *   手续费
   */
  fee?: string;
  /**
   * @description
   *   状态
   */
  status?: WithdrawOrderItemStatus;
  /**
   * @description
   *   完成日期
   */
  finish_date?: number;
  /**
   * @description
   *   审核时间
   */
  review_at?: number;
  /**
   * @description
   *   完成时间
   */
  finish_at?: number;
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
 *   请求数据
 */
export interface WithdrawOrderData {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
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
   *   站点ID
   */
  store_id?: string;
  /**
   * @description
   *   账号ID
   */
  account_id?: string;
  /**
   * @description
   *   金额
   */
  amount?: string;
  /**
   * @description
   *   状态
   */
  status?: number;
  /**
   * @description
   *   审核时间
   */
  review_at?: number;
  /**
   * @description
   *   备注
   */
  remark?: string;
  /** @description */
  create_at?: number;
  /** @description */
  update_at?: number;
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
   *   站点ID
   * @default null
   */
  store_id?: string;
  /**
   * @description
   *   站点ID
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
   *   站点ID
   */
  store_id?: string;
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
  user_balance?: UserBalanceItem;
  parent?: UserParentItem;
  up_parent?: UserParentItem;
  up_up_parent?: UserParentItem;
  agent?: BaseAgentItem;
  store?: BaseStoreItem;
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
 *   搜索参数
 */
export interface GameSearch {
  /**
   * @description
   * @default 0
   */
  store_id?: string;
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

export interface GameDetailRequest {
  condition?: GameCondition;
  search?: GameSearch;
}

export interface GameDetailResponse {
  /**
   * @description
   *   游戏枚举
   */
  game_type?: GameDetailResponseGameType;
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
  /**
   * @description
   *   密码
   */
  password?: string;
  /**
   * @description
   *   状态
   */
  status?: AdminAccountDataStatus;
}

export interface AdminAccountCreateRequest {
  condition?: AdminAccountCondition;
  data?: AdminAccountData;
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

export interface SystemSettingListRequest {}

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
 *   搜索参数
 */
export interface WithdrawOrderSearch {
  /**
   * @description
   *   提现订单ID
   */
  order_id?: string;
}

export interface WithdrawOrderModifyRequest {
  condition?: WithdrawOrderCondition;
  search?: WithdrawOrderSearch;
  data?: WithdrawOrderData;
}
