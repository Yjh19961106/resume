<template>
    <div>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
</template>
 
<script>
  import {Button} from 'vant'
  export default {
    name: 'VantComponent',
    //注册组件
    components:{
      [Button.name]: Button
    }
  }
</script>
 
<style scoped>
 
</style>