import logger from '../../utils/js_utils/logger';
import request from '../config/index'
import { TablItemInterface } from './testInterface';

const get_table_data = async (data
    ?: {
        page: number,
        pageSize: number
    }) => {
    const result = await request<TablItemInterface[]>({
        method: 'get',
        url: '/test',
        params: {
            page: data?.page ?? 1,
            pageSize: data?.pageSize ?? 10,
        }
    })
    logger('data', data)
    return result;
}


export {
    get_table_data,
}

