<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: 'app',
  components : {
    'm-header' : Header
  }
}
</script>

<style lang="less" scoped>
  
</style>
