<template>
  <div>
    <van-nav-bar>
      <slot name="left" slot="left"></slot>
      <slot name="title" slot="title"></slot>
      <slot name="right" slot="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>