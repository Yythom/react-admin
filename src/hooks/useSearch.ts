/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import logger from "../utils/js_utils/logger";

function useSearch() {
    const [search, _setSearch] = useState({})

    function setSearch(key: string, v: any, flag?: Function) {
        const c = JSON.parse(JSON.stringify(search));
        c[key] = v;
        _setSearch(c)
        logger('search', c)
    }

    return [search, setSearch]
}

export default useSearch;