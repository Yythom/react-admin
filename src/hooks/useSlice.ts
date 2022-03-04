import { shallowEqual, useDispatch, useSelector } from "react-redux";

const useSlice = (sliceKey = 'global_slice',) => {
    const slice = useSelector((s: any) => s[sliceKey], shallowEqual)
    const dispatch = useDispatch();
    return [
        slice,
        dispatch,
    ]

}

export default useSlice;