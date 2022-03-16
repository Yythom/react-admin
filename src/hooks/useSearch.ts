/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import logger from "../utils/js_utils/logger";
import Storage from "../utils/js_utils/storage";

function useSearch<T>(initSearch?: any, is_storage_cache_key?: string): [T, (key: string, v: any) => void] {
    const [search, _setSearch] = useState<T>(initSearch)

    const setSearch = useCallback((key: string, v: any,) => {
        const c = JSON.parse(JSON.stringify(search || {}));
        c[key] = v;
        _setSearch(c)
        if (is_storage_cache_key) {
            Storage.setStorageSync(is_storage_cache_key, c)
        }
    }, [search, is_storage_cache_key])
    return [search, setSearch]
}

export default useSearch;