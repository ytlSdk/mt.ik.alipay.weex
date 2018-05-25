<template>
  <div class="wrapper" v-if="!isShow">
    <!-- <text class="greeting">{{ loadText }} s</text> -->
    <image :src="logo" class="logo" />
    <wxc-part-loading :show="!isShow"></wxc-part-loading>
    <!-- <wxc-button text="跳过" @wxcButtonClicked="overLoading"></wxc-button> -->
  </div>
  <router-view v-else></router-view>
</template>

<script>
import { WxcPartLoading, WxcButton } from 'weex-ui'

export default {
  name: 'App',
  components: { WxcPartLoading, WxcButton },
  data: () => ({
    logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
    isShow: false,
    interval: 0,
    loadText: 1
  }),
  methods: {
    overLoading () {
      this.isShow = !this.isShow
      clearInterval(this.interval)
    }
  },
  created () {
    this.interval = setInterval(() => {
      if (this.loadText <= 1) {
        clearInterval(this.interval)
        this.isShow = !this.isShow
      } else {
        --this.loadText
      }
    }, 1000)
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 15px;
    font-size: 35px;
    color: #41B883;
  }
</style>
