import logger from '../utils/js_utils/logger';
import request from './config/index'

const get_table_data = async (data: {
    page: number,
    pageSize: number
}) => {
    console.log('ZHIXL');

    const result = await request({
        method: 'get',
        url: '/test',
        params: {
            page: data.page ?? 1,
            pageSize: data.pageSize ?? 10,
        }
    })
    logger('data', data)
    return result;
}


export {
    get_table_data,
}

