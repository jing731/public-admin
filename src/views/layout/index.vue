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
      <div>
        <span class="el-icon-s-fold"></span>
      <span>欢迎你</span>
      </div>
      <div>
      <el-dropdown>
     <div class="avater-wape">
       <img class="avater" src="http://toutiao.meiduo.site/FiTOCsr2PmVWXc545yUote4cEr3R" alt="">
     <span>个人中心</span>
     <i class="el-icon-arrow-down el-icon--right"></i>
     </div>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-header>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>
<script>
import AppAside from './components/aside'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {

  }
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
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      // background-color: pink;
      border-bottom: 1px solid red;
    }
    .main{
      background-color: yellow;
    }
    .avater-wape{
      display: flex;
      align-items: center;
      .avater{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
}
</style>
