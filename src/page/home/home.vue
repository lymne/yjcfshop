<template>
  <div>
    <h1>home</h1>
    {{todos}}
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['todos'])
    }
  }
</script>
<style lang="less">

</style>
