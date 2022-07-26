/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import requester from "../request";
import type {
  OrderBonusDetailListRequest,
  OrderBonusDetailListResponse,
  UserStatsDailySnapshotListRequest,
  UserStatsDailySnapshotListResponse,
  AdminAccountListRequest,
  AdminAccountListResponse,
  AdminAccountCreateRequest,
  BaseSuccessResponse,
  AdminAccountModifyRequest,
  AdminAccountResetRequest,
  AdminAccountRemoveRequest,
  AdminAccountDetailRequest,
  AdminAccountDetailResponse,
  AgentStatsSnapshotDetailRequest,
  AgentStatsSnapshotDetailResponse,
  StoreListRequest,
  StoreListResponse,
  StoreCreateRequest,
  StoreModifyRequest,
  StoreRemoveRequest,
  StoreDetailRequest,
  StoreDetailResponse,
  ProfileLoginRequest,
  ProfileLoginResponse,
  ProfileChangePasswordRequest,
  AdminRoleListRequest,
  AdminRoleListResponse,
  AdminRoleCreateRequest,
  AdminRoleModifyRequest,
  AdminRoleRemoveRequest,
  AdminRoleDetailRequest,
  AdminRoleDetailResponse,
  SystemSettingListRequest,
  SystemSettingListResponse,
  SystemSettingModifyRequest,
  StatsDailySnapshotDetailRequest,
  StatsDailySnapshotDetailResponse,
  DefaultBonusSettingListRequest,
  DefaultBonusSettingListResponse,
  DefaultBonusSettingModifyRequest,
  UserStatsSnapshotListRequest,
  UserStatsSnapshotListResponse,
  AdminPermissionListRequest,
  AdminPermissionListResponse,
  CoinListRequest,
  CoinListResponse,
  CoinModifyRequest,
  AgentStatsDailySnapshotListRequest,
  AgentStatsDailySnapshotListResponse,
  WithdrawOrderListRequest,
  WithdrawOrderListResponse,
  WithdrawOrderModifyRequest,
  AgentAccountListRequest,
  AgentAccountListResponse,
  AgentAccountDetailRequest,
  AgentAccountDetailResponse,
  UserBalanceRecordListRequest,
  UserBalanceRecordListResponse,
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserBindGoogleAuthRequest,
  ResponseInterface,
  UserDetailRequest,
  UserDetailResponse,
  UserChangePasswordRequest,
  GameListRequest,
  GameListResponse,
  UserStatsDailySnapshotDetailRequest,
  UserStatsDailySnapshotDetailResponse,
  UserRelationListRequest,
  UserRelationListResponse,
  UserRelationDetailRequest,
  UserRelationDetailResponse,
  UserBalanceDetailRequest,
  UserBalanceDetailResponse,
  UserStatsSnapshotDetailRequest,
  UserStatsSnapshotDetailResponse,
  WithdrawOrderCreateRequest,
  WithdrawOrderCancelRequest,
  UserListRequest,
  UserListResponse,
  AgentRoleListRequest,
  AgentRoleListResponse,
  AgentRoleCreateRequest,
  AgentRoleModifyRequest,
  AgentRoleRemoveRequest,
  AgentRoleDetailRequest,
  AgentRoleDetailResponse,
  OrderListRequest,
  OrderListResponse,
  OrderDetailRequest,
  OrderDetailResponse,
  AgentRelationDetailRequest,
  AgentRelationDetailResponse,
  AgentStatsDailySnapshotDetailRequest,
  AgentStatsDailySnapshotDetailResponse,
  AgentPermissionListResponse,
  AgentAccountCreateRequest,
  AgentAccountModifyRequest,
  AgentAccountRemoveRequest,
  AgentBonusRecordListRequest,
  AgentBonusRecordListResponse,
  WithdrawCallbackRequest,
  ChargeCallbackRequest,
  UserResetRequest,
  AgentListRequest,
  AgentListResponse,
  AgentCreateRequest,
  AgentModifyRequest,
  AgentRemoveRequest,
  AgentDetailRequest,
  AgentDetailResponse,
  AgentResetRequest,
  GenerateAgentStatsRequest,
  BlacklistListRequest,
  BlacklistListResponse,
  BlacklistCreateRequest,
  BlacklistRemoveRequest,
  AgentSettingListRequest,
  AgentSettingListResponse,
  AgentSettingModifyRequest,
  AgentGameListRequest,
  StatsSnapshotDetailRequest,
  StatsSnapshotDetailResponse,
  WalletBalanceResponse,
  OrderExportRequest,
  OrderOpenRequest,
  StoreSettingListRequest,
  StoreSettingListResponse,
  StoreSettingModifyRequest,
  GameModifyRequest,
  StoreStatsDailySnapshotListRequest,
  StoreStatsDailySnapshotListResponse,
  StoreStatsDailySnapshotDetailRequest,
  StoreStatsDailySnapshotDetailResponse,
  StoreStatsSnapshotListRequest,
  StoreStatsSnapshotListResponse,
  StoreStatsSnapshotDetailRequest,
  StoreStatsSnapshotDetailResponse,
  OrderRecentListRequest,
} from "./definition";

/** @description request parameter type for postApiV1AdminOrderBonusList */
export interface PostApiV1AdminOrderBonusListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderBonusList */
export interface PostApiV1AdminOrderBonusListOption {
  /** @description */
  body: {
    /**
        @description */
    OrderBonusDetailListRequest: OrderBonusDetailListRequest;
  };
}

/** @description response type for postApiV1AdminOrderBonusList */
export interface PostApiV1AdminOrderBonusListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderBonusDetailListResponse;
  };
}

export type PostApiV1AdminOrderBonusListResponseSuccess =
  PostApiV1AdminOrderBonusListResponse[200];
/**
 * @description
 *   获取订单分佣明细列表
 * @tags 总管理后台-订单分佣明细管理
 * @produces application/json
 */
export const postApiV1AdminOrderBonusList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/bonus/list";
  function request(
    option: PostApiV1AdminOrderBonusListOption
  ): Promise<PostApiV1AdminOrderBonusListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderBonusListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserStatsDailySnapshotList */
export interface PostApiV1AdminUserStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserStatsDailySnapshotList */
export interface PostApiV1AdminUserStatsDailySnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsDailySnapshotListRequest: UserStatsDailySnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminUserStatsDailySnapshotList */
export interface PostApiV1AdminUserStatsDailySnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsDailySnapshotListResponse;
  };
}

export type PostApiV1AdminUserStatsDailySnapshotListResponseSuccess =
  PostApiV1AdminUserStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取汇总统计列表
 * @tags 总管理后台-用户汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminUserStatsDailySnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/stats/daily/snapshot/list";
  function request(
    option: PostApiV1AdminUserStatsDailySnapshotListOption
  ): Promise<PostApiV1AdminUserStatsDailySnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserStatsDailySnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountList */
export interface PostApiV1AdminAdminAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountList */
export interface PostApiV1AdminAdminAccountListOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountListRequest: AdminAccountListRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountList */
export interface PostApiV1AdminAdminAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminAccountListResponse;
  };
}

export type PostApiV1AdminAdminAccountListResponseSuccess =
  PostApiV1AdminAdminAccountListResponse[200];
/**
 * @description
 *   获取管理账号列表
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/list";
  function request(
    option: PostApiV1AdminAdminAccountListOption
  ): Promise<PostApiV1AdminAdminAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountCreate */
export interface PostApiV1AdminAdminAccountCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountCreate */
export interface PostApiV1AdminAdminAccountCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountCreateRequest: AdminAccountCreateRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountCreate */
export interface PostApiV1AdminAdminAccountCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminAccountCreateResponseSuccess =
  PostApiV1AdminAdminAccountCreateResponse[200];
/**
 * @description
 *   创建管理账号
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/create";
  function request(
    option: PostApiV1AdminAdminAccountCreateOption
  ): Promise<PostApiV1AdminAdminAccountCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountModify */
export interface PostApiV1AdminAdminAccountModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountModify */
export interface PostApiV1AdminAdminAccountModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountModifyRequest: AdminAccountModifyRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountModify */
export interface PostApiV1AdminAdminAccountModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminAccountModifyResponseSuccess =
  PostApiV1AdminAdminAccountModifyResponse[200];
/**
 * @description
 *   更新管理账号
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/modify";
  function request(
    option: PostApiV1AdminAdminAccountModifyOption
  ): Promise<PostApiV1AdminAdminAccountModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountReset */
export interface PostApiV1AdminAdminAccountResetOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountReset */
export interface PostApiV1AdminAdminAccountResetOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountResetRequest: AdminAccountResetRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountReset */
export interface PostApiV1AdminAdminAccountResetResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminAccountResetResponseSuccess =
  PostApiV1AdminAdminAccountResetResponse[200];
/**
 * @description
 *   重置管理账号
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountReset = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/reset";
  function request(
    option: PostApiV1AdminAdminAccountResetOption
  ): Promise<PostApiV1AdminAdminAccountResetResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountResetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountRemove */
export interface PostApiV1AdminAdminAccountRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountRemove */
export interface PostApiV1AdminAdminAccountRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountRemoveRequest: AdminAccountRemoveRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountRemove */
export interface PostApiV1AdminAdminAccountRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminAccountRemoveResponseSuccess =
  PostApiV1AdminAdminAccountRemoveResponse[200];
/**
 * @description
 *   删除管理账号
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/remove";
  function request(
    option: PostApiV1AdminAdminAccountRemoveOption
  ): Promise<PostApiV1AdminAdminAccountRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminAccountDetail */
export interface PostApiV1AdminAdminAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminAccountDetail */
export interface PostApiV1AdminAdminAccountDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AdminAccountDetailRequest: AdminAccountDetailRequest;
  };
}

/** @description response type for postApiV1AdminAdminAccountDetail */
export interface PostApiV1AdminAdminAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminAccountDetailResponse;
  };
}

export type PostApiV1AdminAdminAccountDetailResponseSuccess =
  PostApiV1AdminAdminAccountDetailResponse[200];
/**
 * @description
 *   获取管理账号详情
 * @tags 总管理后台-管理账号管理
 * @produces application/json
 */
export const postApiV1AdminAdminAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/account/detail";
  function request(
    option: PostApiV1AdminAdminAccountDetailOption
  ): Promise<PostApiV1AdminAdminAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentStatsSnapshotDetail */
export interface PostApiV1AdminAgentStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentStatsSnapshotDetail */
export interface PostApiV1AdminAgentStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentStatsSnapshotDetailRequest: AgentStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminAgentStatsSnapshotDetail */
export interface PostApiV1AdminAgentStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentStatsSnapshotDetailResponse;
  };
}

export type PostApiV1AdminAgentStatsSnapshotDetailResponseSuccess =
  PostApiV1AdminAgentStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取统计
 * @tags 总管理后台-代理统计管理
 * @produces application/json
 */
export const postApiV1AdminAgentStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/stats/snapshot/detail";
  function request(
    option: PostApiV1AdminAgentStatsSnapshotDetailOption
  ): Promise<PostApiV1AdminAgentStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreList */
export interface PostApiV1AdminStoreListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreList */
export interface PostApiV1AdminStoreListOption {
  /** @description */
  body: {
    /**
        @description */
    StoreListRequest: StoreListRequest;
  };
}

/** @description response type for postApiV1AdminStoreList */
export interface PostApiV1AdminStoreListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreListResponse;
  };
}

export type PostApiV1AdminStoreListResponseSuccess =
  PostApiV1AdminStoreListResponse[200];
/**
 * @description
 *   获取站点列表
 * @tags 总管理后台-站点管理
 * @produces application/json
 */
export const postApiV1AdminStoreList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/list";
  function request(
    option: PostApiV1AdminStoreListOption
  ): Promise<PostApiV1AdminStoreListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreCreate */
export interface PostApiV1AdminStoreCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreCreate */
export interface PostApiV1AdminStoreCreateOption {
  /** @description */
  body: {
    /**
        @description */
    StoreCreateRequest: StoreCreateRequest;
  };
}

/** @description response type for postApiV1AdminStoreCreate */
export interface PostApiV1AdminStoreCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreCreateResponseSuccess =
  PostApiV1AdminStoreCreateResponse[200];
/**
 * @description
 *   创建站点
 * @tags 总管理后台-站点管理
 * @produces application/json
 */
export const postApiV1AdminStoreCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/create";
  function request(
    option: PostApiV1AdminStoreCreateOption
  ): Promise<PostApiV1AdminStoreCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreModify */
export interface PostApiV1AdminStoreModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreModify */
export interface PostApiV1AdminStoreModifyOption {
  /** @description */
  body: {
    /**
        @description */
    StoreModifyRequest: StoreModifyRequest;
  };
}

/** @description response type for postApiV1AdminStoreModify */
export interface PostApiV1AdminStoreModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreModifyResponseSuccess =
  PostApiV1AdminStoreModifyResponse[200];
/**
 * @description
 *   更新站点
 * @tags 总管理后台-站点管理
 * @produces application/json
 */
export const postApiV1AdminStoreModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/modify";
  function request(
    option: PostApiV1AdminStoreModifyOption
  ): Promise<PostApiV1AdminStoreModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRemove */
export interface PostApiV1AdminStoreRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreRemove */
export interface PostApiV1AdminStoreRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    StoreRemoveRequest: StoreRemoveRequest;
  };
}

/** @description response type for postApiV1AdminStoreRemove */
export interface PostApiV1AdminStoreRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreRemoveResponseSuccess =
  PostApiV1AdminStoreRemoveResponse[200];
/**
 * @description
 *   删除站点
 * @tags 总管理后台-站点管理
 * @produces application/json
 */
export const postApiV1AdminStoreRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/remove";
  function request(
    option: PostApiV1AdminStoreRemoveOption
  ): Promise<PostApiV1AdminStoreRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreDetail */
export interface PostApiV1AdminStoreDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreDetail */
export interface PostApiV1AdminStoreDetailOption {
  /** @description */
  body: {
    /**
        @description */
    StoreDetailRequest: StoreDetailRequest;
  };
}

/** @description response type for postApiV1AdminStoreDetail */
export interface PostApiV1AdminStoreDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreDetailResponse;
  };
}

export type PostApiV1AdminStoreDetailResponseSuccess =
  PostApiV1AdminStoreDetailResponse[200];
/**
 * @description
 *   获取站点详情
 * @tags 总管理后台-站点管理
 * @produces application/json
 */
export const postApiV1AdminStoreDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/detail";
  function request(
    option: PostApiV1AdminStoreDetailOption
  ): Promise<PostApiV1AdminStoreDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminProfileLogin */
export interface PostApiV1AdminProfileLoginOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminProfileLogin */
export interface PostApiV1AdminProfileLoginOption {
  /** @description */
  body: {
    /**
        @description */
    ProfileLoginRequest: ProfileLoginRequest;
  };
}

/** @description response type for postApiV1AdminProfileLogin */
export interface PostApiV1AdminProfileLoginResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ProfileLoginResponse;
  };
}

export type PostApiV1AdminProfileLoginResponseSuccess =
  PostApiV1AdminProfileLoginResponse[200];
/**
 * @description
 *   登录
 * @tags 总管理后台-Profile
 * @produces application/json
 */
export const postApiV1AdminProfileLogin = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/profile/login";
  function request(
    option: PostApiV1AdminProfileLoginOption
  ): Promise<PostApiV1AdminProfileLoginResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminProfileLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminProfileDetail */
export interface PostApiV1AdminProfileDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminProfileDetail */
export interface PostApiV1AdminProfileDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminAccountDetailResponse;
  };
}

export type PostApiV1AdminProfileDetailResponseSuccess =
  PostApiV1AdminProfileDetailResponse[200];
/**
 * @description
 *   获取当前登录账号详情
 * @tags 总管理后台-Profile
 * @produces application/json
 */
export const postApiV1AdminProfileDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/profile/detail";
  function request(
    option?: PostApiV1AdminProfileDetailOption
  ): Promise<PostApiV1AdminProfileDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminProfileDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminProfilePasswordChange */
export interface PostApiV1AdminProfilePasswordChangeOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminProfilePasswordChange */
export interface PostApiV1AdminProfilePasswordChangeOption {
  /** @description */
  body: {
    /**
        @description */
    ProfileChangePasswordRequest: ProfileChangePasswordRequest;
  };
}

/** @description response type for postApiV1AdminProfilePasswordChange */
export interface PostApiV1AdminProfilePasswordChangeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminProfilePasswordChangeResponseSuccess =
  PostApiV1AdminProfilePasswordChangeResponse[200];
/**
 * @description
 *   修改当前账号登录密码
 * @tags 总管理后台-Profile
 * @produces application/json
 */
export const postApiV1AdminProfilePasswordChange = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/profile/password/change";
  function request(
    option: PostApiV1AdminProfilePasswordChangeOption
  ): Promise<PostApiV1AdminProfilePasswordChangeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminProfilePasswordChangeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminRoleList */
export interface PostApiV1AdminAdminRoleListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminRoleList */
export interface PostApiV1AdminAdminRoleListOption {
  /** @description */
  body: {
    /**
        @description */
    AdminRoleListRequest: AdminRoleListRequest;
  };
}

/** @description response type for postApiV1AdminAdminRoleList */
export interface PostApiV1AdminAdminRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminRoleListResponse;
  };
}

export type PostApiV1AdminAdminRoleListResponseSuccess =
  PostApiV1AdminAdminRoleListResponse[200];
/**
 * @description
 *   获取角色列表
 * @tags 总管理后台-角色管理
 * @produces application/json
 */
export const postApiV1AdminAdminRoleList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/role/list";
  function request(
    option: PostApiV1AdminAdminRoleListOption
  ): Promise<PostApiV1AdminAdminRoleListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminRoleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminRoleCreate */
export interface PostApiV1AdminAdminRoleCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminRoleCreate */
export interface PostApiV1AdminAdminRoleCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AdminRoleCreateRequest: AdminRoleCreateRequest;
  };
}

/** @description response type for postApiV1AdminAdminRoleCreate */
export interface PostApiV1AdminAdminRoleCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminRoleCreateResponseSuccess =
  PostApiV1AdminAdminRoleCreateResponse[200];
/**
 * @description
 *   创建角色
 * @tags 总管理后台-角色管理
 * @produces application/json
 */
export const postApiV1AdminAdminRoleCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/role/create";
  function request(
    option: PostApiV1AdminAdminRoleCreateOption
  ): Promise<PostApiV1AdminAdminRoleCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminRoleCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminRoleModify */
export interface PostApiV1AdminAdminRoleModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminRoleModify */
export interface PostApiV1AdminAdminRoleModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AdminRoleModifyRequest: AdminRoleModifyRequest;
  };
}

/** @description response type for postApiV1AdminAdminRoleModify */
export interface PostApiV1AdminAdminRoleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminRoleModifyResponseSuccess =
  PostApiV1AdminAdminRoleModifyResponse[200];
/**
 * @description
 *   更新角色
 * @tags 总管理后台-角色管理
 * @produces application/json
 */
export const postApiV1AdminAdminRoleModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/role/modify";
  function request(
    option: PostApiV1AdminAdminRoleModifyOption
  ): Promise<PostApiV1AdminAdminRoleModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminRoleModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminRoleRemove */
export interface PostApiV1AdminAdminRoleRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminRoleRemove */
export interface PostApiV1AdminAdminRoleRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AdminRoleRemoveRequest: AdminRoleRemoveRequest;
  };
}

/** @description response type for postApiV1AdminAdminRoleRemove */
export interface PostApiV1AdminAdminRoleRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAdminRoleRemoveResponseSuccess =
  PostApiV1AdminAdminRoleRemoveResponse[200];
/**
 * @description
 *   删除角色
 * @tags 总管理后台-角色管理
 * @produces application/json
 */
export const postApiV1AdminAdminRoleRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/role/remove";
  function request(
    option: PostApiV1AdminAdminRoleRemoveOption
  ): Promise<PostApiV1AdminAdminRoleRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminRoleRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminRoleDetail */
export interface PostApiV1AdminAdminRoleDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAdminRoleDetail */
export interface PostApiV1AdminAdminRoleDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AdminRoleDetailRequest: AdminRoleDetailRequest;
  };
}

/** @description response type for postApiV1AdminAdminRoleDetail */
export interface PostApiV1AdminAdminRoleDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminRoleDetailResponse;
  };
}

export type PostApiV1AdminAdminRoleDetailResponseSuccess =
  PostApiV1AdminAdminRoleDetailResponse[200];
/**
 * @description
 *   获取角色详情
 * @tags 总管理后台-角色管理
 * @produces application/json
 */
export const postApiV1AdminAdminRoleDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/role/detail";
  function request(
    option: PostApiV1AdminAdminRoleDetailOption
  ): Promise<PostApiV1AdminAdminRoleDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminRoleDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminSystemSettingList */
export interface PostApiV1AdminSystemSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminSystemSettingList */
export interface PostApiV1AdminSystemSettingListOption {
  /** @description */
  body: {
    /**
        @description */
    SystemSettingListRequest: SystemSettingListRequest;
  };
}

/** @description response type for postApiV1AdminSystemSettingList */
export interface PostApiV1AdminSystemSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SystemSettingListResponse;
  };
}

export type PostApiV1AdminSystemSettingListResponseSuccess =
  PostApiV1AdminSystemSettingListResponse[200];
/**
 * @description
 *   获取系统配置列表
 * @tags 总管理后台-系统配置管理
 * @produces application/json
 */
export const postApiV1AdminSystemSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/system/setting/list";
  function request(
    option: PostApiV1AdminSystemSettingListOption
  ): Promise<PostApiV1AdminSystemSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminSystemSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminSystemSettingModify */
export interface PostApiV1AdminSystemSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminSystemSettingModify */
export interface PostApiV1AdminSystemSettingModifyOption {
  /** @description */
  body: {
    /**
        @description */
    SystemSettingModifyRequest: SystemSettingModifyRequest;
  };
}

/** @description response type for postApiV1AdminSystemSettingModify */
export interface PostApiV1AdminSystemSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminSystemSettingModifyResponseSuccess =
  PostApiV1AdminSystemSettingModifyResponse[200];
/**
 * @description
 *   更新系统配置
 * @tags 总管理后台-系统配置管理
 * @produces application/json
 */
export const postApiV1AdminSystemSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/system/setting/modify";
  function request(
    option: PostApiV1AdminSystemSettingModifyOption
  ): Promise<PostApiV1AdminSystemSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminSystemSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStatsDailySnapshotDetail */
export interface PostApiV1AdminStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStatsDailySnapshotDetail */
export interface PostApiV1AdminStatsDailySnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    StatsDailySnapshotDetailRequest: StatsDailySnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminStatsDailySnapshotDetail */
export interface PostApiV1AdminStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StatsDailySnapshotDetailResponse;
  };
}

export type PostApiV1AdminStatsDailySnapshotDetailResponseSuccess =
  PostApiV1AdminStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取汇总统计详情
 * @tags 总管理后台-汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStatsDailySnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/stats/daily/snapshot/detail";
  function request(
    option: PostApiV1AdminStatsDailySnapshotDetailOption
  ): Promise<PostApiV1AdminStatsDailySnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStatsDailySnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminDefaultBonusSettingList */
export interface PostApiV1AdminDefaultBonusSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminDefaultBonusSettingList */
export interface PostApiV1AdminDefaultBonusSettingListOption {
  /** @description */
  body: {
    /**
        @description */
    DefaultBonusSettingListRequest: DefaultBonusSettingListRequest;
  };
}

/** @description response type for postApiV1AdminDefaultBonusSettingList */
export interface PostApiV1AdminDefaultBonusSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: DefaultBonusSettingListResponse;
  };
}

export type PostApiV1AdminDefaultBonusSettingListResponseSuccess =
  PostApiV1AdminDefaultBonusSettingListResponse[200];
/**
 * @description
 *   获取默认佣金配置列表
 * @tags 总管理后台-默认佣金配置管理
 * @produces application/json
 */
export const postApiV1AdminDefaultBonusSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/default/bonus/setting/list";
  function request(
    option: PostApiV1AdminDefaultBonusSettingListOption
  ): Promise<PostApiV1AdminDefaultBonusSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminDefaultBonusSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminDefaultBonusSettingModify */
export interface PostApiV1AdminDefaultBonusSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminDefaultBonusSettingModify */
export interface PostApiV1AdminDefaultBonusSettingModifyOption {
  /** @description */
  body: {
    /**
        @description */
    DefaultBonusSettingModifyRequest: DefaultBonusSettingModifyRequest;
  };
}

/** @description response type for postApiV1AdminDefaultBonusSettingModify */
export interface PostApiV1AdminDefaultBonusSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminDefaultBonusSettingModifyResponseSuccess =
  PostApiV1AdminDefaultBonusSettingModifyResponse[200];
/**
 * @description
 *   更新默认佣金配置
 * @tags 总管理后台-默认佣金配置管理
 * @produces application/json
 */
export const postApiV1AdminDefaultBonusSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/default/bonus/setting/modify";
  function request(
    option: PostApiV1AdminDefaultBonusSettingModifyOption
  ): Promise<PostApiV1AdminDefaultBonusSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminDefaultBonusSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserStatsSnapshotList */
export interface PostApiV1AdminUserStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserStatsSnapshotList */
export interface PostApiV1AdminUserStatsSnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsSnapshotListRequest: UserStatsSnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminUserStatsSnapshotList */
export interface PostApiV1AdminUserStatsSnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsSnapshotListResponse;
  };
}

export type PostApiV1AdminUserStatsSnapshotListResponseSuccess =
  PostApiV1AdminUserStatsSnapshotListResponse[200];
/**
 * @description
 *   获取统计列表
 * @tags 总管理后台-用户统计管理
 * @produces application/json
 */
export const postApiV1AdminUserStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/stats/snapshot/list";
  function request(
    option: PostApiV1AdminUserStatsSnapshotListOption
  ): Promise<PostApiV1AdminUserStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserStatsSnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAdminPermissionList */
export interface PostApiV1AdminAdminPermissionListOption {
  /** @description */
  body: {
    /**
        @description */
    AdminPermissionListRequest: AdminPermissionListRequest;
  };
}

/** @description response type for postApiV1AdminAdminPermissionList */
export interface PostApiV1AdminAdminPermissionListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AdminPermissionListResponse;
  };
}

export type PostApiV1AdminAdminPermissionListResponseSuccess =
  PostApiV1AdminAdminPermissionListResponse[200];
/**
 * @description
 *   获取权限列表
 * @tags 总管理后台-权限管理
 * @produces application/json
 */
export const postApiV1AdminAdminPermissionList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/admin/permission/list";
  function request(
    option: PostApiV1AdminAdminPermissionListOption
  ): Promise<PostApiV1AdminAdminPermissionListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAdminPermissionListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminCoinList */
export interface PostApiV1AdminCoinListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminCoinList */
export interface PostApiV1AdminCoinListOption {
  /** @description */
  body: {
    /**
        @description */
    CoinListRequest: CoinListRequest;
  };
}

/** @description response type for postApiV1AdminCoinList */
export interface PostApiV1AdminCoinListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: CoinListResponse;
  };
}

export type PostApiV1AdminCoinListResponseSuccess =
  PostApiV1AdminCoinListResponse[200];
/**
 * @description
 *   获取币种列表
 * @tags 总管理后台-币种管理
 * @produces application/json
 */
export const postApiV1AdminCoinList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/coin/list";
  function request(
    option: PostApiV1AdminCoinListOption
  ): Promise<PostApiV1AdminCoinListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminCoinListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminCoinModify */
export interface PostApiV1AdminCoinModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminCoinModify */
export interface PostApiV1AdminCoinModifyOption {
  /** @description */
  body: {
    /**
        @description */
    CoinModifyRequest: CoinModifyRequest;
  };
}

/** @description response type for postApiV1AdminCoinModify */
export interface PostApiV1AdminCoinModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminCoinModifyResponseSuccess =
  PostApiV1AdminCoinModifyResponse[200];
/**
 * @description
 *   更新币种
 * @tags 总管理后台-币种管理
 * @produces application/json
 */
export const postApiV1AdminCoinModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/coin/modify";
  function request(
    option: PostApiV1AdminCoinModifyOption
  ): Promise<PostApiV1AdminCoinModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminCoinModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentStatsDailySnapshotList */
export interface PostApiV1AdminAgentStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentStatsDailySnapshotList */
export interface PostApiV1AdminAgentStatsDailySnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentStatsDailySnapshotListRequest: AgentStatsDailySnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminAgentStatsDailySnapshotList */
export interface PostApiV1AdminAgentStatsDailySnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentStatsDailySnapshotListResponse;
  };
}

export type PostApiV1AdminAgentStatsDailySnapshotListResponseSuccess =
  PostApiV1AdminAgentStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取汇总统计列表
 * @tags 总管理后台-代理汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminAgentStatsDailySnapshotList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/agent/stats/daily/snapshot/list";
    function request(
      option: PostApiV1AdminAgentStatsDailySnapshotListOption
    ): Promise<PostApiV1AdminAgentStatsDailySnapshotListResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminAgentStatsDailySnapshotListResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminWithdrawOrderList */
export interface PostApiV1AdminWithdrawOrderListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminWithdrawOrderList */
export interface PostApiV1AdminWithdrawOrderListOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderListRequest: WithdrawOrderListRequest;
  };
}

/** @description response type for postApiV1AdminWithdrawOrderList */
export interface PostApiV1AdminWithdrawOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WithdrawOrderListResponse;
  };
}

export type PostApiV1AdminWithdrawOrderListResponseSuccess =
  PostApiV1AdminWithdrawOrderListResponse[200];
/**
 * @description
 *   获取提现申请列表
 * @tags 总管理后台-提现申请管理
 * @produces application/json
 */
export const postApiV1AdminWithdrawOrderList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/withdrawOrder/list";
  function request(
    option: PostApiV1AdminWithdrawOrderListOption
  ): Promise<PostApiV1AdminWithdrawOrderListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminWithdrawOrderListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminWithdrawOrderPass */
export interface PostApiV1AdminWithdrawOrderPassOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminWithdrawOrderPass */
export interface PostApiV1AdminWithdrawOrderPassOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderModifyRequest: WithdrawOrderModifyRequest;
  };
}

/** @description response type for postApiV1AdminWithdrawOrderPass */
export interface PostApiV1AdminWithdrawOrderPassResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminWithdrawOrderPassResponseSuccess =
  PostApiV1AdminWithdrawOrderPassResponse[200];
/**
 * @description
 *   通过提现申请
 * @tags 总管理后台-提现申请管理
 * @produces application/json
 */
export const postApiV1AdminWithdrawOrderPass = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/withdrawOrder/pass";
  function request(
    option: PostApiV1AdminWithdrawOrderPassOption
  ): Promise<PostApiV1AdminWithdrawOrderPassResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminWithdrawOrderPassResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminWithdrawOrderReject */
export interface PostApiV1AdminWithdrawOrderRejectOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminWithdrawOrderReject */
export interface PostApiV1AdminWithdrawOrderRejectOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderModifyRequest: WithdrawOrderModifyRequest;
  };
}

/** @description response type for postApiV1AdminWithdrawOrderReject */
export interface PostApiV1AdminWithdrawOrderRejectResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminWithdrawOrderRejectResponseSuccess =
  PostApiV1AdminWithdrawOrderRejectResponse[200];
/**
 * @description
 *   拒绝提现申请
 * @tags 总管理后台-提现申请管理
 * @produces application/json
 */
export const postApiV1AdminWithdrawOrderReject = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/withdrawOrder/reject";
  function request(
    option: PostApiV1AdminWithdrawOrderRejectOption
  ): Promise<PostApiV1AdminWithdrawOrderRejectResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminWithdrawOrderRejectResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentAccountList */
export interface PostApiV1AdminAgentAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentAccountList */
export interface PostApiV1AdminAgentAccountListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountListRequest: AgentAccountListRequest;
  };
}

/** @description response type for postApiV1AdminAgentAccountList */
export interface PostApiV1AdminAgentAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentAccountListResponse;
  };
}

export type PostApiV1AdminAgentAccountListResponseSuccess =
  PostApiV1AdminAgentAccountListResponse[200];
/**
 * @description
 *   获取代理账号列表
 * @tags 总管理后台-代理账号管理
 * @produces application/json
 */
export const postApiV1AdminAgentAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/account/list";
  function request(
    option: PostApiV1AdminAgentAccountListOption
  ): Promise<PostApiV1AdminAgentAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentAccountDetail */
export interface PostApiV1AdminAgentAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentAccountDetail */
export interface PostApiV1AdminAgentAccountDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountDetailRequest: AgentAccountDetailRequest;
  };
}

/** @description response type for postApiV1AdminAgentAccountDetail */
export interface PostApiV1AdminAgentAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentAccountDetailResponse;
  };
}

export type PostApiV1AdminAgentAccountDetailResponseSuccess =
  PostApiV1AdminAgentAccountDetailResponse[200];
/**
 * @description
 *   获取代理账号详情
 * @tags 总管理后台-代理账号管理
 * @produces application/json
 */
export const postApiV1AdminAgentAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/account/detail";
  function request(
    option: PostApiV1AdminAgentAccountDetailOption
  ): Promise<PostApiV1AdminAgentAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserBalanceRecordList */
export interface PostApiV1AdminUserBalanceRecordListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserBalanceRecordList */
export interface PostApiV1AdminUserBalanceRecordListOption {
  /** @description */
  body: {
    /**
        @description */
    UserBalanceRecordListRequest: UserBalanceRecordListRequest;
  };
}

/** @description response type for postApiV1AdminUserBalanceRecordList */
export interface PostApiV1AdminUserBalanceRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserBalanceRecordListResponse;
  };
}

export type PostApiV1AdminUserBalanceRecordListResponseSuccess =
  PostApiV1AdminUserBalanceRecordListResponse[200];
/**
 * @description
 *   获取用户资产记录列表
 * @tags 总管理后台-用户资产记录管理
 * @produces application/json
 */
export const postApiV1AdminUserBalanceRecordList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/userBalanceRecord/list";
  function request(
    option: PostApiV1AdminUserBalanceRecordListOption
  ): Promise<PostApiV1AdminUserBalanceRecordListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserBalanceRecordListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserOrderBonusDetailList */
export interface PostApiV1UserOrderBonusDetailListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserOrderBonusDetailList */
export interface PostApiV1UserOrderBonusDetailListOption {
  /** @description */
  body: {
    /**
        @description */
    OrderBonusDetailListRequest1: OrderBonusDetailListRequest;
  };
}

/** @description response type for postApiV1UserOrderBonusDetailList */
export interface PostApiV1UserOrderBonusDetailListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderBonusDetailListResponse;
  };
}

export type PostApiV1UserOrderBonusDetailListResponseSuccess =
  PostApiV1UserOrderBonusDetailListResponse[200];
/**
 * @description
 *   获取订单分佣明细列表
 * @tags 用户端-订单分佣明细管理
 * @produces application/json
 */
export const postApiV1UserOrderBonusDetailList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/order/bonus/detail/list";
  function request(
    option: PostApiV1UserOrderBonusDetailListOption
  ): Promise<PostApiV1UserOrderBonusDetailListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserOrderBonusDetailListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserLogin */
export interface PostApiV1UserLoginOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserLogin */
export interface PostApiV1UserLoginOption {
  /** @description */
  body: {
    /**
        @description */
    UserLoginRequest: UserLoginRequest;
  };
}

/** @description response type for postApiV1UserLogin */
export interface PostApiV1UserLoginResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserLoginResponse;
  };
}

export type PostApiV1UserLoginResponseSuccess = PostApiV1UserLoginResponse[200];
/**
 * @description
 *   登录
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserLogin = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/login";
  function request(
    option: PostApiV1UserLoginOption
  ): Promise<PostApiV1UserLoginResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserRegister */
export interface PostApiV1UserRegisterOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserRegister */
export interface PostApiV1UserRegisterOption {
  /** @description */
  body: {
    /**
        @description */
    UserRegisterRequest: UserRegisterRequest;
  };
}

/** @description response type for postApiV1UserRegister */
export interface PostApiV1UserRegisterResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserLoginResponse;
  };
}

export type PostApiV1UserRegisterResponseSuccess =
  PostApiV1UserRegisterResponse[200];
/**
 * @description
 *   注册
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserRegister = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/register";
  function request(
    option: PostApiV1UserRegisterOption
  ): Promise<PostApiV1UserRegisterResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserRegisterResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserGoogleAuthBind */
export interface PostApiV1UserGoogleAuthBindOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserGoogleAuthBind */
export interface PostApiV1UserGoogleAuthBindOption {
  /** @description */
  body: {
    /**
        @description */
    UserBindGoogleAuthRequest: UserBindGoogleAuthRequest;
  };
}

/** @description response type for postApiV1UserGoogleAuthBind */
export interface PostApiV1UserGoogleAuthBindResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ResponseInterface;
  };
}

export type PostApiV1UserGoogleAuthBindResponseSuccess =
  PostApiV1UserGoogleAuthBindResponse[200];
/**
 * @description
 *   绑定Google验证码
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserGoogleAuthBind = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/google/auth/bind";
  function request(
    option: PostApiV1UserGoogleAuthBindOption
  ): Promise<PostApiV1UserGoogleAuthBindResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserGoogleAuthBindResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserDetail */
export interface PostApiV1UserDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserDetail */
export interface PostApiV1UserDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserDetailRequest: UserDetailRequest;
  };
}

/** @description response type for postApiV1UserDetail */
export interface PostApiV1UserDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserDetailResponse;
  };
}

export type PostApiV1UserDetailResponseSuccess =
  PostApiV1UserDetailResponse[200];
/**
 * @description
 *   获取用户详情
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/detail";
  function request(
    option: PostApiV1UserDetailOption
  ): Promise<PostApiV1UserDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserPasswordChange */
export interface PostApiV1UserPasswordChangeOption {
  header?: {
    Authorization?: string;
    "x-secret-code"?: string;
  };
}

/** @description request parameter type for postApiV1UserPasswordChange */
export interface PostApiV1UserPasswordChangeOption {
  /** @description */
  body: {
    /**
        @description */
    UserChangePasswordRequest: UserChangePasswordRequest;
  };
}

/** @description response type for postApiV1UserPasswordChange */
export interface PostApiV1UserPasswordChangeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserPasswordChangeResponseSuccess =
  PostApiV1UserPasswordChangeResponse[200];
/**
 * @description
 *   修改当前账号登录密码
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserPasswordChange = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/password/change";
  function request(
    option: PostApiV1UserPasswordChangeOption
  ): Promise<PostApiV1UserPasswordChangeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserPasswordChangeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserGameList */
export interface PostApiV1UserGameListOption {
  /** @description */
  body: {
    /**
        @description */
    GameListRequest: GameListRequest;
  };
}

/** @description response type for postApiV1UserGameList */
export interface PostApiV1UserGameListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: GameListResponse;
  };
}

export type PostApiV1UserGameListResponseSuccess =
  PostApiV1UserGameListResponse[200];
/**
 * @description
 *   获取游戏列表
 * @tags 用户端-游戏管理
 * @produces application/json
 */
export const postApiV1UserGameList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/game/list";
  function request(
    option: PostApiV1UserGameListOption
  ): Promise<PostApiV1UserGameListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserGameListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserUserStatsDailySnapshotDetail */
export interface PostApiV1UserUserStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserStatsDailySnapshotDetail */
export interface PostApiV1UserUserStatsDailySnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsDailySnapshotDetailRequest: UserStatsDailySnapshotDetailRequest;
  };
}

/** @description response type for postApiV1UserUserStatsDailySnapshotDetail */
export interface PostApiV1UserUserStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsDailySnapshotDetailResponse;
  };
}

export type PostApiV1UserUserStatsDailySnapshotDetailResponseSuccess =
  PostApiV1UserUserStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取汇总统计详情
 * @tags 用户端-汇总统计管理
 * @produces application/json
 */
export const postApiV1UserUserStatsDailySnapshotDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/user/user/stats/daily/snapshot/detail";
    function request(
      option: PostApiV1UserUserStatsDailySnapshotDetailOption
    ): Promise<PostApiV1UserUserStatsDailySnapshotDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1UserUserStatsDailySnapshotDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1UserUserRelationList */
export interface PostApiV1UserUserRelationListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserRelationList */
export interface PostApiV1UserUserRelationListOption {
  /** @description */
  body: {
    /**
        @description */
    UserRelationListRequest: UserRelationListRequest;
  };
}

/** @description response type for postApiV1UserUserRelationList */
export interface PostApiV1UserUserRelationListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserRelationListResponse;
  };
}

export type PostApiV1UserUserRelationListResponseSuccess =
  PostApiV1UserUserRelationListResponse[200];
/**
 * @description
 *   获取用户下级列表
 * @tags 用户端-用户关系管理
 * @produces application/json
 */
export const postApiV1UserUserRelationList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/user/relation/list";
  function request(
    option: PostApiV1UserUserRelationListOption
  ): Promise<PostApiV1UserUserRelationListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserUserRelationListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserUserRelationDetail */
export interface PostApiV1UserUserRelationDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserRelationDetail */
export interface PostApiV1UserUserRelationDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserRelationDetailRequest: UserRelationDetailRequest;
  };
}

/** @description response type for postApiV1UserUserRelationDetail */
export interface PostApiV1UserUserRelationDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserRelationDetailResponse;
  };
}

export type PostApiV1UserUserRelationDetailResponseSuccess =
  PostApiV1UserUserRelationDetailResponse[200];
/**
 * @description
 *   获取用户关系详情
 * @tags 用户端-用户关系管理
 * @produces application/json
 */
export const postApiV1UserUserRelationDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/user/relation/detail";
  function request(
    option: PostApiV1UserUserRelationDetailOption
  ): Promise<PostApiV1UserUserRelationDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserUserRelationDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postApiV1UserSystemSettingList */
export interface PostApiV1UserSystemSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: SystemSettingListResponse;
  };
}

export type PostApiV1UserSystemSettingListResponseSuccess =
  PostApiV1UserSystemSettingListResponse[200];
/**
 * @description
 *   获取系统配置列表
 * @tags 用户端-系统配置管理
 * @produces application/json
 */
export const postApiV1UserSystemSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/system/setting/list";
  function request(): Promise<PostApiV1UserSystemSettingListResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<PostApiV1UserSystemSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserUserBalanceDetail */
export interface PostApiV1UserUserBalanceDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserBalanceDetail */
export interface PostApiV1UserUserBalanceDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserBalanceDetailRequest: UserBalanceDetailRequest;
  };
}

/** @description response type for postApiV1UserUserBalanceDetail */
export interface PostApiV1UserUserBalanceDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserBalanceDetailResponse;
  };
}

export type PostApiV1UserUserBalanceDetailResponseSuccess =
  PostApiV1UserUserBalanceDetailResponse[200];
/**
 * @description
 *   获取用户余额详情
 * @tags 用户端-用户余额管理
 * @produces application/json
 */
export const postApiV1UserUserBalanceDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/user/balance/detail";
  function request(
    option: PostApiV1UserUserBalanceDetailOption
  ): Promise<PostApiV1UserUserBalanceDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserUserBalanceDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserUserStatsSnapshotDetail */
export interface PostApiV1UserUserStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserStatsSnapshotDetail */
export interface PostApiV1UserUserStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsSnapshotDetailRequest: UserStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1UserUserStatsSnapshotDetail */
export interface PostApiV1UserUserStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsSnapshotDetailResponse;
  };
}

export type PostApiV1UserUserStatsSnapshotDetailResponseSuccess =
  PostApiV1UserUserStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取统计详情
 * @tags 用户端-统计管理
 * @produces application/json
 */
export const postApiV1UserUserStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/user/stats/snapshot/detail";
  function request(
    option: PostApiV1UserUserStatsSnapshotDetailOption
  ): Promise<PostApiV1UserUserStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserUserStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserCoinList */
export interface PostApiV1UserCoinListOption {
  /** @description */
  body: {
    /**
        @description */
    CoinListRequest1: CoinListRequest;
  };
}

/** @description response type for postApiV1UserCoinList */
export interface PostApiV1UserCoinListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: CoinListResponse;
  };
}

export type PostApiV1UserCoinListResponseSuccess =
  PostApiV1UserCoinListResponse[200];
/**
 * @description
 *   获取币种列表
 * @tags 用户端-币种管理
 * @produces application/json
 */
export const postApiV1UserCoinList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/coin/list";
  function request(
    option: PostApiV1UserCoinListOption
  ): Promise<PostApiV1UserCoinListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserCoinListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserWithdrawList */
export interface PostApiV1UserWithdrawListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserWithdrawList */
export interface PostApiV1UserWithdrawListOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderListRequest1: WithdrawOrderListRequest;
  };
}

/** @description response type for postApiV1UserWithdrawList */
export interface PostApiV1UserWithdrawListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WithdrawOrderListResponse;
  };
}

export type PostApiV1UserWithdrawListResponseSuccess =
  PostApiV1UserWithdrawListResponse[200];
/**
 * @description
 *   获取提现申请列表
 * @tags 用户端-提现申请管理
 * @produces application/json
 */
export const postApiV1UserWithdrawList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/withdraw/list";
  function request(
    option: PostApiV1UserWithdrawListOption
  ): Promise<PostApiV1UserWithdrawListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserWithdrawListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserWithdrawCreate */
export interface PostApiV1UserWithdrawCreateOption {
  header?: {
    Authorization?: string;
    "x-secret-code"?: string;
  };
}

/** @description request parameter type for postApiV1UserWithdrawCreate */
export interface PostApiV1UserWithdrawCreateOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderCreateRequest: WithdrawOrderCreateRequest;
  };
}

/** @description response type for postApiV1UserWithdrawCreate */
export interface PostApiV1UserWithdrawCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserWithdrawCreateResponseSuccess =
  PostApiV1UserWithdrawCreateResponse[200];
/**
 * @description
 *   创建提现申请
 * @tags 用户端-提现申请管理
 * @produces application/json
 */
export const postApiV1UserWithdrawCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/withdraw/create";
  function request(
    option: PostApiV1UserWithdrawCreateOption
  ): Promise<PostApiV1UserWithdrawCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserWithdrawCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserWithdrawCancel */
export interface PostApiV1UserWithdrawCancelOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserWithdrawCancel */
export interface PostApiV1UserWithdrawCancelOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawOrderCancelRequest: WithdrawOrderCancelRequest;
  };
}

/** @description response type for postApiV1UserWithdrawCancel */
export interface PostApiV1UserWithdrawCancelResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserWithdrawCancelResponseSuccess =
  PostApiV1UserWithdrawCancelResponse[200];
/**
 * @description
 *   取消提现申请
 * @tags 用户端-提现申请管理
 * @produces application/json
 */
export const postApiV1UserWithdrawCancel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/withdraw/cancel";
  function request(
    option: PostApiV1UserWithdrawCancelOption
  ): Promise<PostApiV1UserWithdrawCancelResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserWithdrawCancelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserUserBalanceRecordList */
export interface PostApiV1UserUserBalanceRecordListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserUserBalanceRecordList */
export interface PostApiV1UserUserBalanceRecordListOption {
  /** @description */
  body: {
    /**
        @description */
    UserBalanceRecordListRequest1: UserBalanceRecordListRequest;
  };
}

/** @description response type for postApiV1UserUserBalanceRecordList */
export interface PostApiV1UserUserBalanceRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserBalanceRecordListResponse;
  };
}

export type PostApiV1UserUserBalanceRecordListResponseSuccess =
  PostApiV1UserUserBalanceRecordListResponse[200];
/**
 * @description
 *   获取列表
 * @tags 用户端-用户资产记录管理
 * @produces application/json
 */
export const postApiV1UserUserBalanceRecordList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/user/balance/record/list";
  function request(
    option: PostApiV1UserUserBalanceRecordListOption
  ): Promise<PostApiV1UserUserBalanceRecordListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserUserBalanceRecordListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentUserList */
export interface PostApiV1AgentUserListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentUserList */
export interface PostApiV1AgentUserListOption {
  /** @description */
  body: {
    /**
        @description */
    UserListRequest: UserListRequest;
  };
}

/** @description response type for postApiV1AgentUserList */
export interface PostApiV1AgentUserListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserListResponse;
  };
}

export type PostApiV1AgentUserListResponseSuccess =
  PostApiV1AgentUserListResponse[200];
/**
 * @description
 *   获取用户列表
 * @tags 代理端-用户管理
 * @produces application/json
 */
export const postApiV1AgentUserList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/user/list";
  function request(
    option: PostApiV1AgentUserListOption
  ): Promise<PostApiV1AgentUserListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentUserListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentUserDetail */
export interface PostApiV1AgentUserDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentUserDetail */
export interface PostApiV1AgentUserDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserDetailRequest1: UserDetailRequest;
  };
}

/** @description response type for postApiV1AgentUserDetail */
export interface PostApiV1AgentUserDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserDetailResponse;
  };
}

export type PostApiV1AgentUserDetailResponseSuccess =
  PostApiV1AgentUserDetailResponse[200];
/**
 * @description
 *   获取用户详情
 * @tags 代理端-用户管理
 * @produces application/json
 */
export const postApiV1AgentUserDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/user/detail";
  function request(
    option: PostApiV1AgentUserDetailOption
  ): Promise<PostApiV1AgentUserDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentUserDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentStatsSnapshotDetail */
export interface PostApiV1AgentAgentStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentStatsSnapshotDetail */
export interface PostApiV1AgentAgentStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentStatsSnapshotDetailRequest1: AgentStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentStatsSnapshotDetail */
export interface PostApiV1AgentAgentStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentStatsSnapshotDetailResponse;
  };
}

export type PostApiV1AgentAgentStatsSnapshotDetailResponseSuccess =
  PostApiV1AgentAgentStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取统计详情
 * @tags 代理端-统计管理
 * @produces application/json
 */
export const postApiV1AgentAgentStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/stats/snapshot/detail";
  function request(
    option: PostApiV1AgentAgentStatsSnapshotDetailOption
  ): Promise<PostApiV1AgentAgentStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRoleList */
export interface PostApiV1AgentAgentRoleListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRoleList */
export interface PostApiV1AgentAgentRoleListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRoleListRequest: AgentRoleListRequest;
  };
}

/** @description response type for postApiV1AgentAgentRoleList */
export interface PostApiV1AgentAgentRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentRoleListResponse;
  };
}

export type PostApiV1AgentAgentRoleListResponseSuccess =
  PostApiV1AgentAgentRoleListResponse[200];
/**
 * @description
 *   获取代理角色列表
 * @tags 代理端-代理角色管理
 * @produces application/json
 */
export const postApiV1AgentAgentRoleList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/role/list";
  function request(
    option: PostApiV1AgentAgentRoleListOption
  ): Promise<PostApiV1AgentAgentRoleListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRoleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRoleCreate */
export interface PostApiV1AgentAgentRoleCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRoleCreate */
export interface PostApiV1AgentAgentRoleCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRoleCreateRequest: AgentRoleCreateRequest;
  };
}

/** @description response type for postApiV1AgentAgentRoleCreate */
export interface PostApiV1AgentAgentRoleCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentRoleCreateResponseSuccess =
  PostApiV1AgentAgentRoleCreateResponse[200];
/**
 * @description
 *   创建代理角色
 * @tags 代理端-代理角色管理
 * @produces application/json
 */
export const postApiV1AgentAgentRoleCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/role/create";
  function request(
    option: PostApiV1AgentAgentRoleCreateOption
  ): Promise<PostApiV1AgentAgentRoleCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRoleCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRoleModify */
export interface PostApiV1AgentAgentRoleModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRoleModify */
export interface PostApiV1AgentAgentRoleModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRoleModifyRequest: AgentRoleModifyRequest;
  };
}

/** @description response type for postApiV1AgentAgentRoleModify */
export interface PostApiV1AgentAgentRoleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentRoleModifyResponseSuccess =
  PostApiV1AgentAgentRoleModifyResponse[200];
/**
 * @description
 *   更新代理角色
 * @tags 代理端-代理角色管理
 * @produces application/json
 */
export const postApiV1AgentAgentRoleModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/role/modify";
  function request(
    option: PostApiV1AgentAgentRoleModifyOption
  ): Promise<PostApiV1AgentAgentRoleModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRoleModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRoleRemove */
export interface PostApiV1AgentAgentRoleRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRoleRemove */
export interface PostApiV1AgentAgentRoleRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRoleRemoveRequest: AgentRoleRemoveRequest;
  };
}

/** @description response type for postApiV1AgentAgentRoleRemove */
export interface PostApiV1AgentAgentRoleRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentRoleRemoveResponseSuccess =
  PostApiV1AgentAgentRoleRemoveResponse[200];
/**
 * @description
 *   删除代理角色
 * @tags 代理端-代理角色管理
 * @produces application/json
 */
export const postApiV1AgentAgentRoleRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/role/remove";
  function request(
    option: PostApiV1AgentAgentRoleRemoveOption
  ): Promise<PostApiV1AgentAgentRoleRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRoleRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRoleDetail */
export interface PostApiV1AgentAgentRoleDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRoleDetail */
export interface PostApiV1AgentAgentRoleDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRoleDetailRequest: AgentRoleDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentRoleDetail */
export interface PostApiV1AgentAgentRoleDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentRoleDetailResponse;
  };
}

export type PostApiV1AgentAgentRoleDetailResponseSuccess =
  PostApiV1AgentAgentRoleDetailResponse[200];
/**
 * @description
 *   获取代理角色详情
 * @tags 代理端-代理角色管理
 * @produces application/json
 */
export const postApiV1AgentAgentRoleDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/role/detail";
  function request(
    option: PostApiV1AgentAgentRoleDetailOption
  ): Promise<PostApiV1AgentAgentRoleDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRoleDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentOrderList */
export interface PostApiV1AgentOrderListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentOrderList */
export interface PostApiV1AgentOrderListOption {
  /** @description */
  body: {
    /**
        @description */
    OrderListRequest: OrderListRequest;
  };
}

/** @description response type for postApiV1AgentOrderList */
export interface PostApiV1AgentOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderListResponse;
  };
}

export type PostApiV1AgentOrderListResponseSuccess =
  PostApiV1AgentOrderListResponse[200];
/**
 * @description
 *   获取订单列表
 * @tags 代理端-订单管理
 * @produces application/json
 */
export const postApiV1AgentOrderList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/order/list";
  function request(
    option: PostApiV1AgentOrderListOption
  ): Promise<PostApiV1AgentOrderListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentOrderListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentOrderDetail */
export interface PostApiV1AgentOrderDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentOrderDetail */
export interface PostApiV1AgentOrderDetailOption {
  /** @description */
  body: {
    /**
        @description */
    OrderDetailRequest: OrderDetailRequest;
  };
}

/** @description response type for postApiV1AgentOrderDetail */
export interface PostApiV1AgentOrderDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderDetailResponse;
  };
}

export type PostApiV1AgentOrderDetailResponseSuccess =
  PostApiV1AgentOrderDetailResponse[200];
/**
 * @description
 *   获取订单详情
 * @tags 代理端-订单管理
 * @produces application/json
 */
export const postApiV1AgentOrderDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/order/detail";
  function request(
    option: PostApiV1AgentOrderDetailOption
  ): Promise<PostApiV1AgentOrderDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentOrderDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRelationDetail */
export interface PostApiV1AgentAgentRelationDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRelationDetail */
export interface PostApiV1AgentAgentRelationDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRelationDetailRequest: AgentRelationDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentRelationDetail */
export interface PostApiV1AgentAgentRelationDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentRelationDetailResponse;
  };
}

export type PostApiV1AgentAgentRelationDetailResponseSuccess =
  PostApiV1AgentAgentRelationDetailResponse[200];
/**
 * @description
 *   获取代理关系详情
 * @tags 代理端-代理关系管理
 * @produces application/json
 */
export const postApiV1AgentAgentRelationDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/relation/detail";
  function request(
    option: PostApiV1AgentAgentRelationDetailOption
  ): Promise<PostApiV1AgentAgentRelationDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRelationDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentUserStatsSnapshotDetail */
export interface PostApiV1AgentUserStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentUserStatsSnapshotDetail */
export interface PostApiV1AgentUserStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsSnapshotDetailRequest1: UserStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AgentUserStatsSnapshotDetail */
export interface PostApiV1AgentUserStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsSnapshotDetailResponse;
  };
}

export type PostApiV1AgentUserStatsSnapshotDetailResponseSuccess =
  PostApiV1AgentUserStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取统计详情
 * @tags 代理端-用户统计管理
 * @produces application/json
 */
export const postApiV1AgentUserStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/userStatsSnapshot/detail";
  function request(
    option: PostApiV1AgentUserStatsSnapshotDetailOption
  ): Promise<PostApiV1AgentUserStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentUserStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentCoinList */
export interface PostApiV1AgentCoinListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentCoinList */
export interface PostApiV1AgentCoinListOption {
  /** @description */
  body: {
    /**
        @description */
    CoinListRequest2: CoinListRequest;
  };
}

/** @description response type for postApiV1AgentCoinList */
export interface PostApiV1AgentCoinListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: CoinListResponse;
  };
}

export type PostApiV1AgentCoinListResponseSuccess =
  PostApiV1AgentCoinListResponse[200];
/**
 * @description
 *   获取币种列表
 * @tags 代理端-币种管理
 * @produces application/json
 */
export const postApiV1AgentCoinList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/coin/list";
  function request(
    option: PostApiV1AgentCoinListOption
  ): Promise<PostApiV1AgentCoinListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentCoinListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentStatsDailySnapshotDetail */
export interface PostApiV1AgentAgentStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentStatsDailySnapshotDetail */
export interface PostApiV1AgentAgentStatsDailySnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentStatsDailySnapshotDetailRequest: AgentStatsDailySnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentStatsDailySnapshotDetail */
export interface PostApiV1AgentAgentStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentStatsDailySnapshotDetailResponse;
  };
}

export type PostApiV1AgentAgentStatsDailySnapshotDetailResponseSuccess =
  PostApiV1AgentAgentStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取汇总统计详情
 * @tags 代理端-汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentAgentStatsDailySnapshotDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/agent/stats/daily/snapshot/detail";
    function request(
      option: PostApiV1AgentAgentStatsDailySnapshotDetailOption
    ): Promise<PostApiV1AgentAgentStatsDailySnapshotDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentAgentStatsDailySnapshotDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description response type for postApiV1AgentAgentPermissionList */
export interface PostApiV1AgentAgentPermissionListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentPermissionListResponse;
  };
}

export type PostApiV1AgentAgentPermissionListResponseSuccess =
  PostApiV1AgentAgentPermissionListResponse[200];
/**
 * @description
 *   获取代理权限列表
 * @tags 代理端-代理权限管理
 * @produces application/json
 */
export const postApiV1AgentAgentPermissionList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/permission/list";
  function request(): Promise<PostApiV1AgentAgentPermissionListResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<PostApiV1AgentAgentPermissionListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentAccountList */
export interface PostApiV1AgentAgentAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentAccountList */
export interface PostApiV1AgentAgentAccountListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountListRequest1: AgentAccountListRequest;
  };
}

/** @description response type for postApiV1AgentAgentAccountList */
export interface PostApiV1AgentAgentAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentAccountListResponse;
  };
}

export type PostApiV1AgentAgentAccountListResponseSuccess =
  PostApiV1AgentAgentAccountListResponse[200];
/**
 * @description
 *   获取代理账号列表
 * @tags 代理端-代理账号管理
 * @produces application/json
 */
export const postApiV1AgentAgentAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/account/list";
  function request(
    option: PostApiV1AgentAgentAccountListOption
  ): Promise<PostApiV1AgentAgentAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentAccountCreate */
export interface PostApiV1AgentAgentAccountCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentAccountCreate */
export interface PostApiV1AgentAgentAccountCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountCreateRequest: AgentAccountCreateRequest;
  };
}

/** @description response type for postApiV1AgentAgentAccountCreate */
export interface PostApiV1AgentAgentAccountCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentAccountCreateResponseSuccess =
  PostApiV1AgentAgentAccountCreateResponse[200];
/**
 * @description
 *   创建代理账号
 * @tags 代理端-代理账号管理
 * @produces application/json
 */
export const postApiV1AgentAgentAccountCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/account/create";
  function request(
    option: PostApiV1AgentAgentAccountCreateOption
  ): Promise<PostApiV1AgentAgentAccountCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentAccountCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentAccountModify */
export interface PostApiV1AgentAgentAccountModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentAccountModify */
export interface PostApiV1AgentAgentAccountModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountModifyRequest: AgentAccountModifyRequest;
  };
}

/** @description response type for postApiV1AgentAgentAccountModify */
export interface PostApiV1AgentAgentAccountModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentAccountModifyResponseSuccess =
  PostApiV1AgentAgentAccountModifyResponse[200];
/**
 * @description
 *   更新代理账号
 * @tags 代理端-代理账号管理
 * @produces application/json
 */
export const postApiV1AgentAgentAccountModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/account/modify";
  function request(
    option: PostApiV1AgentAgentAccountModifyOption
  ): Promise<PostApiV1AgentAgentAccountModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentAccountModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentAccountRemove */
export interface PostApiV1AgentAgentAccountRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentAccountRemove */
export interface PostApiV1AgentAgentAccountRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountRemoveRequest: AgentAccountRemoveRequest;
  };
}

/** @description response type for postApiV1AgentAgentAccountRemove */
export interface PostApiV1AgentAgentAccountRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentAccountRemoveResponseSuccess =
  PostApiV1AgentAgentAccountRemoveResponse[200];
/**
 * @description
 *   删除代理账号
 * @tags 代理端-代理账号管理
 * @produces application/json
 */
export const postApiV1AgentAgentAccountRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/account/remove";
  function request(
    option: PostApiV1AgentAgentAccountRemoveOption
  ): Promise<PostApiV1AgentAgentAccountRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentAccountRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentAccountDetail */
export interface PostApiV1AgentAgentAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentAccountDetail */
export interface PostApiV1AgentAgentAccountDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentAccountDetailRequest1: AgentAccountDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentAccountDetail */
export interface PostApiV1AgentAgentAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentAccountDetailResponse;
  };
}

export type PostApiV1AgentAgentAccountDetailResponseSuccess =
  PostApiV1AgentAgentAccountDetailResponse[200];
/**
 * @description
 *   获取代理账号详情
 * @tags 代理端-代理账号管理
 * @produces application/json
 */
export const postApiV1AgentAgentAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/account/detail";
  function request(
    option: PostApiV1AgentAgentAccountDetailOption
  ): Promise<PostApiV1AgentAgentAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentProfileLogin */
export interface PostApiV1AgentProfileLoginOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentProfileLogin */
export interface PostApiV1AgentProfileLoginOption {
  /** @description */
  body: {
    /**
        @description */
    ProfileLoginRequest: ProfileLoginRequest;
  };
}

/** @description response type for postApiV1AgentProfileLogin */
export interface PostApiV1AgentProfileLoginResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ProfileLoginResponse;
  };
}

export type PostApiV1AgentProfileLoginResponseSuccess =
  PostApiV1AgentProfileLoginResponse[200];
/**
 * @description
 *   登录
 * @tags 代理端-Profile
 * @produces application/json
 */
export const postApiV1AgentProfileLogin = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/profile/login";
  function request(
    option: PostApiV1AgentProfileLoginOption
  ): Promise<PostApiV1AgentProfileLoginResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentProfileLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentProfileDetail */
export interface PostApiV1AgentProfileDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentProfileDetail */
export interface PostApiV1AgentProfileDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentAccountDetailResponse;
  };
}

export type PostApiV1AgentProfileDetailResponseSuccess =
  PostApiV1AgentProfileDetailResponse[200];
/**
 * @description
 *   获取当前登录账号详情
 * @tags 代理端-Profile
 * @produces application/json
 */
export const postApiV1AgentProfileDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/profile/detail";
  function request(
    option?: PostApiV1AgentProfileDetailOption
  ): Promise<PostApiV1AgentProfileDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentProfileDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentProfilePasswordChange */
export interface PostApiV1AgentProfilePasswordChangeOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentProfilePasswordChange */
export interface PostApiV1AgentProfilePasswordChangeOption {
  /** @description */
  body: {
    /**
        @description */
    ProfileChangePasswordRequest: ProfileChangePasswordRequest;
  };
}

/** @description response type for postApiV1AgentProfilePasswordChange */
export interface PostApiV1AgentProfilePasswordChangeResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentProfilePasswordChangeResponseSuccess =
  PostApiV1AgentProfilePasswordChangeResponse[200];
/**
 * @description
 *   修改当前账号登录密码
 * @tags 代理端-Profile
 * @produces application/json
 */
export const postApiV1AgentProfilePasswordChange = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/profile/password/change";
  function request(
    option: PostApiV1AgentProfilePasswordChangeOption
  ): Promise<PostApiV1AgentProfilePasswordChangeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentProfilePasswordChangeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentBonusRecordList */
export interface PostApiV1AgentAgentBonusRecordListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentBonusRecordList */
export interface PostApiV1AgentAgentBonusRecordListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentBonusRecordListRequest: AgentBonusRecordListRequest;
  };
}

/** @description response type for postApiV1AgentAgentBonusRecordList */
export interface PostApiV1AgentAgentBonusRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentBonusRecordListResponse;
  };
}

export type PostApiV1AgentAgentBonusRecordListResponseSuccess =
  PostApiV1AgentAgentBonusRecordListResponse[200];
/**
 * @description
 *   获取代理分红记录列表
 * @tags 代理端-代理分红记录管理
 * @produces application/json
 */
export const postApiV1AgentAgentBonusRecordList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/bonus/record/list";
  function request(
    option: PostApiV1AgentAgentBonusRecordListOption
  ): Promise<PostApiV1AgentAgentBonusRecordListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentBonusRecordListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentBonusRecordList */
export interface PostApiV1AdminAgentBonusRecordListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentBonusRecordList */
export interface PostApiV1AdminAgentBonusRecordListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentBonusRecordListRequest: AgentBonusRecordListRequest;
  };
}

/** @description response type for postApiV1AdminAgentBonusRecordList */
export interface PostApiV1AdminAgentBonusRecordListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentBonusRecordListResponse;
  };
}

export type PostApiV1AdminAgentBonusRecordListResponseSuccess =
  PostApiV1AdminAgentBonusRecordListResponse[200];
/**
 * @description
 *   获取代理分红记录列表
 * @tags 总管理后台-代理分红记录管理
 * @produces application/json
 */
export const postApiV1AdminAgentBonusRecordList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/bonus/record/list";
  function request(
    option: PostApiV1AdminAgentBonusRecordListOption
  ): Promise<PostApiV1AdminAgentBonusRecordListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentBonusRecordListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1InnerOrderWithdrawCallback */
export interface PostApiV1InnerOrderWithdrawCallbackOption {
  /** @description */
  body: {
    /**
        @description */
    WithdrawCallbackRequest: WithdrawCallbackRequest;
  };
}

/** @description response type for postApiV1InnerOrderWithdrawCallback */
export interface PostApiV1InnerOrderWithdrawCallbackResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ResponseInterface;
  };
}

export type PostApiV1InnerOrderWithdrawCallbackResponseSuccess =
  PostApiV1InnerOrderWithdrawCallbackResponse[200];
/**
 * @description
 *   转出完成通知
 * @tags 内部接口-订单
 * @produces application/json
 */
export const postApiV1InnerOrderWithdrawCallback = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/inner/order/withdraw/callback";
  function request(
    option: PostApiV1InnerOrderWithdrawCallbackOption
  ): Promise<PostApiV1InnerOrderWithdrawCallbackResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1InnerOrderWithdrawCallbackResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1InnerOrderChargeCallback */
export interface PostApiV1InnerOrderChargeCallbackOption {
  /** @description */
  body: {
    /**
        @description */
    ChargeCallbackRequest: ChargeCallbackRequest;
  };
}

/** @description response type for postApiV1InnerOrderChargeCallback */
export interface PostApiV1InnerOrderChargeCallbackResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ResponseInterface;
  };
}

export type PostApiV1InnerOrderChargeCallbackResponseSuccess =
  PostApiV1InnerOrderChargeCallbackResponse[200];
/**
 * @description
 *   充值回调
 * @tags 内部接口-订单
 * @produces application/json
 */
export const postApiV1InnerOrderChargeCallback = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/inner/order/charge/callback";
  function request(
    option: PostApiV1InnerOrderChargeCallbackOption
  ): Promise<PostApiV1InnerOrderChargeCallbackResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1InnerOrderChargeCallbackResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserList */
export interface PostApiV1AdminUserListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserList */
export interface PostApiV1AdminUserListOption {
  /** @description */
  body: {
    /**
        @description */
    UserListRequest1: UserListRequest;
  };
}

/** @description response type for postApiV1AdminUserList */
export interface PostApiV1AdminUserListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserListResponse;
  };
}

export type PostApiV1AdminUserListResponseSuccess =
  PostApiV1AdminUserListResponse[200];
/**
 * @description
 *   获取用户列表
 * @tags 总管理后台-用户管理
 * @produces application/json
 */
export const postApiV1AdminUserList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/list";
  function request(
    option: PostApiV1AdminUserListOption
  ): Promise<PostApiV1AdminUserListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserReset */
export interface PostApiV1AdminUserResetOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserReset */
export interface PostApiV1AdminUserResetOption {
  /** @description */
  body: {
    /**
        @description */
    UserResetRequest: UserResetRequest;
  };
}

/** @description response type for postApiV1AdminUserReset */
export interface PostApiV1AdminUserResetResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminUserResetResponseSuccess =
  PostApiV1AdminUserResetResponse[200];
/**
 * @description
 *   重置用户
 * @tags 总管理后台-用户管理
 * @produces application/json
 */
export const postApiV1AdminUserReset = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/reset";
  function request(
    option: PostApiV1AdminUserResetOption
  ): Promise<PostApiV1AdminUserResetResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserResetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserTodayStats */
export interface PostApiV1AdminUserTodayStatsOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserTodayStats */
export interface PostApiV1AdminUserTodayStatsOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsSnapshotDetailRequest2: UserStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminUserTodayStats */
export interface PostApiV1AdminUserTodayStatsResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsSnapshotDetailResponse;
  };
}

export type PostApiV1AdminUserTodayStatsResponseSuccess =
  PostApiV1AdminUserTodayStatsResponse[200];
/**
 * @description
 *   获取用户今日统计
 * @tags 总管理后台-用户管理
 * @produces application/json
 */
export const postApiV1AdminUserTodayStats = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/today/stats";
  function request(
    option: PostApiV1AdminUserTodayStatsOption
  ): Promise<PostApiV1AdminUserTodayStatsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserTodayStatsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminUserTotalStats */
export interface PostApiV1AdminUserTotalStatsOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserTotalStats */
export interface PostApiV1AdminUserTotalStatsOption {
  /** @description */
  body: {
    /**
        @description */
    UserStatsDailySnapshotDetailRequest1: UserStatsDailySnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminUserTotalStats */
export interface PostApiV1AdminUserTotalStatsResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: UserStatsDailySnapshotDetailResponse;
  };
}

export type PostApiV1AdminUserTotalStatsResponseSuccess =
  PostApiV1AdminUserTotalStatsResponse[200];
/**
 * @description
 *   获取用户累计统计
 * @tags 总管理后台-用户管理
 * @produces application/json
 */
export const postApiV1AdminUserTotalStats = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/total/stats";
  function request(
    option: PostApiV1AdminUserTotalStatsOption
  ): Promise<PostApiV1AdminUserTotalStatsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserTotalStatsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentList */
export interface PostApiV1AdminAgentListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentList */
export interface PostApiV1AdminAgentListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentListRequest: AgentListRequest;
  };
}

/** @description response type for postApiV1AdminAgentList */
export interface PostApiV1AdminAgentListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentListResponse;
  };
}

export type PostApiV1AdminAgentListResponseSuccess =
  PostApiV1AdminAgentListResponse[200];
/**
 * @description
 *   获取代理列表
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/list";
  function request(
    option: PostApiV1AdminAgentListOption
  ): Promise<PostApiV1AdminAgentListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentCreate */
export interface PostApiV1AdminAgentCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentCreate */
export interface PostApiV1AdminAgentCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AgentCreateRequest: AgentCreateRequest;
  };
}

/** @description response type for postApiV1AdminAgentCreate */
export interface PostApiV1AdminAgentCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAgentCreateResponseSuccess =
  PostApiV1AdminAgentCreateResponse[200];
/**
 * @description
 *   创建代理
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/create";
  function request(
    option: PostApiV1AdminAgentCreateOption
  ): Promise<PostApiV1AdminAgentCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentModify */
export interface PostApiV1AdminAgentModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentModify */
export interface PostApiV1AdminAgentModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AgentModifyRequest: AgentModifyRequest;
  };
}

/** @description response type for postApiV1AdminAgentModify */
export interface PostApiV1AdminAgentModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAgentModifyResponseSuccess =
  PostApiV1AdminAgentModifyResponse[200];
/**
 * @description
 *   更新代理
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/modify";
  function request(
    option: PostApiV1AdminAgentModifyOption
  ): Promise<PostApiV1AdminAgentModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentRemove */
export interface PostApiV1AdminAgentRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentRemove */
export interface PostApiV1AdminAgentRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRemoveRequest: AgentRemoveRequest;
  };
}

/** @description response type for postApiV1AdminAgentRemove */
export interface PostApiV1AdminAgentRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAgentRemoveResponseSuccess =
  PostApiV1AdminAgentRemoveResponse[200];
/**
 * @description
 *   删除代理
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/remove";
  function request(
    option: PostApiV1AdminAgentRemoveOption
  ): Promise<PostApiV1AdminAgentRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentDetail */
export interface PostApiV1AdminAgentDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentDetail */
export interface PostApiV1AdminAgentDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentDetailRequest: AgentDetailRequest;
  };
}

/** @description response type for postApiV1AdminAgentDetail */
export interface PostApiV1AdminAgentDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentDetailResponse;
  };
}

export type PostApiV1AdminAgentDetailResponseSuccess =
  PostApiV1AdminAgentDetailResponse[200];
/**
 * @description
 *   获取代理详情
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/detail";
  function request(
    option: PostApiV1AdminAgentDetailOption
  ): Promise<PostApiV1AdminAgentDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentReset */
export interface PostApiV1AdminAgentResetOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentReset */
export interface PostApiV1AdminAgentResetOption {
  /** @description */
  body: {
    /**
        @description */
    AgentResetRequest: AgentResetRequest;
  };
}

/** @description response type for postApiV1AdminAgentReset */
export interface PostApiV1AdminAgentResetResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAgentResetResponseSuccess =
  PostApiV1AdminAgentResetResponse[200];
/**
 * @description
 *   重置代理账号
 * @tags 总管理后台-代理管理
 * @produces application/json
 */
export const postApiV1AdminAgentReset = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/reset";
  function request(
    option: PostApiV1AdminAgentResetOption
  ): Promise<PostApiV1AdminAgentResetResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentResetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1TestStatsAgentStats */
export interface PostApiV1TestStatsAgentStatsOption {
  /** @description */
  body: {
    /**
        @description */
    GenerateAgentStatsRequest: GenerateAgentStatsRequest;
  };
}

/** @description response type for postApiV1TestStatsAgentStats */
export interface PostApiV1TestStatsAgentStatsResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1TestStatsAgentStatsResponseSuccess =
  PostApiV1TestStatsAgentStatsResponse[200];
/**
 * @description
 *   生成代理统计
 * @tags 测试接口-统计管理
 * @produces application/json
 */
export const postApiV1TestStatsAgentStats = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/test/stats/agent/stats";
  function request(
    option: PostApiV1TestStatsAgentStatsOption
  ): Promise<PostApiV1TestStatsAgentStatsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1TestStatsAgentStatsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentList */
export interface PostApiV1AgentAgentListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentList */
export interface PostApiV1AgentAgentListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentListRequest1: AgentListRequest;
  };
}

/** @description response type for postApiV1AgentAgentList */
export interface PostApiV1AgentAgentListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentListResponse;
  };
}

export type PostApiV1AgentAgentListResponseSuccess =
  PostApiV1AgentAgentListResponse[200];
/**
 * @description
 *   获取代理列表
 * @tags 代理端-子代理管理
 * @produces application/json
 */
export const postApiV1AgentAgentList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/list";
  function request(
    option: PostApiV1AgentAgentListOption
  ): Promise<PostApiV1AgentAgentListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentCreate */
export interface PostApiV1AgentAgentCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentCreate */
export interface PostApiV1AgentAgentCreateOption {
  /** @description */
  body: {
    /**
        @description */
    AgentCreateRequest1: AgentCreateRequest;
  };
}

/** @description response type for postApiV1AgentAgentCreate */
export interface PostApiV1AgentAgentCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentCreateResponseSuccess =
  PostApiV1AgentAgentCreateResponse[200];
/**
 * @description
 *   创建代理
 * @tags 代理端-子代理管理
 * @produces application/json
 */
export const postApiV1AgentAgentCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/create";
  function request(
    option: PostApiV1AgentAgentCreateOption
  ): Promise<PostApiV1AgentAgentCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentModify */
export interface PostApiV1AgentAgentModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentModify */
export interface PostApiV1AgentAgentModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AgentModifyRequest1: AgentModifyRequest;
  };
}

/** @description response type for postApiV1AgentAgentModify */
export interface PostApiV1AgentAgentModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentModifyResponseSuccess =
  PostApiV1AgentAgentModifyResponse[200];
/**
 * @description
 *   更新代理
 * @tags 代理端-子代理管理
 * @produces application/json
 */
export const postApiV1AgentAgentModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/modify";
  function request(
    option: PostApiV1AgentAgentModifyOption
  ): Promise<PostApiV1AgentAgentModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentRemove */
export interface PostApiV1AgentAgentRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentRemove */
export interface PostApiV1AgentAgentRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    AgentRemoveRequest1: AgentRemoveRequest;
  };
}

/** @description response type for postApiV1AgentAgentRemove */
export interface PostApiV1AgentAgentRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentAgentRemoveResponseSuccess =
  PostApiV1AgentAgentRemoveResponse[200];
/**
 * @description
 *   删除代理
 * @tags 代理端-子代理管理
 * @produces application/json
 */
export const postApiV1AgentAgentRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/remove";
  function request(
    option: PostApiV1AgentAgentRemoveOption
  ): Promise<PostApiV1AgentAgentRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentDetail */
export interface PostApiV1AgentAgentDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentDetail */
export interface PostApiV1AgentAgentDetailOption {
  /** @description */
  body: {
    /**
        @description */
    AgentDetailRequest1: AgentDetailRequest;
  };
}

/** @description response type for postApiV1AgentAgentDetail */
export interface PostApiV1AgentAgentDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentDetailResponse;
  };
}

export type PostApiV1AgentAgentDetailResponseSuccess =
  PostApiV1AgentAgentDetailResponse[200];
/**
 * @description
 *   获取代理详情
 * @tags 代理端-子代理管理
 * @produces application/json
 */
export const postApiV1AgentAgentDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/detail";
  function request(
    option: PostApiV1AgentAgentDetailOption
  ): Promise<PostApiV1AgentAgentDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentGameList */
export interface PostApiV1AgentGameListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentGameList */
export interface PostApiV1AgentGameListOption {
  /** @description */
  body: {
    /**
        @description */
    GameListRequest1: GameListRequest;
  };
}

/** @description response type for postApiV1AgentGameList */
export interface PostApiV1AgentGameListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: GameListResponse;
  };
}

export type PostApiV1AgentGameListResponseSuccess =
  PostApiV1AgentGameListResponse[200];
/**
 * @description
 *   获取游戏列表
 * @tags 代理端-游戏管理
 * @produces application/json
 */
export const postApiV1AgentGameList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/game/list";
  function request(
    option: PostApiV1AgentGameListOption
  ): Promise<PostApiV1AgentGameListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentGameListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminBlacklistList */
export interface PostApiV1AdminBlacklistListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminBlacklistList */
export interface PostApiV1AdminBlacklistListOption {
  /** @description */
  body: {
    /**
        @description */
    BlacklistListRequest: BlacklistListRequest;
  };
}

/** @description response type for postApiV1AdminBlacklistList */
export interface PostApiV1AdminBlacklistListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BlacklistListResponse;
  };
}

export type PostApiV1AdminBlacklistListResponseSuccess =
  PostApiV1AdminBlacklistListResponse[200];
/**
 * @description
 *   获取黑名单列表
 * @tags 总管理后台-黑名单管理
 * @produces application/json
 */
export const postApiV1AdminBlacklistList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/blacklist/list";
  function request(
    option: PostApiV1AdminBlacklistListOption
  ): Promise<PostApiV1AdminBlacklistListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminBlacklistListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminBlacklistCreate */
export interface PostApiV1AdminBlacklistCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminBlacklistCreate */
export interface PostApiV1AdminBlacklistCreateOption {
  /** @description */
  body: {
    /**
        @description */
    BlacklistCreateRequest: BlacklistCreateRequest;
  };
}

/** @description response type for postApiV1AdminBlacklistCreate */
export interface PostApiV1AdminBlacklistCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminBlacklistCreateResponseSuccess =
  PostApiV1AdminBlacklistCreateResponse[200];
/**
 * @description
 *   创建黑名单
 * @tags 总管理后台-黑名单管理
 * @produces application/json
 */
export const postApiV1AdminBlacklistCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/blacklist/create";
  function request(
    option: PostApiV1AdminBlacklistCreateOption
  ): Promise<PostApiV1AdminBlacklistCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminBlacklistCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminBlacklistRemove */
export interface PostApiV1AdminBlacklistRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminBlacklistRemove */
export interface PostApiV1AdminBlacklistRemoveOption {
  /** @description */
  body: {
    /**
        @description */
    BlacklistRemoveRequest: BlacklistRemoveRequest;
  };
}

/** @description response type for postApiV1AdminBlacklistRemove */
export interface PostApiV1AdminBlacklistRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminBlacklistRemoveResponseSuccess =
  PostApiV1AdminBlacklistRemoveResponse[200];
/**
 * @description
 *   删除黑名单
 * @tags 总管理后台-黑名单管理
 * @produces application/json
 */
export const postApiV1AdminBlacklistRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/blacklist/remove";
  function request(
    option: PostApiV1AdminBlacklistRemoveOption
  ): Promise<PostApiV1AdminBlacklistRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminBlacklistRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentSettingList */
export interface PostApiV1AdminAgentSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentSettingList */
export interface PostApiV1AdminAgentSettingListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentSettingListRequest: AgentSettingListRequest;
  };
}

/** @description response type for postApiV1AdminAgentSettingList */
export interface PostApiV1AdminAgentSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentSettingListResponse;
  };
}

export type PostApiV1AdminAgentSettingListResponseSuccess =
  PostApiV1AdminAgentSettingListResponse[200];
/**
 * @description
 *   获取代理配置列表
 * @tags 总管理后台-代理配置管理
 * @produces application/json
 */
export const postApiV1AdminAgentSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/setting/list";
  function request(
    option: PostApiV1AdminAgentSettingListOption
  ): Promise<PostApiV1AdminAgentSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentSettingModify */
export interface PostApiV1AdminAgentSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentSettingModify */
export interface PostApiV1AdminAgentSettingModifyOption {
  /** @description */
  body: {
    /**
        @description */
    AgentSettingModifyRequest: AgentSettingModifyRequest;
  };
}

/** @description response type for postApiV1AdminAgentSettingModify */
export interface PostApiV1AdminAgentSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminAgentSettingModifyResponseSuccess =
  PostApiV1AdminAgentSettingModifyResponse[200];
/**
 * @description
 *   更新代理配置
 * @tags 总管理后台-代理配置管理
 * @produces application/json
 */
export const postApiV1AdminAgentSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/setting/modify";
  function request(
    option: PostApiV1AdminAgentSettingModifyOption
  ): Promise<PostApiV1AdminAgentSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminAgentSettingGameList */
export interface PostApiV1AdminAgentSettingGameListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentSettingGameList */
export interface PostApiV1AdminAgentSettingGameListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentGameListRequest: AgentGameListRequest;
  };
}

/** @description response type for postApiV1AdminAgentSettingGameList */
export interface PostApiV1AdminAgentSettingGameListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: GameListResponse;
  };
}

export type PostApiV1AdminAgentSettingGameListResponseSuccess =
  PostApiV1AdminAgentSettingGameListResponse[200];
/**
 * @description
 *   获取游戏列表
 * @tags 总管理后台-代理配置管理
 * @produces application/json
 */
export const postApiV1AdminAgentSettingGameList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/setting/game/list";
  function request(
    option: PostApiV1AdminAgentSettingGameListOption
  ): Promise<PostApiV1AdminAgentSettingGameListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentSettingGameListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStatsSnapshotDetail */
export interface PostApiV1AdminStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStatsSnapshotDetail */
export interface PostApiV1AdminStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    StatsSnapshotDetailRequest: StatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminStatsSnapshotDetail */
export interface PostApiV1AdminStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StatsSnapshotDetailResponse;
  };
}

export type PostApiV1AdminStatsSnapshotDetailResponseSuccess =
  PostApiV1AdminStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取统计详情
 * @tags 总管理后台-统计管理
 * @produces application/json
 */
export const postApiV1AdminStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/stats/snapshot/detail";
  function request(
    option: PostApiV1AdminStatsSnapshotDetailOption
  ): Promise<PostApiV1AdminStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStatsSnapshotBalance */
export interface PostApiV1AdminStatsSnapshotBalanceOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStatsSnapshotBalance */
export interface PostApiV1AdminStatsSnapshotBalanceResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: WalletBalanceResponse;
  };
}

export type PostApiV1AdminStatsSnapshotBalanceResponseSuccess =
  PostApiV1AdminStatsSnapshotBalanceResponse[200];
/**
 * @description
 *   获取手续费以及派奖地址余额
 * @tags 总管理后台-统计管理
 * @produces application/json
 */
export const postApiV1AdminStatsSnapshotBalance = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/stats/snapshot/balance";
  function request(
    option?: PostApiV1AdminStatsSnapshotBalanceOption
  ): Promise<PostApiV1AdminStatsSnapshotBalanceResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStatsSnapshotBalanceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentAgentSettingList */
export interface PostApiV1AgentAgentSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AgentAgentSettingList */
export interface PostApiV1AgentAgentSettingListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentSettingListRequest1: AgentSettingListRequest;
  };
}

/** @description response type for postApiV1AgentAgentSettingList */
export interface PostApiV1AgentAgentSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: AgentSettingListResponse;
  };
}

export type PostApiV1AgentAgentSettingListResponseSuccess =
  PostApiV1AgentAgentSettingListResponse[200];
/**
 * @description
 *   获取代理配置列表
 * @tags 代理端-代理配置管理
 * @produces application/json
 */
export const postApiV1AgentAgentSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/agent/setting/list";
  function request(
    option: PostApiV1AgentAgentSettingListOption
  ): Promise<PostApiV1AgentAgentSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentAgentSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminOrderList */
export interface PostApiV1AdminOrderListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderList */
export interface PostApiV1AdminOrderListOption {
  /** @description */
  body: {
    /**
        @description */
    OrderListRequest1: OrderListRequest;
  };
}

/** @description response type for postApiV1AdminOrderList */
export interface PostApiV1AdminOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderListResponse;
  };
}

export type PostApiV1AdminOrderListResponseSuccess =
  PostApiV1AdminOrderListResponse[200];
/**
 * @description
 *   获取订单列表
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/list";
  function request(
    option: PostApiV1AdminOrderListOption
  ): Promise<PostApiV1AdminOrderListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminOrderExport */
export interface PostApiV1AdminOrderExportOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderExport */
export interface PostApiV1AdminOrderExportOption {
  /** @description */
  body: {
    /**
        @description */
    OrderExportRequest: OrderExportRequest;
  };
}

/** @description response type for postApiV1AdminOrderExport */
export interface PostApiV1AdminOrderExportResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ResponseInterface;
  };
}

export type PostApiV1AdminOrderExportResponseSuccess =
  PostApiV1AdminOrderExportResponse[200];
/**
 * @description
 *   导出订单列表
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderExport = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/export";
  function request(
    option: PostApiV1AdminOrderExportOption
  ): Promise<PostApiV1AdminOrderExportResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderExportResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminOrderOpen */
export interface PostApiV1AdminOrderOpenOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderOpen */
export interface PostApiV1AdminOrderOpenOption {
  /** @description */
  body: {
    /**
        @description */
    OrderOpenRequest: OrderOpenRequest;
  };
}

/** @description response type for postApiV1AdminOrderOpen */
export interface PostApiV1AdminOrderOpenResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminOrderOpenResponseSuccess =
  PostApiV1AdminOrderOpenResponse[200];
/**
 * @description
 *   人工发奖
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderOpen = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/open";
  function request(
    option: PostApiV1AdminOrderOpenOption
  ): Promise<PostApiV1AdminOrderOpenResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderOpenResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminOrderReturn */
export interface PostApiV1AdminOrderReturnOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderReturn */
export interface PostApiV1AdminOrderReturnOption {
  /** @description */
  body: {
    /**
        @description */
    OrderOpenRequest: OrderOpenRequest;
  };
}

/** @description response type for postApiV1AdminOrderReturn */
export interface PostApiV1AdminOrderReturnResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminOrderReturnResponseSuccess =
  PostApiV1AdminOrderReturnResponse[200];
/**
 * @description
 *   人工退款
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderReturn = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/return";
  function request(
    option: PostApiV1AdminOrderReturnOption
  ): Promise<PostApiV1AdminOrderReturnResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderReturnResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminOrderDetail */
export interface PostApiV1AdminOrderDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderDetail */
export interface PostApiV1AdminOrderDetailOption {
  /** @description */
  body: {
    /**
        @description */
    OrderDetailRequest1: OrderDetailRequest;
  };
}

/** @description response type for postApiV1AdminOrderDetail */
export interface PostApiV1AdminOrderDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderDetailResponse;
  };
}

export type PostApiV1AdminOrderDetailResponseSuccess =
  PostApiV1AdminOrderDetailResponse[200];
/**
 * @description
 *   获取订单详情
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/detail";
  function request(
    option: PostApiV1AdminOrderDetailOption
  ): Promise<PostApiV1AdminOrderDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreSettingList */
export interface PostApiV1AdminStoreSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreSettingList */
export interface PostApiV1AdminStoreSettingListOption {
  /** @description */
  body: {
    /**
        @description */
    StoreSettingListRequest: StoreSettingListRequest;
  };
}

/** @description response type for postApiV1AdminStoreSettingList */
export interface PostApiV1AdminStoreSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreSettingListResponse;
  };
}

export type PostApiV1AdminStoreSettingListResponseSuccess =
  PostApiV1AdminStoreSettingListResponse[200];
/**
 * @description
 *   获取站点配置列表
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeSetting/list";
  function request(
    option: PostApiV1AdminStoreSettingListOption
  ): Promise<PostApiV1AdminStoreSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreSettingCreate */
export interface PostApiV1AdminStoreSettingCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreSettingCreate */
export interface PostApiV1AdminStoreSettingCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreSettingCreateResponseSuccess =
  PostApiV1AdminStoreSettingCreateResponse[200];
/**
 * @description
 *   创建站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeSetting/create";
  function request(
    option?: PostApiV1AdminStoreSettingCreateOption
  ): Promise<PostApiV1AdminStoreSettingCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreSettingCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreSettingModify */
export interface PostApiV1AdminStoreSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreSettingModify */
export interface PostApiV1AdminStoreSettingModifyOption {
  /** @description */
  body: {
    /**
        @description */
    StoreSettingModifyRequest: StoreSettingModifyRequest;
  };
}

/** @description response type for postApiV1AdminStoreSettingModify */
export interface PostApiV1AdminStoreSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreSettingModifyResponseSuccess =
  PostApiV1AdminStoreSettingModifyResponse[200];
/**
 * @description
 *   更新站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeSetting/modify";
  function request(
    option: PostApiV1AdminStoreSettingModifyOption
  ): Promise<PostApiV1AdminStoreSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreSettingRemove */
export interface PostApiV1AdminStoreSettingRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreSettingRemove */
export interface PostApiV1AdminStoreSettingRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreSettingRemoveResponseSuccess =
  PostApiV1AdminStoreSettingRemoveResponse[200];
/**
 * @description
 *   删除站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeSetting/remove";
  function request(
    option?: PostApiV1AdminStoreSettingRemoveOption
  ): Promise<PostApiV1AdminStoreSettingRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreSettingRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreSettingDetail */
export interface PostApiV1AdminStoreSettingDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreSettingDetail */
export interface PostApiV1AdminStoreSettingDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStoreSettingDetailResponseSuccess =
  PostApiV1AdminStoreSettingDetailResponse[200];
/**
 * @description
 *   获取站点配置详情
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeSetting/detail";
  function request(
    option?: PostApiV1AdminStoreSettingDetailOption
  ): Promise<PostApiV1AdminStoreSettingDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreSettingDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminGameList */
export interface PostApiV1AdminGameListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminGameList */
export interface PostApiV1AdminGameListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: GameListResponse;
  };
}

export type PostApiV1AdminGameListResponseSuccess =
  PostApiV1AdminGameListResponse[200];
/**
 * @description
 *   获取游戏列表
 * @tags 总管理后台-游戏管理
 * @produces application/json
 */
export const postApiV1AdminGameList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/game/list";
  function request(
    option?: PostApiV1AdminGameListOption
  ): Promise<PostApiV1AdminGameListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminGameListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminGameModify */
export interface PostApiV1AdminGameModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminGameModify */
export interface PostApiV1AdminGameModifyOption {
  /** @description */
  body: {
    /**
        @description */
    GameModifyRequest: GameModifyRequest;
  };
}

/** @description response type for postApiV1AdminGameModify */
export interface PostApiV1AdminGameModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminGameModifyResponseSuccess =
  PostApiV1AdminGameModifyResponse[200];
/**
 * @description
 *   更新游戏
 * @tags 总管理后台-游戏管理
 * @produces application/json
 */
export const postApiV1AdminGameModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/game/modify";
  function request(
    option: PostApiV1AdminGameModifyOption
  ): Promise<PostApiV1AdminGameModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminGameModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotList */
export interface PostApiV1AdminStoreStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotList */
export interface PostApiV1AdminStoreStatsDailySnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    StoreStatsDailySnapshotListRequest: StoreStatsDailySnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminStoreStatsDailySnapshotList */
export interface PostApiV1AdminStoreStatsDailySnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreStatsDailySnapshotListResponse;
  };
}

export type PostApiV1AdminStoreStatsDailySnapshotListResponseSuccess =
  PostApiV1AdminStoreStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取站点汇总统计列表
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/storeStatsDailySnapshot/list";
    function request(
      option: PostApiV1AdminStoreStatsDailySnapshotListOption
    ): Promise<PostApiV1AdminStoreStatsDailySnapshotListResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminStoreStatsDailySnapshotListResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotCreate */
export interface PostApiV1AdminStoreStatsDailySnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsDailySnapshotCreate */
export interface PostApiV1AdminStoreStatsDailySnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsDailySnapshotCreateResponseSuccess =
  PostApiV1AdminStoreStatsDailySnapshotCreateResponse[200];
/**
 * @description
 *   创建站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotCreate =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/storeStatsDailySnapshot/create";
    function request(
      option?: PostApiV1AdminStoreStatsDailySnapshotCreateOption
    ): Promise<PostApiV1AdminStoreStatsDailySnapshotCreateResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminStoreStatsDailySnapshotCreateResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotModify */
export interface PostApiV1AdminStoreStatsDailySnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsDailySnapshotModify */
export interface PostApiV1AdminStoreStatsDailySnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsDailySnapshotModifyResponseSuccess =
  PostApiV1AdminStoreStatsDailySnapshotModifyResponse[200];
/**
 * @description
 *   更新站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotModify =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/storeStatsDailySnapshot/modify";
    function request(
      option?: PostApiV1AdminStoreStatsDailySnapshotModifyOption
    ): Promise<PostApiV1AdminStoreStatsDailySnapshotModifyResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminStoreStatsDailySnapshotModifyResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotRemove */
export interface PostApiV1AdminStoreStatsDailySnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsDailySnapshotRemove */
export interface PostApiV1AdminStoreStatsDailySnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsDailySnapshotRemoveResponseSuccess =
  PostApiV1AdminStoreStatsDailySnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotRemove =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/storeStatsDailySnapshot/remove";
    function request(
      option?: PostApiV1AdminStoreStatsDailySnapshotRemoveOption
    ): Promise<PostApiV1AdminStoreStatsDailySnapshotRemoveResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminStoreStatsDailySnapshotRemoveResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotDetail */
export interface PostApiV1AdminStoreStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreStatsDailySnapshotDetail */
export interface PostApiV1AdminStoreStatsDailySnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    StoreStatsDailySnapshotDetailRequest: StoreStatsDailySnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminStoreStatsDailySnapshotDetail */
export interface PostApiV1AdminStoreStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreStatsDailySnapshotDetailResponse;
  };
}

export type PostApiV1AdminStoreStatsDailySnapshotDetailResponseSuccess =
  PostApiV1AdminStoreStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取站点汇总统计详情
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/storeStatsDailySnapshot/detail";
    function request(
      option: PostApiV1AdminStoreStatsDailySnapshotDetailOption
    ): Promise<PostApiV1AdminStoreStatsDailySnapshotDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AdminStoreStatsDailySnapshotDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotList */
export interface PostApiV1AdminStoreStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotList */
export interface PostApiV1AdminStoreStatsSnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    StoreStatsSnapshotListRequest: StoreStatsSnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminStoreStatsSnapshotList */
export interface PostApiV1AdminStoreStatsSnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreStatsSnapshotListResponse;
  };
}

export type PostApiV1AdminStoreStatsSnapshotListResponseSuccess =
  PostApiV1AdminStoreStatsSnapshotListResponse[200];
/**
 * @description
 *   获取站点统计列表
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeStatsSnapshot/list";
  function request(
    option: PostApiV1AdminStoreStatsSnapshotListOption
  ): Promise<PostApiV1AdminStoreStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreStatsSnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotCreate */
export interface PostApiV1AdminStoreStatsSnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsSnapshotCreate */
export interface PostApiV1AdminStoreStatsSnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsSnapshotCreateResponseSuccess =
  PostApiV1AdminStoreStatsSnapshotCreateResponse[200];
/**
 * @description
 *   创建站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeStatsSnapshot/create";
  function request(
    option?: PostApiV1AdminStoreStatsSnapshotCreateOption
  ): Promise<PostApiV1AdminStoreStatsSnapshotCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreStatsSnapshotCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotModify */
export interface PostApiV1AdminStoreStatsSnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsSnapshotModify */
export interface PostApiV1AdminStoreStatsSnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsSnapshotModifyResponseSuccess =
  PostApiV1AdminStoreStatsSnapshotModifyResponse[200];
/**
 * @description
 *   更新站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeStatsSnapshot/modify";
  function request(
    option?: PostApiV1AdminStoreStatsSnapshotModifyOption
  ): Promise<PostApiV1AdminStoreStatsSnapshotModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreStatsSnapshotModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotRemove */
export interface PostApiV1AdminStoreStatsSnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreStatsSnapshotRemove */
export interface PostApiV1AdminStoreStatsSnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreStatsSnapshotRemoveResponseSuccess =
  PostApiV1AdminStoreStatsSnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeStatsSnapshot/remove";
  function request(
    option?: PostApiV1AdminStoreStatsSnapshotRemoveOption
  ): Promise<PostApiV1AdminStoreStatsSnapshotRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreStatsSnapshotRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotDetail */
export interface PostApiV1AdminStoreStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStoreStatsSnapshotDetail */
export interface PostApiV1AdminStoreStatsSnapshotDetailOption {
  /** @description */
  body: {
    /**
        @description */
    StoreStatsSnapshotDetailRequest: StoreStatsSnapshotDetailRequest;
  };
}

/** @description response type for postApiV1AdminStoreStatsSnapshotDetail */
export interface PostApiV1AdminStoreStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: StoreStatsSnapshotDetailResponse;
  };
}

export type PostApiV1AdminStoreStatsSnapshotDetailResponseSuccess =
  PostApiV1AdminStoreStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取站点统计详情
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeStatsSnapshot/detail";
  function request(
    option: PostApiV1AdminStoreStatsSnapshotDetailOption
  ): Promise<PostApiV1AdminStoreStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStorePermissionList */
export interface PostApiV1AdminStorePermissionListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStorePermissionList */
export interface PostApiV1AdminStorePermissionListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStorePermissionListResponseSuccess =
  PostApiV1AdminStorePermissionListResponse[200];
/**
 * @description
 *   获取站点权限列表
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AdminStorePermissionList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storePermission/list";
  function request(
    option?: PostApiV1AdminStorePermissionListOption
  ): Promise<PostApiV1AdminStorePermissionListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStorePermissionListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStorePermissionCreate */
export interface PostApiV1AdminStorePermissionCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStorePermissionCreate */
export interface PostApiV1AdminStorePermissionCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStorePermissionCreateResponseSuccess =
  PostApiV1AdminStorePermissionCreateResponse[200];
/**
 * @description
 *   创建站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AdminStorePermissionCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storePermission/create";
  function request(
    option?: PostApiV1AdminStorePermissionCreateOption
  ): Promise<PostApiV1AdminStorePermissionCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStorePermissionCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStorePermissionModify */
export interface PostApiV1AdminStorePermissionModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStorePermissionModify */
export interface PostApiV1AdminStorePermissionModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStorePermissionModifyResponseSuccess =
  PostApiV1AdminStorePermissionModifyResponse[200];
/**
 * @description
 *   更新站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AdminStorePermissionModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storePermission/modify";
  function request(
    option?: PostApiV1AdminStorePermissionModifyOption
  ): Promise<PostApiV1AdminStorePermissionModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStorePermissionModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStorePermissionRemove */
export interface PostApiV1AdminStorePermissionRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStorePermissionRemove */
export interface PostApiV1AdminStorePermissionRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStorePermissionRemoveResponseSuccess =
  PostApiV1AdminStorePermissionRemoveResponse[200];
/**
 * @description
 *   删除站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AdminStorePermissionRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storePermission/remove";
  function request(
    option?: PostApiV1AdminStorePermissionRemoveOption
  ): Promise<PostApiV1AdminStorePermissionRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStorePermissionRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStorePermissionDetail */
export interface PostApiV1AdminStorePermissionDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStorePermissionDetail */
export interface PostApiV1AdminStorePermissionDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStorePermissionDetailResponseSuccess =
  PostApiV1AdminStorePermissionDetailResponse[200];
/**
 * @description
 *   获取站点权限详情
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AdminStorePermissionDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storePermission/detail";
  function request(
    option?: PostApiV1AdminStorePermissionDetailOption
  ): Promise<PostApiV1AdminStorePermissionDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStorePermissionDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreAccountList */
export interface PostApiV1AdminStoreAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreAccountList */
export interface PostApiV1AdminStoreAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStoreAccountListResponseSuccess =
  PostApiV1AdminStoreAccountListResponse[200];
/**
 * @description
 *   获取站点账号列表
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AdminStoreAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeAccount/list";
  function request(
    option?: PostApiV1AdminStoreAccountListOption
  ): Promise<PostApiV1AdminStoreAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreAccountCreate */
export interface PostApiV1AdminStoreAccountCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreAccountCreate */
export interface PostApiV1AdminStoreAccountCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreAccountCreateResponseSuccess =
  PostApiV1AdminStoreAccountCreateResponse[200];
/**
 * @description
 *   创建站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AdminStoreAccountCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeAccount/create";
  function request(
    option?: PostApiV1AdminStoreAccountCreateOption
  ): Promise<PostApiV1AdminStoreAccountCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreAccountCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreAccountModify */
export interface PostApiV1AdminStoreAccountModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreAccountModify */
export interface PostApiV1AdminStoreAccountModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreAccountModifyResponseSuccess =
  PostApiV1AdminStoreAccountModifyResponse[200];
/**
 * @description
 *   更新站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AdminStoreAccountModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeAccount/modify";
  function request(
    option?: PostApiV1AdminStoreAccountModifyOption
  ): Promise<PostApiV1AdminStoreAccountModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreAccountModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreAccountRemove */
export interface PostApiV1AdminStoreAccountRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreAccountRemove */
export interface PostApiV1AdminStoreAccountRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreAccountRemoveResponseSuccess =
  PostApiV1AdminStoreAccountRemoveResponse[200];
/**
 * @description
 *   删除站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AdminStoreAccountRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeAccount/remove";
  function request(
    option?: PostApiV1AdminStoreAccountRemoveOption
  ): Promise<PostApiV1AdminStoreAccountRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreAccountRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreAccountDetail */
export interface PostApiV1AdminStoreAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreAccountDetail */
export interface PostApiV1AdminStoreAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStoreAccountDetailResponseSuccess =
  PostApiV1AdminStoreAccountDetailResponse[200];
/**
 * @description
 *   获取站点账号详情
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AdminStoreAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeAccount/detail";
  function request(
    option?: PostApiV1AdminStoreAccountDetailOption
  ): Promise<PostApiV1AdminStoreAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRoleList */
export interface PostApiV1AdminStoreRoleListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreRoleList */
export interface PostApiV1AdminStoreRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStoreRoleListResponseSuccess =
  PostApiV1AdminStoreRoleListResponse[200];
/**
 * @description
 *   获取站点角色列表
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AdminStoreRoleList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeRole/list";
  function request(
    option?: PostApiV1AdminStoreRoleListOption
  ): Promise<PostApiV1AdminStoreRoleListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRoleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRoleCreate */
export interface PostApiV1AdminStoreRoleCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreRoleCreate */
export interface PostApiV1AdminStoreRoleCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreRoleCreateResponseSuccess =
  PostApiV1AdminStoreRoleCreateResponse[200];
/**
 * @description
 *   创建站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AdminStoreRoleCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeRole/create";
  function request(
    option?: PostApiV1AdminStoreRoleCreateOption
  ): Promise<PostApiV1AdminStoreRoleCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRoleCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRoleModify */
export interface PostApiV1AdminStoreRoleModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreRoleModify */
export interface PostApiV1AdminStoreRoleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreRoleModifyResponseSuccess =
  PostApiV1AdminStoreRoleModifyResponse[200];
/**
 * @description
 *   更新站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AdminStoreRoleModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeRole/modify";
  function request(
    option?: PostApiV1AdminStoreRoleModifyOption
  ): Promise<PostApiV1AdminStoreRoleModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRoleModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRoleRemove */
export interface PostApiV1AdminStoreRoleRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreRoleRemove */
export interface PostApiV1AdminStoreRoleRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AdminStoreRoleRemoveResponseSuccess =
  PostApiV1AdminStoreRoleRemoveResponse[200];
/**
 * @description
 *   删除站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AdminStoreRoleRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeRole/remove";
  function request(
    option?: PostApiV1AdminStoreRoleRemoveOption
  ): Promise<PostApiV1AdminStoreRoleRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRoleRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AdminStoreRoleDetail */
export interface PostApiV1AdminStoreRoleDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AdminStoreRoleDetail */
export interface PostApiV1AdminStoreRoleDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AdminStoreRoleDetailResponseSuccess =
  PostApiV1AdminStoreRoleDetailResponse[200];
/**
 * @description
 *   获取站点角色详情
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AdminStoreRoleDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/storeRole/detail";
  function request(
    option?: PostApiV1AdminStoreRoleDetailOption
  ): Promise<PostApiV1AdminStoreRoleDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStoreRoleDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStorePermissionList */
export interface PostApiV1UserStorePermissionListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStorePermissionList */
export interface PostApiV1UserStorePermissionListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStorePermissionListResponseSuccess =
  PostApiV1UserStorePermissionListResponse[200];
/**
 * @description
 *   获取站点权限列表
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1UserStorePermissionList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storePermission/list";
  function request(
    option?: PostApiV1UserStorePermissionListOption
  ): Promise<PostApiV1UserStorePermissionListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStorePermissionListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStorePermissionCreate */
export interface PostApiV1UserStorePermissionCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStorePermissionCreate */
export interface PostApiV1UserStorePermissionCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStorePermissionCreateResponseSuccess =
  PostApiV1UserStorePermissionCreateResponse[200];
/**
 * @description
 *   创建站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1UserStorePermissionCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storePermission/create";
  function request(
    option?: PostApiV1UserStorePermissionCreateOption
  ): Promise<PostApiV1UserStorePermissionCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStorePermissionCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStorePermissionModify */
export interface PostApiV1UserStorePermissionModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStorePermissionModify */
export interface PostApiV1UserStorePermissionModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStorePermissionModifyResponseSuccess =
  PostApiV1UserStorePermissionModifyResponse[200];
/**
 * @description
 *   更新站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1UserStorePermissionModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storePermission/modify";
  function request(
    option?: PostApiV1UserStorePermissionModifyOption
  ): Promise<PostApiV1UserStorePermissionModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStorePermissionModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStorePermissionRemove */
export interface PostApiV1UserStorePermissionRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStorePermissionRemove */
export interface PostApiV1UserStorePermissionRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStorePermissionRemoveResponseSuccess =
  PostApiV1UserStorePermissionRemoveResponse[200];
/**
 * @description
 *   删除站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1UserStorePermissionRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storePermission/remove";
  function request(
    option?: PostApiV1UserStorePermissionRemoveOption
  ): Promise<PostApiV1UserStorePermissionRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStorePermissionRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStorePermissionDetail */
export interface PostApiV1UserStorePermissionDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStorePermissionDetail */
export interface PostApiV1UserStorePermissionDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStorePermissionDetailResponseSuccess =
  PostApiV1UserStorePermissionDetailResponse[200];
/**
 * @description
 *   获取站点权限详情
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1UserStorePermissionDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storePermission/detail";
  function request(
    option?: PostApiV1UserStorePermissionDetailOption
  ): Promise<PostApiV1UserStorePermissionDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStorePermissionDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreSettingList */
export interface PostApiV1UserStoreSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreSettingList */
export interface PostApiV1UserStoreSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreSettingListResponseSuccess =
  PostApiV1UserStoreSettingListResponse[200];
/**
 * @description
 *   获取站点配置列表
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1UserStoreSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeSetting/list";
  function request(
    option?: PostApiV1UserStoreSettingListOption
  ): Promise<PostApiV1UserStoreSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreSettingCreate */
export interface PostApiV1UserStoreSettingCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreSettingCreate */
export interface PostApiV1UserStoreSettingCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreSettingCreateResponseSuccess =
  PostApiV1UserStoreSettingCreateResponse[200];
/**
 * @description
 *   创建站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1UserStoreSettingCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeSetting/create";
  function request(
    option?: PostApiV1UserStoreSettingCreateOption
  ): Promise<PostApiV1UserStoreSettingCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreSettingCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreSettingModify */
export interface PostApiV1UserStoreSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreSettingModify */
export interface PostApiV1UserStoreSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreSettingModifyResponseSuccess =
  PostApiV1UserStoreSettingModifyResponse[200];
/**
 * @description
 *   更新站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1UserStoreSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeSetting/modify";
  function request(
    option?: PostApiV1UserStoreSettingModifyOption
  ): Promise<PostApiV1UserStoreSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreSettingRemove */
export interface PostApiV1UserStoreSettingRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreSettingRemove */
export interface PostApiV1UserStoreSettingRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreSettingRemoveResponseSuccess =
  PostApiV1UserStoreSettingRemoveResponse[200];
/**
 * @description
 *   删除站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1UserStoreSettingRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeSetting/remove";
  function request(
    option?: PostApiV1UserStoreSettingRemoveOption
  ): Promise<PostApiV1UserStoreSettingRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreSettingRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreSettingDetail */
export interface PostApiV1UserStoreSettingDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreSettingDetail */
export interface PostApiV1UserStoreSettingDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreSettingDetailResponseSuccess =
  PostApiV1UserStoreSettingDetailResponse[200];
/**
 * @description
 *   获取站点配置详情
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1UserStoreSettingDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeSetting/detail";
  function request(
    option?: PostApiV1UserStoreSettingDetailOption
  ): Promise<PostApiV1UserStoreSettingDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreSettingDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreAccountList */
export interface PostApiV1UserStoreAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreAccountList */
export interface PostApiV1UserStoreAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreAccountListResponseSuccess =
  PostApiV1UserStoreAccountListResponse[200];
/**
 * @description
 *   获取站点账号列表
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1UserStoreAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeAccount/list";
  function request(
    option?: PostApiV1UserStoreAccountListOption
  ): Promise<PostApiV1UserStoreAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreAccountCreate */
export interface PostApiV1UserStoreAccountCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreAccountCreate */
export interface PostApiV1UserStoreAccountCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreAccountCreateResponseSuccess =
  PostApiV1UserStoreAccountCreateResponse[200];
/**
 * @description
 *   创建站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1UserStoreAccountCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeAccount/create";
  function request(
    option?: PostApiV1UserStoreAccountCreateOption
  ): Promise<PostApiV1UserStoreAccountCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreAccountCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreAccountModify */
export interface PostApiV1UserStoreAccountModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreAccountModify */
export interface PostApiV1UserStoreAccountModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreAccountModifyResponseSuccess =
  PostApiV1UserStoreAccountModifyResponse[200];
/**
 * @description
 *   更新站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1UserStoreAccountModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeAccount/modify";
  function request(
    option?: PostApiV1UserStoreAccountModifyOption
  ): Promise<PostApiV1UserStoreAccountModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreAccountModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreAccountRemove */
export interface PostApiV1UserStoreAccountRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreAccountRemove */
export interface PostApiV1UserStoreAccountRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreAccountRemoveResponseSuccess =
  PostApiV1UserStoreAccountRemoveResponse[200];
/**
 * @description
 *   删除站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1UserStoreAccountRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeAccount/remove";
  function request(
    option?: PostApiV1UserStoreAccountRemoveOption
  ): Promise<PostApiV1UserStoreAccountRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreAccountRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreAccountDetail */
export interface PostApiV1UserStoreAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreAccountDetail */
export interface PostApiV1UserStoreAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreAccountDetailResponseSuccess =
  PostApiV1UserStoreAccountDetailResponse[200];
/**
 * @description
 *   获取站点账号详情
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1UserStoreAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeAccount/detail";
  function request(
    option?: PostApiV1UserStoreAccountDetailOption
  ): Promise<PostApiV1UserStoreAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsDailySnapshotList */
export interface PostApiV1UserStoreStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsDailySnapshotList */
export interface PostApiV1UserStoreStatsDailySnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreStatsDailySnapshotListResponseSuccess =
  PostApiV1UserStoreStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取站点汇总统计列表
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsDailySnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsDailySnapshot/list";
  function request(
    option?: PostApiV1UserStoreStatsDailySnapshotListOption
  ): Promise<PostApiV1UserStoreStatsDailySnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsDailySnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsDailySnapshotCreate */
export interface PostApiV1UserStoreStatsDailySnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsDailySnapshotCreate */
export interface PostApiV1UserStoreStatsDailySnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsDailySnapshotCreateResponseSuccess =
  PostApiV1UserStoreStatsDailySnapshotCreateResponse[200];
/**
 * @description
 *   创建站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsDailySnapshotCreate =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/user/storeStatsDailySnapshot/create";
    function request(
      option?: PostApiV1UserStoreStatsDailySnapshotCreateOption
    ): Promise<PostApiV1UserStoreStatsDailySnapshotCreateResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1UserStoreStatsDailySnapshotCreateResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1UserStoreStatsDailySnapshotModify */
export interface PostApiV1UserStoreStatsDailySnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsDailySnapshotModify */
export interface PostApiV1UserStoreStatsDailySnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsDailySnapshotModifyResponseSuccess =
  PostApiV1UserStoreStatsDailySnapshotModifyResponse[200];
/**
 * @description
 *   更新站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsDailySnapshotModify =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/user/storeStatsDailySnapshot/modify";
    function request(
      option?: PostApiV1UserStoreStatsDailySnapshotModifyOption
    ): Promise<PostApiV1UserStoreStatsDailySnapshotModifyResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1UserStoreStatsDailySnapshotModifyResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1UserStoreStatsDailySnapshotRemove */
export interface PostApiV1UserStoreStatsDailySnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsDailySnapshotRemove */
export interface PostApiV1UserStoreStatsDailySnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsDailySnapshotRemoveResponseSuccess =
  PostApiV1UserStoreStatsDailySnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsDailySnapshotRemove =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/user/storeStatsDailySnapshot/remove";
    function request(
      option?: PostApiV1UserStoreStatsDailySnapshotRemoveOption
    ): Promise<PostApiV1UserStoreStatsDailySnapshotRemoveResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1UserStoreStatsDailySnapshotRemoveResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1UserStoreStatsDailySnapshotDetail */
export interface PostApiV1UserStoreStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsDailySnapshotDetail */
export interface PostApiV1UserStoreStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreStatsDailySnapshotDetailResponseSuccess =
  PostApiV1UserStoreStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取站点汇总统计详情
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsDailySnapshotDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/user/storeStatsDailySnapshot/detail";
    function request(
      option?: PostApiV1UserStoreStatsDailySnapshotDetailOption
    ): Promise<PostApiV1UserStoreStatsDailySnapshotDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1UserStoreStatsDailySnapshotDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1UserStoreStatsSnapshotList */
export interface PostApiV1UserStoreStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsSnapshotList */
export interface PostApiV1UserStoreStatsSnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreStatsSnapshotListResponseSuccess =
  PostApiV1UserStoreStatsSnapshotListResponse[200];
/**
 * @description
 *   获取站点统计列表
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsSnapshot/list";
  function request(
    option?: PostApiV1UserStoreStatsSnapshotListOption
  ): Promise<PostApiV1UserStoreStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsSnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsSnapshotCreate */
export interface PostApiV1UserStoreStatsSnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsSnapshotCreate */
export interface PostApiV1UserStoreStatsSnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsSnapshotCreateResponseSuccess =
  PostApiV1UserStoreStatsSnapshotCreateResponse[200];
/**
 * @description
 *   创建站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsSnapshotCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsSnapshot/create";
  function request(
    option?: PostApiV1UserStoreStatsSnapshotCreateOption
  ): Promise<PostApiV1UserStoreStatsSnapshotCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsSnapshotCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsSnapshotModify */
export interface PostApiV1UserStoreStatsSnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsSnapshotModify */
export interface PostApiV1UserStoreStatsSnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsSnapshotModifyResponseSuccess =
  PostApiV1UserStoreStatsSnapshotModifyResponse[200];
/**
 * @description
 *   更新站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsSnapshotModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsSnapshot/modify";
  function request(
    option?: PostApiV1UserStoreStatsSnapshotModifyOption
  ): Promise<PostApiV1UserStoreStatsSnapshotModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsSnapshotModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsSnapshotRemove */
export interface PostApiV1UserStoreStatsSnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsSnapshotRemove */
export interface PostApiV1UserStoreStatsSnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreStatsSnapshotRemoveResponseSuccess =
  PostApiV1UserStoreStatsSnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsSnapshotRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsSnapshot/remove";
  function request(
    option?: PostApiV1UserStoreStatsSnapshotRemoveOption
  ): Promise<PostApiV1UserStoreStatsSnapshotRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsSnapshotRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreStatsSnapshotDetail */
export interface PostApiV1UserStoreStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreStatsSnapshotDetail */
export interface PostApiV1UserStoreStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreStatsSnapshotDetailResponseSuccess =
  PostApiV1UserStoreStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取站点统计详情
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1UserStoreStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeStatsSnapshot/detail";
  function request(
    option?: PostApiV1UserStoreStatsSnapshotDetailOption
  ): Promise<PostApiV1UserStoreStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreRoleList */
export interface PostApiV1UserStoreRoleListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreRoleList */
export interface PostApiV1UserStoreRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreRoleListResponseSuccess =
  PostApiV1UserStoreRoleListResponse[200];
/**
 * @description
 *   获取站点角色列表
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1UserStoreRoleList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeRole/list";
  function request(
    option?: PostApiV1UserStoreRoleListOption
  ): Promise<PostApiV1UserStoreRoleListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreRoleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreRoleCreate */
export interface PostApiV1UserStoreRoleCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreRoleCreate */
export interface PostApiV1UserStoreRoleCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreRoleCreateResponseSuccess =
  PostApiV1UserStoreRoleCreateResponse[200];
/**
 * @description
 *   创建站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1UserStoreRoleCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeRole/create";
  function request(
    option?: PostApiV1UserStoreRoleCreateOption
  ): Promise<PostApiV1UserStoreRoleCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreRoleCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreRoleModify */
export interface PostApiV1UserStoreRoleModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreRoleModify */
export interface PostApiV1UserStoreRoleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreRoleModifyResponseSuccess =
  PostApiV1UserStoreRoleModifyResponse[200];
/**
 * @description
 *   更新站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1UserStoreRoleModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeRole/modify";
  function request(
    option?: PostApiV1UserStoreRoleModifyOption
  ): Promise<PostApiV1UserStoreRoleModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreRoleModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreRoleRemove */
export interface PostApiV1UserStoreRoleRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreRoleRemove */
export interface PostApiV1UserStoreRoleRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1UserStoreRoleRemoveResponseSuccess =
  PostApiV1UserStoreRoleRemoveResponse[200];
/**
 * @description
 *   删除站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1UserStoreRoleRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeRole/remove";
  function request(
    option?: PostApiV1UserStoreRoleRemoveOption
  ): Promise<PostApiV1UserStoreRoleRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreRoleRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserStoreRoleDetail */
export interface PostApiV1UserStoreRoleDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1UserStoreRoleDetail */
export interface PostApiV1UserStoreRoleDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1UserStoreRoleDetailResponseSuccess =
  PostApiV1UserStoreRoleDetailResponse[200];
/**
 * @description
 *   获取站点角色详情
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1UserStoreRoleDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/storeRole/detail";
  function request(
    option?: PostApiV1UserStoreRoleDetailOption
  ): Promise<PostApiV1UserStoreRoleDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserStoreRoleDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postApiV1TestOrderBonusGenerate */
export interface PostApiV1TestOrderBonusGenerateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1TestOrderBonusGenerateResponseSuccess =
  PostApiV1TestOrderBonusGenerateResponse[200];
/**
 * @description
 *   生成佣金
 * @tags 测试接口-订单管理
 * @produces application/json
 */
export const postApiV1TestOrderBonusGenerate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/test/order/bonus/generate";
  function request(): Promise<PostApiV1TestOrderBonusGenerateResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<PostApiV1TestOrderBonusGenerateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postApiV1TestOrderGenerate */
export interface PostApiV1TestOrderGenerateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: ResponseInterface;
  };
}

export type PostApiV1TestOrderGenerateResponseSuccess =
  PostApiV1TestOrderGenerateResponse[200];
/**
 * @description
 *   生成地址
 * @tags 测试接口-订单管理
 * @produces application/json
 */
export const postApiV1TestOrderGenerate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/test/order/generate";
  function request(): Promise<PostApiV1TestOrderGenerateResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<PostApiV1TestOrderGenerateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStorePermissionList */
export interface PostApiV1AgentStorePermissionListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStorePermissionList */
export interface PostApiV1AgentStorePermissionListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStorePermissionListResponseSuccess =
  PostApiV1AgentStorePermissionListResponse[200];
/**
 * @description
 *   获取站点权限列表
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AgentStorePermissionList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storePermission/list";
  function request(
    option?: PostApiV1AgentStorePermissionListOption
  ): Promise<PostApiV1AgentStorePermissionListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStorePermissionListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStorePermissionCreate */
export interface PostApiV1AgentStorePermissionCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStorePermissionCreate */
export interface PostApiV1AgentStorePermissionCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStorePermissionCreateResponseSuccess =
  PostApiV1AgentStorePermissionCreateResponse[200];
/**
 * @description
 *   创建站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AgentStorePermissionCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storePermission/create";
  function request(
    option?: PostApiV1AgentStorePermissionCreateOption
  ): Promise<PostApiV1AgentStorePermissionCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStorePermissionCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStorePermissionModify */
export interface PostApiV1AgentStorePermissionModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStorePermissionModify */
export interface PostApiV1AgentStorePermissionModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStorePermissionModifyResponseSuccess =
  PostApiV1AgentStorePermissionModifyResponse[200];
/**
 * @description
 *   更新站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AgentStorePermissionModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storePermission/modify";
  function request(
    option?: PostApiV1AgentStorePermissionModifyOption
  ): Promise<PostApiV1AgentStorePermissionModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStorePermissionModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStorePermissionRemove */
export interface PostApiV1AgentStorePermissionRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStorePermissionRemove */
export interface PostApiV1AgentStorePermissionRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStorePermissionRemoveResponseSuccess =
  PostApiV1AgentStorePermissionRemoveResponse[200];
/**
 * @description
 *   删除站点权限
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AgentStorePermissionRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storePermission/remove";
  function request(
    option?: PostApiV1AgentStorePermissionRemoveOption
  ): Promise<PostApiV1AgentStorePermissionRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStorePermissionRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStorePermissionDetail */
export interface PostApiV1AgentStorePermissionDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStorePermissionDetail */
export interface PostApiV1AgentStorePermissionDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStorePermissionDetailResponseSuccess =
  PostApiV1AgentStorePermissionDetailResponse[200];
/**
 * @description
 *   获取站点权限详情
 * @tags 站点权限管理
 * @produces application/json
 */
export const postApiV1AgentStorePermissionDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storePermission/detail";
  function request(
    option?: PostApiV1AgentStorePermissionDetailOption
  ): Promise<PostApiV1AgentStorePermissionDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStorePermissionDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreSettingList */
export interface PostApiV1AgentStoreSettingListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreSettingList */
export interface PostApiV1AgentStoreSettingListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreSettingListResponseSuccess =
  PostApiV1AgentStoreSettingListResponse[200];
/**
 * @description
 *   获取站点配置列表
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AgentStoreSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeSetting/list";
  function request(
    option?: PostApiV1AgentStoreSettingListOption
  ): Promise<PostApiV1AgentStoreSettingListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreSettingListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreSettingCreate */
export interface PostApiV1AgentStoreSettingCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreSettingCreate */
export interface PostApiV1AgentStoreSettingCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreSettingCreateResponseSuccess =
  PostApiV1AgentStoreSettingCreateResponse[200];
/**
 * @description
 *   创建站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AgentStoreSettingCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeSetting/create";
  function request(
    option?: PostApiV1AgentStoreSettingCreateOption
  ): Promise<PostApiV1AgentStoreSettingCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreSettingCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreSettingModify */
export interface PostApiV1AgentStoreSettingModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreSettingModify */
export interface PostApiV1AgentStoreSettingModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreSettingModifyResponseSuccess =
  PostApiV1AgentStoreSettingModifyResponse[200];
/**
 * @description
 *   更新站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AgentStoreSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeSetting/modify";
  function request(
    option?: PostApiV1AgentStoreSettingModifyOption
  ): Promise<PostApiV1AgentStoreSettingModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreSettingModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreSettingRemove */
export interface PostApiV1AgentStoreSettingRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreSettingRemove */
export interface PostApiV1AgentStoreSettingRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreSettingRemoveResponseSuccess =
  PostApiV1AgentStoreSettingRemoveResponse[200];
/**
 * @description
 *   删除站点配置
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AgentStoreSettingRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeSetting/remove";
  function request(
    option?: PostApiV1AgentStoreSettingRemoveOption
  ): Promise<PostApiV1AgentStoreSettingRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreSettingRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreSettingDetail */
export interface PostApiV1AgentStoreSettingDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreSettingDetail */
export interface PostApiV1AgentStoreSettingDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreSettingDetailResponseSuccess =
  PostApiV1AgentStoreSettingDetailResponse[200];
/**
 * @description
 *   获取站点配置详情
 * @tags 站点配置管理
 * @produces application/json
 */
export const postApiV1AgentStoreSettingDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeSetting/detail";
  function request(
    option?: PostApiV1AgentStoreSettingDetailOption
  ): Promise<PostApiV1AgentStoreSettingDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreSettingDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreAccountList */
export interface PostApiV1AgentStoreAccountListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreAccountList */
export interface PostApiV1AgentStoreAccountListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreAccountListResponseSuccess =
  PostApiV1AgentStoreAccountListResponse[200];
/**
 * @description
 *   获取站点账号列表
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AgentStoreAccountList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeAccount/list";
  function request(
    option?: PostApiV1AgentStoreAccountListOption
  ): Promise<PostApiV1AgentStoreAccountListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreAccountListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreAccountCreate */
export interface PostApiV1AgentStoreAccountCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreAccountCreate */
export interface PostApiV1AgentStoreAccountCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreAccountCreateResponseSuccess =
  PostApiV1AgentStoreAccountCreateResponse[200];
/**
 * @description
 *   创建站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AgentStoreAccountCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeAccount/create";
  function request(
    option?: PostApiV1AgentStoreAccountCreateOption
  ): Promise<PostApiV1AgentStoreAccountCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreAccountCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreAccountModify */
export interface PostApiV1AgentStoreAccountModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreAccountModify */
export interface PostApiV1AgentStoreAccountModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreAccountModifyResponseSuccess =
  PostApiV1AgentStoreAccountModifyResponse[200];
/**
 * @description
 *   更新站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AgentStoreAccountModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeAccount/modify";
  function request(
    option?: PostApiV1AgentStoreAccountModifyOption
  ): Promise<PostApiV1AgentStoreAccountModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreAccountModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreAccountRemove */
export interface PostApiV1AgentStoreAccountRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreAccountRemove */
export interface PostApiV1AgentStoreAccountRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreAccountRemoveResponseSuccess =
  PostApiV1AgentStoreAccountRemoveResponse[200];
/**
 * @description
 *   删除站点账号
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AgentStoreAccountRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeAccount/remove";
  function request(
    option?: PostApiV1AgentStoreAccountRemoveOption
  ): Promise<PostApiV1AgentStoreAccountRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreAccountRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreAccountDetail */
export interface PostApiV1AgentStoreAccountDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreAccountDetail */
export interface PostApiV1AgentStoreAccountDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreAccountDetailResponseSuccess =
  PostApiV1AgentStoreAccountDetailResponse[200];
/**
 * @description
 *   获取站点账号详情
 * @tags 站点账号管理
 * @produces application/json
 */
export const postApiV1AgentStoreAccountDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeAccount/detail";
  function request(
    option?: PostApiV1AgentStoreAccountDetailOption
  ): Promise<PostApiV1AgentStoreAccountDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreAccountDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreStatsDailySnapshotList */
export interface PostApiV1AgentStoreStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsDailySnapshotList */
export interface PostApiV1AgentStoreStatsDailySnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreStatsDailySnapshotListResponseSuccess =
  PostApiV1AgentStoreStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取站点汇总统计列表
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsDailySnapshotList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/storeStatsDailySnapshot/list";
    function request(
      option?: PostApiV1AgentStoreStatsDailySnapshotListOption
    ): Promise<PostApiV1AgentStoreStatsDailySnapshotListResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentStoreStatsDailySnapshotListResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AgentStoreStatsDailySnapshotCreate */
export interface PostApiV1AgentStoreStatsDailySnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsDailySnapshotCreate */
export interface PostApiV1AgentStoreStatsDailySnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsDailySnapshotCreateResponseSuccess =
  PostApiV1AgentStoreStatsDailySnapshotCreateResponse[200];
/**
 * @description
 *   创建站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsDailySnapshotCreate =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/storeStatsDailySnapshot/create";
    function request(
      option?: PostApiV1AgentStoreStatsDailySnapshotCreateOption
    ): Promise<PostApiV1AgentStoreStatsDailySnapshotCreateResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentStoreStatsDailySnapshotCreateResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AgentStoreStatsDailySnapshotModify */
export interface PostApiV1AgentStoreStatsDailySnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsDailySnapshotModify */
export interface PostApiV1AgentStoreStatsDailySnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsDailySnapshotModifyResponseSuccess =
  PostApiV1AgentStoreStatsDailySnapshotModifyResponse[200];
/**
 * @description
 *   更新站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsDailySnapshotModify =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/storeStatsDailySnapshot/modify";
    function request(
      option?: PostApiV1AgentStoreStatsDailySnapshotModifyOption
    ): Promise<PostApiV1AgentStoreStatsDailySnapshotModifyResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentStoreStatsDailySnapshotModifyResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AgentStoreStatsDailySnapshotRemove */
export interface PostApiV1AgentStoreStatsDailySnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsDailySnapshotRemove */
export interface PostApiV1AgentStoreStatsDailySnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsDailySnapshotRemoveResponseSuccess =
  PostApiV1AgentStoreStatsDailySnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点汇总统计
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsDailySnapshotRemove =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/storeStatsDailySnapshot/remove";
    function request(
      option?: PostApiV1AgentStoreStatsDailySnapshotRemoveOption
    ): Promise<PostApiV1AgentStoreStatsDailySnapshotRemoveResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentStoreStatsDailySnapshotRemoveResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AgentStoreStatsDailySnapshotDetail */
export interface PostApiV1AgentStoreStatsDailySnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsDailySnapshotDetail */
export interface PostApiV1AgentStoreStatsDailySnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreStatsDailySnapshotDetailResponseSuccess =
  PostApiV1AgentStoreStatsDailySnapshotDetailResponse[200];
/**
 * @description
 *   获取站点汇总统计详情
 * @tags 站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsDailySnapshotDetail =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/agent/storeStatsDailySnapshot/detail";
    function request(
      option?: PostApiV1AgentStoreStatsDailySnapshotDetailOption
    ): Promise<PostApiV1AgentStoreStatsDailySnapshotDetailResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<PostApiV1AgentStoreStatsDailySnapshotDetailResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for postApiV1AgentStoreStatsSnapshotList */
export interface PostApiV1AgentStoreStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsSnapshotList */
export interface PostApiV1AgentStoreStatsSnapshotListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreStatsSnapshotListResponseSuccess =
  PostApiV1AgentStoreStatsSnapshotListResponse[200];
/**
 * @description
 *   获取站点统计列表
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeStatsSnapshot/list";
  function request(
    option?: PostApiV1AgentStoreStatsSnapshotListOption
  ): Promise<PostApiV1AgentStoreStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreStatsSnapshotListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreStatsSnapshotCreate */
export interface PostApiV1AgentStoreStatsSnapshotCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsSnapshotCreate */
export interface PostApiV1AgentStoreStatsSnapshotCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsSnapshotCreateResponseSuccess =
  PostApiV1AgentStoreStatsSnapshotCreateResponse[200];
/**
 * @description
 *   创建站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsSnapshotCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeStatsSnapshot/create";
  function request(
    option?: PostApiV1AgentStoreStatsSnapshotCreateOption
  ): Promise<PostApiV1AgentStoreStatsSnapshotCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreStatsSnapshotCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreStatsSnapshotModify */
export interface PostApiV1AgentStoreStatsSnapshotModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsSnapshotModify */
export interface PostApiV1AgentStoreStatsSnapshotModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsSnapshotModifyResponseSuccess =
  PostApiV1AgentStoreStatsSnapshotModifyResponse[200];
/**
 * @description
 *   更新站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsSnapshotModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeStatsSnapshot/modify";
  function request(
    option?: PostApiV1AgentStoreStatsSnapshotModifyOption
  ): Promise<PostApiV1AgentStoreStatsSnapshotModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreStatsSnapshotModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreStatsSnapshotRemove */
export interface PostApiV1AgentStoreStatsSnapshotRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsSnapshotRemove */
export interface PostApiV1AgentStoreStatsSnapshotRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreStatsSnapshotRemoveResponseSuccess =
  PostApiV1AgentStoreStatsSnapshotRemoveResponse[200];
/**
 * @description
 *   删除站点统计
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsSnapshotRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeStatsSnapshot/remove";
  function request(
    option?: PostApiV1AgentStoreStatsSnapshotRemoveOption
  ): Promise<PostApiV1AgentStoreStatsSnapshotRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreStatsSnapshotRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreStatsSnapshotDetail */
export interface PostApiV1AgentStoreStatsSnapshotDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreStatsSnapshotDetail */
export interface PostApiV1AgentStoreStatsSnapshotDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreStatsSnapshotDetailResponseSuccess =
  PostApiV1AgentStoreStatsSnapshotDetailResponse[200];
/**
 * @description
 *   获取站点统计详情
 * @tags 站点统计管理
 * @produces application/json
 */
export const postApiV1AgentStoreStatsSnapshotDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeStatsSnapshot/detail";
  function request(
    option?: PostApiV1AgentStoreStatsSnapshotDetailOption
  ): Promise<PostApiV1AgentStoreStatsSnapshotDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreStatsSnapshotDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreRoleList */
export interface PostApiV1AgentStoreRoleListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreRoleList */
export interface PostApiV1AgentStoreRoleListResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreRoleListResponseSuccess =
  PostApiV1AgentStoreRoleListResponse[200];
/**
 * @description
 *   获取站点角色列表
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AgentStoreRoleList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeRole/list";
  function request(
    option?: PostApiV1AgentStoreRoleListOption
  ): Promise<PostApiV1AgentStoreRoleListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreRoleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreRoleCreate */
export interface PostApiV1AgentStoreRoleCreateOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreRoleCreate */
export interface PostApiV1AgentStoreRoleCreateResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreRoleCreateResponseSuccess =
  PostApiV1AgentStoreRoleCreateResponse[200];
/**
 * @description
 *   创建站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AgentStoreRoleCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeRole/create";
  function request(
    option?: PostApiV1AgentStoreRoleCreateOption
  ): Promise<PostApiV1AgentStoreRoleCreateResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreRoleCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreRoleModify */
export interface PostApiV1AgentStoreRoleModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreRoleModify */
export interface PostApiV1AgentStoreRoleModifyResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreRoleModifyResponseSuccess =
  PostApiV1AgentStoreRoleModifyResponse[200];
/**
 * @description
 *   更新站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AgentStoreRoleModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeRole/modify";
  function request(
    option?: PostApiV1AgentStoreRoleModifyOption
  ): Promise<PostApiV1AgentStoreRoleModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreRoleModifyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreRoleRemove */
export interface PostApiV1AgentStoreRoleRemoveOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreRoleRemove */
export interface PostApiV1AgentStoreRoleRemoveResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: BaseSuccessResponse;
  };
}

export type PostApiV1AgentStoreRoleRemoveResponseSuccess =
  PostApiV1AgentStoreRoleRemoveResponse[200];
/**
 * @description
 *   删除站点角色
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AgentStoreRoleRemove = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeRole/remove";
  function request(
    option?: PostApiV1AgentStoreRoleRemoveOption
  ): Promise<PostApiV1AgentStoreRoleRemoveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreRoleRemoveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1AgentStoreRoleDetail */
export interface PostApiV1AgentStoreRoleDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description response type for postApiV1AgentStoreRoleDetail */
export interface PostApiV1AgentStoreRoleDetailResponse {
  /**
   * @description
   *   OK
   */
  200: any;
}

export type PostApiV1AgentStoreRoleDetailResponseSuccess =
  PostApiV1AgentStoreRoleDetailResponse[200];
/**
 * @description
 *   获取站点角色详情
 * @tags 站点角色管理
 * @produces application/json
 */
export const postApiV1AgentStoreRoleDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/agent/storeRole/detail";
  function request(
    option?: PostApiV1AgentStoreRoleDetailOption
  ): Promise<PostApiV1AgentStoreRoleDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AgentStoreRoleDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserOrderList */
export interface PostApiV1UserOrderListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserOrderList */
export interface PostApiV1UserOrderListOption {
  /** @description */
  body: {
    /**
        @description */
    OrderListRequest2: OrderListRequest;
  };
}

/** @description response type for postApiV1UserOrderList */
export interface PostApiV1UserOrderListResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderListResponse;
  };
}

export type PostApiV1UserOrderListResponseSuccess =
  PostApiV1UserOrderListResponse[200];
/**
 * @description
 *   获取订单列表
 * @tags 用户端-订单管理
 * @produces application/json
 */
export const postApiV1UserOrderList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/order/list";
  function request(
    option: PostApiV1UserOrderListOption
  ): Promise<PostApiV1UserOrderListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserOrderListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserOrderRecent */
export interface PostApiV1UserOrderRecentOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserOrderRecent */
export interface PostApiV1UserOrderRecentOption {
  /** @description */
  body: {
    /**
        @description */
    OrderRecentListRequest: OrderRecentListRequest;
  };
}

/** @description response type for postApiV1UserOrderRecent */
export interface PostApiV1UserOrderRecentResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderListResponse;
  };
}

export type PostApiV1UserOrderRecentResponseSuccess =
  PostApiV1UserOrderRecentResponse[200];
/**
 * @description
 *   最近开奖列表
 * @tags 用户端-订单管理
 * @produces application/json
 */
export const postApiV1UserOrderRecent = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/order/recent";
  function request(
    option: PostApiV1UserOrderRecentOption
  ): Promise<PostApiV1UserOrderRecentResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserOrderRecentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1UserOrderDetail */
export interface PostApiV1UserOrderDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1UserOrderDetail */
export interface PostApiV1UserOrderDetailOption {
  /** @description */
  body: {
    /**
        @description */
    OrderDetailRequest2: OrderDetailRequest;
  };
}

/** @description response type for postApiV1UserOrderDetail */
export interface PostApiV1UserOrderDetailResponse {
  /**
   * @description
   *   OK
   */
  200: {
    /**
        @description
          错误码
        @example
          0 */
    code?: number;
    /**
        @description
          错误信息
        @example
          0 */
    msg?: string;
    data?: OrderDetailResponse;
  };
}

export type PostApiV1UserOrderDetailResponseSuccess =
  PostApiV1UserOrderDetailResponse[200];
/**
 * @description
 *   获取订单详情
 * @tags 用户端-订单管理
 * @produces application/json
 */
export const postApiV1UserOrderDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/order/detail";
  function request(
    option: PostApiV1UserOrderDetailOption
  ): Promise<PostApiV1UserOrderDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserOrderDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
