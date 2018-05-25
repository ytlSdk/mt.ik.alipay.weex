<template>
  <list :style="listHeight">
    <header>
      <wxc-minibar background-color="#009ff0" text-color="#FFFFFF" left-button="" title="我的" right-text="设置"
        @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    </header>
    <cell v-for="(item, index) of mineLi" :key="index" class="row">
      <list>
        <cell v-for="(v, ind) of item.details" :key="ind" @click="moreInfoClick(v.id)">
          <div class="item" v-if="v.id === 'me'">
            <div class="item-detail">
              <div style="justify-content: center; item-align: center; margin-right: 10px;">
                <wxc-icon name="success" @wxcIconClicked="moreInfoClick(v.id)"></wxc-icon>
              </div>
              <div>
                <text>{{ v.name }}</text>
                <text>{{ v.phone }}</text>
              </div>
            </div>
            <div class="item-detail">
               <text>{{ v.text }}</text>
              <wxc-icon name="more" @wxcIconClicked="moreInfoClick(v.id)"></wxc-icon>
            </div>
          </div>
          <div class="item" v-else>
            <text>{{ v.name }}</text>
            <div class="item-detail">
              <text>{{ v.text }}</text>
              <wxc-icon name="more" @wxcIconClicked="moreInfoClick(v.id)"></wxc-icon>
            </div>
          </div>
        </cell>
      </list>
    </cell>
  </list>
</template>

<script>
import { WxcMinibar, WxcIcon, Utils } from 'weex-ui'

export default {
  components: {
    WxcMinibar,
    WxcIcon
  },
  data () {
    return {
      mineLi: [
        {
          id: 'info',
          details: [{
            id: 'me',
            icon: 'icon',
            name: '许广宇',
            phone: '185****912',
            text: ''
          }, {
            id: 'vip',
            name: '蚂蚁会员',
            text: '999 积分'
          }]
        },
        {
          id: 'money',
          details: [{
            id: 0,
            name: '账单',
            text: ''
          }, {
            id: 1,
            name: '总资产',
            text: '账户安全险保障中'
          }, {
            id: 2,
            name: '余额',
            text: '0.00元'
          }]
        },
        {
          id: 'money',
          details: [{
            id: 3,
            name: '芝麻信用',
            text: ''
          }, {
            id: 4,
            name: '保险服务',
            text: ''
          }, {
            id: 5,
            name: '花呗',
            text: ''
          }]
        }
      ]
    }
  },
  methods: {
    minibarRightButtonClick () {
      console.log('111')
    },
    moreInfoClick (type) {
      this.$router.push({ path: 'personalInfo', name: 'personalInfo' })
      console.log(type)
    }
  },
  created () {
    if (!this.listHeight) {
      const tabPageHeight = Utils.env.getPageHeight()
      this.listHeight = { 'height': (tabPageHeight - 120) + 'px' }
    }
  }
}
</script>

<style scoped>
  .list {
    height: 900px;
  }
  .count {
    font-size: 48px;
    margin:10px;
  }
  .indicator {
    height: 40px;
    width: 40px;
    color:#45b5f0;
  }
  .row {
    background: #ffffff;
    margin-bottom: 25px;
  }
  .item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 100px;
    padding:20px;
  }
  .item:active {
     background-color: #00BDFF;
   }
  .item-detail {
    flex-direction: row;
  }
</style>
