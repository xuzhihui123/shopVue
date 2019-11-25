import {
    request
} from 'network/request'

//获取首页轮播图和推荐数据
export function getHomeViews() {
    return request({
        method:'get',
        url:'/home/multidata'
    })
}

//获取商品数据
export function getHomeGoodsViews(type,page){
    return request(
        {
            method:'get',
            url:'/home/data',
            params:{
                type,
                page
            }
        }
    )
}