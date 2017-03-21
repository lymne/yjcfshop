<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux'
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'vux-pop-in'
    }
  },
  components: {
    Loading
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
    }
  }
}
</script>

<style lang="less">
@import '../static/css/reset.less';
@import './style/common.less';
</style>
