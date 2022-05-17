/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react";
import { QueryFunctionContext, QueryKey, useInfiniteQuery, useQuery as originQuery } from "react-query"
import useSearch from "./useSearch";

const useQuery = <T, P>(
    queryKey = '',
    http: (data: any) => Promise<any>,
    initParams: P,
    options?: {
        onwerRun?: boolean,
        onSuccess?: (data: T) => void,
        onError?: () => void,
        cacheTime?: number // mm
    }
) => {
    const [params, setParams] = useSearch<P>(initParams)

    const {
        data,
        dataUpdatedAt,
        isError,
        isFetched,
        isFetchedAfterMount,
        isFetching,
        isIdle,
        isLoading: loading,
        isLoadingError,
        isPlaceholderData,
        isPreviousData,
        isRefetchError,
        isRefetching,
        isStale,
        isSuccess,
        refetch,
        remove,
        status,
    } = originQuery<T>([queryKey, params],
        async (_key: QueryFunctionContext<QueryKey, any>) => {
            const _params: P = _key.queryKey[1] as P
            return await http({ body: _params })
        },
        {
            enabled: options?.onwerRun || true,
            onError: () => {
                options?.onError?.()
            },
            onSuccess: (result) => {
                options?.onSuccess?.(result)
            },
            cacheTime: options?.cacheTime || 2 * 60 * 1000
        })

    // console.log(status, 'status');

    /** Effect FN */
    const fetchPage = (page?: number, _params?: P) => {
        if (!(params as any)?.page) throw Error('page not')
        const req = { ...(_params || params), page: page || (params as any)?.page + 1 }
        if (options?.onwerRun) {
            refetch({ queryKey: [queryKey, req] })
        }
        setParams(req)
    }

    return [
        data,
        params,
        setParams,
        /** effect */
        {
            refetch,
            fetchPage,
            isFetching,
            loading,
        }, // status

        /** paging */
    ]
}
export {
    useQuery
}