import useRequest from "./useRequest";

function useTable<T, P = undefined>(
    promise: (data: any) => Promise<any>,
    initParams = {},
): {
    params: P | undefined;
    setParams: (key: string, v: any) => void;
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
        initParams,
    })

    return {
        params,
        setParams,
        tableData: ret,
        fetch,
        loading
    }
}


export default useTable;