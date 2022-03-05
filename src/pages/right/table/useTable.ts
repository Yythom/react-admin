/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useSearch from "../../../hooks/useSearch";
import ProColums from "./columns";

const useTable = (promise: Function, initParams = {},) => {
    const [params, setParams] = useSearch(initParams);
    const [tableData, setTableData] = useState([]);

    const fetch = async () => {
        const ret = await promise(params);
        setTableData(ret);
    };

    useEffect(() => {
        console.log('params:::::: ', params);
        if (params) fetch()
    }, [params])

    return {
        params,
        setParams,
        tableData
    }
}

export default useTable;