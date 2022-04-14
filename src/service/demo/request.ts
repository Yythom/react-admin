/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import requester from "../config/index";
import type {
  OrderMakeRequest,
  BaseSuccessResponse,
  OrderBonusDetailListRequest,
  OrderBonusDetailListResponse,
  UserStatsDailySnapshotListRequest,
  UserStatsDailySnapshotListResponse,
  StoreSettingListRequest,
  StoreSettingListResponse,
  StoreSettingModifyRequest,
  StatsSnapshotListRequest,
  StatsSnapshotListResponse,
  BlacklistListRequest,
  BlacklistListResponse,
  BlacklistCreateRequest,
  BlacklistModifyRequest,
  BlacklistRemoveRequest,
  BlacklistDetailRequest,
  BlacklistDetailResponse,
  StoreStatsDailySnapshotListRequest,
  StoreStatsDailySnapshotListResponse,
  AgentStatsSnapshotListRequest,
  AgentStatsSnapshotListResponse,
  StoreListRequest,
  StoreListResponse,
  StoreCreateRequest,
  StoreModifyRequest,
  StoreRemoveRequest,
  StoreDetailRequest,
  StoreDetailResponse,
  AgentListRequest,
  AgentListResponse,
  AgentCreateRequest,
  AgentModifyRequest,
  AgentRemoveRequest,
  AgentDetailRequest,
  AgentDetailResponse,
  StoreStatsSnapshotListRequest,
  StoreStatsSnapshotListResponse,
  AdminRoleListRequest,
  AdminRoleListResponse,
  AdminRoleCreateRequest,
  AdminRoleModifyRequest,
  AdminRoleRemoveRequest,
  AdminRoleDetailRequest,
  AdminRoleDetailResponse,
  OrderListRequest,
  OrderListResponse,
  OrderModifyRequest,
  OrderDetailRequest,
  OrderDetailResponse,
  StatsDailySnapshotListRequest,
  StatsDailySnapshotListResponse,
  DefaultBonusSettingListRequest,
  DefaultBonusSettingListResponse,
  DefaultBonusSettingModifyRequest,
  AgentBonusRecordListRequest,
  AgentBonusRecordListResponse,
  AgentSettingListRequest,
  AgentSettingListResponse,
  AgentSettingModifyRequest,
  CoinListRequest,
  CoinListResponse,
  CoinModifyRequest,
  AgentStatsDailySnapshotListRequest,
  AgentStatsDailySnapshotListResponse,
  AgentAccountListRequest,
  AgentAccountListResponse,
  AgentAccountDetailRequest,
  AgentAccountDetailResponse,
  UserBalanceRecordListRequest,
  UserBalanceRecordListResponse,
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserModifyRequest,
  UserBindGoogleAuthRequest,
  ResponseInterface,
  UserDetailRequest,
  UserDetailResponse,
  GameListRequest,
  GameListResponse,
  UserStatsDailySnapshotDetailRequest,
  UserStatsDailySnapshotDetailResponse,
  UserRelationListRequest,
  UserRelationListResponse,
  UserRelationDetailRequest,
  UserRelationDetailResponse,
  SystemSettingListResponse,
  UserBalanceDetailRequest,
  UserBalanceDetailResponse,
  UserStatsSnapshotDetailRequest,
  UserStatsSnapshotDetailResponse,
  WithdrawOrderListRequest,
  WithdrawOrderListResponse,
  WithdrawOrderCreateRequest,
  WithdrawOrderCancelRequest,
  UserListRequest,
  UserListResponse,
  UserResetRequest,
  GameModifyRequest,
  GameDetailRequest,
  GameDetailResponse,
  AdminAccountListRequest,
  AdminAccountListResponse,
  AdminAccountCreateRequest,
  AdminAccountModifyRequest,
  AdminAccountRemoveRequest,
  AdminAccountDetailRequest,
  AdminAccountDetailResponse,
  ProfileLoginRequest,
  ProfileLoginResponse,
  ProfileChangePasswordRequest,
  SystemSettingListRequest,
  SystemSettingModifyRequest,
  UserStatsSnapshotListRequest,
  UserStatsSnapshotListResponse,
  AdminPermissionListRequest,
  AdminPermissionListResponse,
  WithdrawOrderModifyRequest,
} from "./definition";

/** @description request parameter type for postApiV1InnerOrderMake */
export interface PostApiV1InnerOrderMakeOption {
  header?: {
    "x-api-key"?: string;
  };
}

/** @description request parameter type for postApiV1InnerOrderMake */
export interface PostApiV1InnerOrderMakeOption {
  /** @description */
  body: {
    /**
        @description */
    OrderMakeRequest: OrderMakeRequest;
  };
}

/** @description response type for postApiV1InnerOrderMake */
export interface PostApiV1InnerOrderMakeResponse {
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

export type PostApiV1InnerOrderMakeResponseSuccess =
  PostApiV1InnerOrderMakeResponse[200];
/**
 * @description
 *   下单
 * @tags 内部接口-订单
 * @produces application/json
 */
export const postApiV1InnerOrderMake = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/inner/order/make";
  function request(
    option: PostApiV1InnerOrderMakeOption
  ): Promise<PostApiV1InnerOrderMakeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1InnerOrderMakeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postApiV1InnerOrderFinish */
export interface PostApiV1InnerOrderFinishOption {
  header?: {
    "x-api-key"?: string;
  };
}

/** @description request parameter type for postApiV1InnerOrderFinish */
export interface PostApiV1InnerOrderFinishOption {
  /** @description */
  body: {
    /**
        @description */
    OrderMakeRequest: OrderMakeRequest;
  };
}

/** @description response type for postApiV1InnerOrderFinish */
export interface PostApiV1InnerOrderFinishResponse {
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

export type PostApiV1InnerOrderFinishResponseSuccess =
  PostApiV1InnerOrderFinishResponse[200];
/**
 * @description
 *   转出完成通知
 * @tags 内部接口-订单
 * @produces application/json
 */
export const postApiV1InnerOrderFinish = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/inner/order/finish";
  function request(
    option: PostApiV1InnerOrderFinishOption
  ): Promise<PostApiV1InnerOrderFinishResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1InnerOrderFinishResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

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
 * @tags 总管理后台-站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/setting/list";
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
 * @tags 总管理后台-站点配置管理
 * @produces application/json
 */
export const postApiV1AdminStoreSettingModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/setting/modify";
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

/** @description request parameter type for postApiV1AdminStatsSnapshotList */
export interface PostApiV1AdminStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStatsSnapshotList */
export interface PostApiV1AdminStatsSnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    StatsSnapshotListRequest: StatsSnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminStatsSnapshotList */
export interface PostApiV1AdminStatsSnapshotListResponse {
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
    data?: StatsSnapshotListResponse;
  };
}

export type PostApiV1AdminStatsSnapshotListResponseSuccess =
  PostApiV1AdminStatsSnapshotListResponse[200];
/**
 * @description
 *   获取统计列表
 * @tags 总管理后台-统计管理
 * @produces application/json
 */
export const postApiV1AdminStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/stats/snapshot/list";
  function request(
    option: PostApiV1AdminStatsSnapshotListOption
  ): Promise<PostApiV1AdminStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStatsSnapshotListResponseSuccess>;
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

/** @description request parameter type for postApiV1AdminBlacklistModify */
export interface PostApiV1AdminBlacklistModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminBlacklistModify */
export interface PostApiV1AdminBlacklistModifyOption {
  /** @description */
  body: {
    /**
        @description */
    BlacklistModifyRequest: BlacklistModifyRequest;
  };
}

/** @description response type for postApiV1AdminBlacklistModify */
export interface PostApiV1AdminBlacklistModifyResponse {
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

export type PostApiV1AdminBlacklistModifyResponseSuccess =
  PostApiV1AdminBlacklistModifyResponse[200];
/**
 * @description
 *   更新黑名单
 * @tags 总管理后台-黑名单管理
 * @produces application/json
 */
export const postApiV1AdminBlacklistModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/blacklist/modify";
  function request(
    option: PostApiV1AdminBlacklistModifyOption
  ): Promise<PostApiV1AdminBlacklistModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminBlacklistModifyResponseSuccess>;
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

/** @description request parameter type for postApiV1AdminBlacklistDetail */
export interface PostApiV1AdminBlacklistDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminBlacklistDetail */
export interface PostApiV1AdminBlacklistDetailOption {
  /** @description */
  body: {
    /**
        @description */
    BlacklistDetailRequest: BlacklistDetailRequest;
  };
}

/** @description response type for postApiV1AdminBlacklistDetail */
export interface PostApiV1AdminBlacklistDetailResponse {
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
    data?: BlacklistDetailResponse;
  };
}

export type PostApiV1AdminBlacklistDetailResponseSuccess =
  PostApiV1AdminBlacklistDetailResponse[200];
/**
 * @description
 *   获取黑名单详情
 * @tags 总管理后台-黑名单管理
 * @produces application/json
 */
export const postApiV1AdminBlacklistDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/blacklist/detail";
  function request(
    option: PostApiV1AdminBlacklistDetailOption
  ): Promise<PostApiV1AdminBlacklistDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminBlacklistDetailResponseSuccess>;
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
 * @tags 总管理后台-站点汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsDailySnapshotList =
  /* #__PURE__ */ (() => {
    const method = "post";
    const url = "/api/v1/admin/store/stats/daily/snapshot/list";
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

/** @description request parameter type for postApiV1AdminAgentStatsSnapshotList */
export interface PostApiV1AdminAgentStatsSnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminAgentStatsSnapshotList */
export interface PostApiV1AdminAgentStatsSnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    AgentStatsSnapshotListRequest: AgentStatsSnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminAgentStatsSnapshotList */
export interface PostApiV1AdminAgentStatsSnapshotListResponse {
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
    data?: AgentStatsSnapshotListResponse;
  };
}

export type PostApiV1AdminAgentStatsSnapshotListResponseSuccess =
  PostApiV1AdminAgentStatsSnapshotListResponse[200];
/**
 * @description
 *   获取统计列表
 * @tags 总管理后台-代理统计管理
 * @produces application/json
 */
export const postApiV1AdminAgentStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/agent/stats/snapshot/list";
  function request(
    option: PostApiV1AdminAgentStatsSnapshotListOption
  ): Promise<PostApiV1AdminAgentStatsSnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminAgentStatsSnapshotListResponseSuccess>;
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
 * @tags 总管理后台-站点统计管理
 * @produces application/json
 */
export const postApiV1AdminStoreStatsSnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/store/stats/snapshot/list";
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
    OrderListRequest: OrderListRequest;
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

/** @description request parameter type for postApiV1AdminOrderModify */
export interface PostApiV1AdminOrderModifyOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminOrderModify */
export interface PostApiV1AdminOrderModifyOption {
  /** @description */
  body: {
    /**
        @description */
    OrderModifyRequest: OrderModifyRequest;
  };
}

/** @description response type for postApiV1AdminOrderModify */
export interface PostApiV1AdminOrderModifyResponse {
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

export type PostApiV1AdminOrderModifyResponseSuccess =
  PostApiV1AdminOrderModifyResponse[200];
/**
 * @description
 *   更新订单
 * @tags 总管理后台-订单管理
 * @produces application/json
 */
export const postApiV1AdminOrderModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/order/modify";
  function request(
    option: PostApiV1AdminOrderModifyOption
  ): Promise<PostApiV1AdminOrderModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminOrderModifyResponseSuccess>;
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
    OrderDetailRequest: OrderDetailRequest;
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

/** @description request parameter type for postApiV1AdminStatsDailySnapshotList */
export interface PostApiV1AdminStatsDailySnapshotListOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminStatsDailySnapshotList */
export interface PostApiV1AdminStatsDailySnapshotListOption {
  /** @description */
  body: {
    /**
        @description */
    StatsDailySnapshotListRequest: StatsDailySnapshotListRequest;
  };
}

/** @description response type for postApiV1AdminStatsDailySnapshotList */
export interface PostApiV1AdminStatsDailySnapshotListResponse {
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
    data?: StatsDailySnapshotListResponse;
  };
}

export type PostApiV1AdminStatsDailySnapshotListResponseSuccess =
  PostApiV1AdminStatsDailySnapshotListResponse[200];
/**
 * @description
 *   获取汇总统计列表
 * @tags 总管理后台-汇总统计管理
 * @produces application/json
 */
export const postApiV1AdminStatsDailySnapshotList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/stats/daily/snapshot/list";
  function request(
    option: PostApiV1AdminStatsDailySnapshotListOption
  ): Promise<PostApiV1AdminStatsDailySnapshotListResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminStatsDailySnapshotListResponseSuccess>;
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

/** @description request parameter type for postApiV1UserModify */
export interface PostApiV1UserModifyOption {
  header?: {
    Authorization?: string;
    "x-secret-code"?: string;
  };
}

/** @description request parameter type for postApiV1UserModify */
export interface PostApiV1UserModifyOption {
  /** @description */
  body: {
    /**
        @description */
    UserModifyRequest: UserModifyRequest;
  };
}

/** @description response type for postApiV1UserModify */
export interface PostApiV1UserModifyResponse {
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

export type PostApiV1UserModifyResponseSuccess =
  PostApiV1UserModifyResponse[200];
/**
 * @description
 *   更新用户
 * @tags 用户端-用户管理
 * @produces application/json
 */
export const postApiV1UserModify = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/modify";
  function request(
    option: PostApiV1UserModifyOption
  ): Promise<PostApiV1UserModifyResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1UserModifyResponseSuccess>;
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
 *   获取用户关系列表
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
    OrderListRequest1: OrderListRequest;
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
    OrderDetailRequest1: OrderDetailRequest;
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
    WithdrawOrderListRequest: WithdrawOrderListRequest;
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

/** @description request parameter type for postApiV1TestOrderMake */
export interface PostApiV1TestOrderMakeOption {
  /** @description */
  body: {
    /**
        @description */
    OrderMakeRequest1: OrderMakeRequest;
  };
}

/** @description response type for postApiV1TestOrderMake */
export interface PostApiV1TestOrderMakeResponse {
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

export type PostApiV1TestOrderMakeResponseSuccess =
  PostApiV1TestOrderMakeResponse[200];
/**
 * @description
 *   下单
 * @tags 测试接口-订单管理
 * @produces application/json
 */
export const postApiV1TestOrderMake = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/test/order/make";
  function request(
    option: PostApiV1TestOrderMakeOption
  ): Promise<PostApiV1TestOrderMakeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1TestOrderMakeResponseSuccess>;
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
    UserListRequest: UserListRequest;
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

/** @description request parameter type for postApiV1AdminUserDetail */
export interface PostApiV1AdminUserDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminUserDetail */
export interface PostApiV1AdminUserDetailOption {
  /** @description */
  body: {
    /**
        @description */
    UserDetailRequest1: UserDetailRequest;
  };
}

/** @description response type for postApiV1AdminUserDetail */
export interface PostApiV1AdminUserDetailResponse {
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

export type PostApiV1AdminUserDetailResponseSuccess =
  PostApiV1AdminUserDetailResponse[200];
/**
 * @description
 *   获取用户详情
 * @tags 总管理后台-用户管理
 * @produces application/json
 */
export const postApiV1AdminUserDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/user/detail";
  function request(
    option: PostApiV1AdminUserDetailOption
  ): Promise<PostApiV1AdminUserDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminUserDetailResponseSuccess>;
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

/** @description request parameter type for postApiV1AdminGameList */
export interface PostApiV1AdminGameListOption {
  /** @description */
  body: {
    /**
        @description */
    GameListRequest1: GameListRequest;
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
    option: PostApiV1AdminGameListOption
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

/** @description request parameter type for postApiV1AdminGameDetail */
export interface PostApiV1AdminGameDetailOption {
  header?: {
    Authorization?: string;
  };
}

/** @description request parameter type for postApiV1AdminGameDetail */
export interface PostApiV1AdminGameDetailOption {
  /** @description */
  body: {
    /**
        @description */
    GameDetailRequest: GameDetailRequest;
  };
}

/** @description response type for postApiV1AdminGameDetail */
export interface PostApiV1AdminGameDetailResponse {
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
    data?: GameDetailResponse;
  };
}

export type PostApiV1AdminGameDetailResponseSuccess =
  PostApiV1AdminGameDetailResponse[200];
/**
 * @description
 *   获取游戏详情
 * @tags 总管理后台-游戏管理
 * @produces application/json
 */
export const postApiV1AdminGameDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/game/detail";
  function request(
    option: PostApiV1AdminGameDetailOption
  ): Promise<PostApiV1AdminGameDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<PostApiV1AdminGameDetailResponseSuccess>;
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
    WithdrawOrderListRequest1: WithdrawOrderListRequest;
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
