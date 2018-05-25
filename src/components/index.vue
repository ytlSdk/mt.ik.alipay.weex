<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="currentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container" :style="contentStyle">
          <router-view></router-view>
        </div>

        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle">
          <router-view></router-view>
        </div>

        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle">
          <router-view></router-view>
        </div>

        <!-- 第四个页面内容-->
        <div class="item-container" :style="contentStyle">
          <router-view></router-view>
        </div>
      </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, WxcButton, Utils } from 'weex-ui'
import Config from '../config/config'
const routerPage = ['home', 'wealth', 'friend', 'mine']
export default {
  components: { WxcTabBar, WxcButton },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    currentPage: 0
  }),
  methods: {
    currentTabSelected (e) {
      const index = e.page
      if (this.currentPage === index) {
        return
      }
      this.currentPage = index
      let path = routerPage[index]
      this.$router.push({ path: path, name: path })
    }
  },
  created () {
    this.$router.push({ path: 'home', name: 'home' })
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = Utils.env.deviceHeight / Utils.env.deviceWidth * 750
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
  }
}
</script>

<style scoped>
  .greeting {
    text-align: center;
    margin-top: 15px;
    font-size: 35px;
    color: #41B883;
  }
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
  }
</style>
