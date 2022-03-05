/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import logger from "../utils/js_utils/logger";

function useSearch(initSearch = {})
    : [Object, (key: string, v: any, flag?: Function | undefined) => void] {
    const [search, _setSearch] = useState(initSearch)

    const setSearch = useCallback((key: string, v: any, flag?: Function) => {
        const c = JSON.parse(JSON.stringify(search));
        c[key] = v;
        _setSearch(c)
        logger('search', c)
    }, [search])

    return [search, setSearch]
}

export default useSearch;