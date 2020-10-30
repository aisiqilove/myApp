<template>
  <view class="list">
    <view class="list-item"
          v-for="item in todayList"
          :key="item.id">
      <view class="label"
            :data-label='item.label'
            :class="{css: item.label === 'css', js: item.label === 'js', html: item.label === 'html'}">[{{item.label}}]</view>
      <view class="title">{{item.title}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['todayList'],
}
</script>

<style lang="scss">
.list {
  padding: 0 20px;
  .list-item {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    .label {
      margin-right: 5px;
      font-size: 21px;
      color: #70b451;
      &.css {
        color: #f0c227;
      }
      &.html {
        color: #486ae9;
      }
      &.js {
        color: #f3682f;
      }
    }
    .title {
      font-size: 21px;
      max-width: 88%;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
