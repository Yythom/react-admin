import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get_table_data } from '../services/test/test';
type mode = 'light' | 'dark' | string
type lang = 'zh_CN' | 'en_US' | string

export interface GlobalStateInterface {
    mode: mode,
    lang: lang,
}

const initialState = {
    mode: 'light',
    lang: 'zh_CN'
}

const reducers = {
    setMode: (s: GlobalStateInterface, t: any) => {
        s.mode = t.payload;
    },
}

// 登入
const globalAsync = createAsyncThunk(
    'user/globalAsync',
    async (data, thunkAPI) => { // data 微信获取到的信息
        console.log(data, '异步接收到的data');
        let result;
        let res = await get_table_data();
        console.log(res);
        if (res) {
            result = res
        }
        return result
    }
)

/**
 * @param {*} builder 
 * 监听异步完成处理state
 */
const extraReducers = {  // 两种写法
    [`${globalAsync.fulfilled}`](state: GlobalStateInterface, action: any) {
        // console.log(action.payload, 'state接受到的payload');
        // state.userInfo = action.payload
    },
}
const Slice = createSlice({
    name: 'global_slice',
    initialState,
    reducers,
    // extraReducers,
})


export const actions = {
    ...Slice.actions,
    globalAsync,
};
export default Slice.reducer;