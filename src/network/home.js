import {
    request
} from './request'

//获取首页轮播图和推荐数据
export function getHomeViews() {
    return request({
        method:'get',
        url:'/home/multidata'
    })
}