<template>
    <div id="goods-params">
        <table :cellpadding="0" :cellspacing="0" v-for="(item,i) in goodsParamsDetail.sizes" :key="i+'1'" class="t1">
                <tr v-for="innerItem in item" :key="innerItem+'11'">
                    <td v-for="(innerInnerItem,i) in innerItem" :key="i">{{innerInnerItem}}</td>
                </tr>
        </table>
        <table :cellpadding="0" :cellspacing="0" class="t2">
                <tr v-for="(item,i) in goodsParamsDetail.infos"  :key="i">
                    <td>{{item.key}}</td>
                    <td>{{item.value}}</td>
                </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "GoodsParams",
        props: {
            goodsParamsDetail: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="less">
    #goods-params{
        margin-top: 10px;
        padding-top: 30px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #fff;
    }
    table{
        width: 100%;
        font-size: 16px;
        border-collapse: collapse;
        td,tr{
            color: #333;
        }
        td{
            text-align: center;
        }
        tr{
            height: 40px;
            border-bottom: 1px solid #eee;
        }
    }
    table.t2{
        margin-top: 15px;
        tr td:nth-child(1){
            width: 20%;
          text-align: left;
        }
        tr td:nth-child(2){
            color: #ff699c;
          padding: 5px 0;
        }
    }
  table.t1{
    tr td:nth-child(1){
      text-align: left;
    }
  }
</style>