<template>
  <div id="tabcontrol">
    <div
      class="item"
      v-for="(item,index) in controlList"
      :key="index"
      @click="changeActiveIndex(index)"
    >
      <span :class="{active:activeIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    changeActiveIndex(d) {
      this.activeIndex = d;
      this.$emit('tabClick',d)  
    }
  },
  props: {
    controlList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang='less' scoped>
#tabcontrol {
  background-color: #fff;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 14px;
    span {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
      padding-bottom: 4px;
    }
    span.active {
      border-bottom: 2px solid #ff699c;
      color: #ff699c;
    }
  }
}
</style>