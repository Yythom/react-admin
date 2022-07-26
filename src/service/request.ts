import axios from 'axios'
import { baseURL, timeout } from '../config'
import { Storage } from '../utils'

function request<T>(url: string, config: any, headers?: Record<string, any>): Promise<T | undefined> {
    const instance = axios.create({
        baseURL: baseURL,
        timeout: timeout,
        method: config?.method || 'POST',
        // data: config.body || {},
        headers: headers || {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Storage.getStorageSync('token')
        },
    })

    //! 数据过滤
    instance.interceptors.response.use(res => {
        return res.data
    })

    //请求拦截
    instance.interceptors.request.use(function (res) {
        // removePending(config); //在一个axios发送前执行一下判定操作，在removePending中执行取消操作
        /**
         * @addToken
         */
        return res
    }, function (error) {

        return Promise.reject(error)
    })

    // 此处封装一层捕捉错误
    return new Promise((resolve, reject) => {
        const conf = { url, ...config, data: config.body }
        delete conf.body;
        instance(conf).then((res: any) => {
            if (res) {
                if (res?.code === 0) {
                    resolve(res.data)
                }
                reject(res?.msg)
            }
        }).catch(err => {
            if (err.response) {

            }
            resolve(undefined);
        })
    })
}
export default request;
