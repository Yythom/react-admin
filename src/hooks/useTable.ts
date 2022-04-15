/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeInfo } from "@douyinfe/semi-ui/lib/es/table";
import { useLayoutEffect } from "react";
import useRequest from "./useRequest";
useTable.params = {};
useTable.setParams = (key: any, v?: any) => { };
useTable.initPage = {
    page: 1,
    page_size: 10
};
function useTable<T, P = undefined>(
    promise: (data: any) => Promise<any>,
    option: {
        start_owner?: boolean,
        initParams: {},
    },
): {
    params: P | undefined;
    setParams: (key: string | P, v?: any) => void;
    tableData: T | undefined;
    fetch: () => Promise<void>;
    loading: boolean
} {
    const [
        ret,
        fetch,
        setParams,
        loading,
        params
    ] = useRequest<T, P>(promise, {
        initParams: option?.initParams,
        start_owner: option?.start_owner,
    })
    useLayoutEffect(() => {
        useTable.params = params as any
    }, [params])
    useLayoutEffect(() => {
        fetch();
        useTable.setParams = setParams as any
    }, [])

    return {
        params,
        setParams,
        tableData: ret,
        fetch,
        loading
    }
}

// table 自定义search
useTable.search = function (key: string | Record<string, any>, v?: any) {
    const origin = useTable.params as any;
    /** 自定义操作 */
    const _params: any = {
        ...origin,
        page: useTable.initPage,
        search: {
            ...origin?.search,
        }
    }
    if (typeof key === 'object') {
        _params.search = { ...key }
    } else _params.search[key] = v
    useTable.setParams(_params);
}

// table云端排序
useTable.onTableChange = (e: ChangeInfo<any>) => {
    const { sorter } = e;
    if (sorter) {
        const { sortOrder, dataIndex } = sorter;
        const sortRet: any = {}
        sortRet[dataIndex] = sortOrder ? `${sortOrder}`?.replace('end', '') : '';
        useTable.setParams({
            ...useTable.params,
            page: useTable.initPage,
            sort: sortRet
        })
        return sortOrder
    }
};

export default useTable;