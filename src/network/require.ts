import axios, {AxiosRequestConfig} from 'axios'

interface MyResponseType<T = any> {
    code: number;
    message: string;
    data: T;
}

const errorHandler = (error: any) => {
    const status: number = error.response.status
    switch (status) {
        case 400:
            error.message = '请求错误'
            break
        case 401:
            error.message = '未授权，请登录'
            break
        case 403:
            error.message = '拒绝访问'
            break
        case 404:
            error.message = `请求地址出错: ${error.response.config.url}`
            break
        case 408:
            error.message = '请求超时'
            break
        case 500:
            error.message = '服务器内部错误'
            break
        case 501:
            error.message = '服务未实现'
            break
        case 502:
            error.message = '网关错误'
            break
        case 503:
            error.message = '服务不可用'
            break
        case 504:
            error.message = '网关超时'
            break
        case 505:
            error.message = 'HTTP版本不受支持'
            break
        default:
            break
    }
    return Promise.reject(error)
}
const instance = axios.create({
    baseURL: "https://netease-cloud-music-api-wheat-chi.vercel.app/",
    withCredentials: true,  // 允许请求携带 cookie
    // validateStatus: function (status) {
    //     // 配置可以放行的状态码
    //     return status <= 503;
    // }
});
const request = async <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
    try {
        const {data} = await instance.request<MyResponseType<T>>(config)
        return data
    } catch (error: any) {
        console.error(error.message)
        return {
            code: -1,
            message: error.message,
            data: null as any
        }
    }
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return errorHandler(error)
    // return Promise.reject(error)
});
export default request
