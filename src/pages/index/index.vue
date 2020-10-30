<template>
  <view class="index">
    <view class="today">
      <view class="top flex row">
        <view class="title-wrap flex row">
          <view class="title">今天你思考了吗？</view>
          <view class="btn">第{{result.time}}天</view>
        </view>
        <view class="time-wrap">
          <view>2020-10-22 04:36:26</view>
          <view class="week">星期四</view>
        </view>
      </view>
    </view>
    <TodayList :todayList='todayList'></TodayList> 
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { getResultData_servers } from '../../../servers/servers'
import TodayList from '../../components/TodayList'
export default {
  name: 'Index',
  components: {
    TodayList
  },
  data () {
    return {
      todayList: [],
      result: {
        time: 1
      }
    }
  },
  methods: {
    async getToday () {
      const res = await getResultData_servers({ mod: 'interview', ctr: 'issues', act: 'today' })
      Taro.showLoading({
        title: '加载中',
      })
      if (typeof res === 'string') {
        Taro.hideLoading()
        console.log(res)
        return Taro.showToast({
          title: res,
          icon: 'none',
          duration: 2000
        })
      }
      const { error, result: { today }, result } = res
      if (error === 0) {
        this.todayList = today
        this.result = result
        Taro.hideLoading()
      }
    }
  },
  created () {
    this.getToday()
  }
}
</script>

<style lang='scss'>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.today {
  padding: 20px 20px 0 20px;
  background: #fff;
  .top {
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e9f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time-wrap {
      display: flex;
      align-items: center;
      color: #999;
      > view {
        font-size: 20px;
      }
      .week {
        margin-left: 10px;
      }
    }
    .title-wrap {
      display: flex;
      align-items: center;

      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
      .btn {
        width: 100px;
        height: 30px;
        margin-left: 12px;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        background: #fd7b2c;
        color: #fff;
        border-radius: 25px;
      }
    }
  }
}
</style>
