<template>
  <!-- <div class="layout-container">
    <div>顶部导航栏</div>
    <div>侧边导航栏</div>
    <router-view />
  </div> -->
<el-container class="layout-container">
  <el-aside class="aside" width="200px"><app-aside class="aside-menu"></app-aside></el-aside>
  <el-container>
    <el-header class="header">
    <app-header />
    </el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>
<script>
import AppAside from './components/aside'
import AppHeader from './components/header'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.layout-container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .aside{
      background-color: red;
      .aside-menu{
          height: 100%;
      }
    }
    .main{
      background-color: yellow;
    }
}
</style>
