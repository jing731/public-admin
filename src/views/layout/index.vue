<template>
  <!-- <div class="layout-container">
    <div>顶部导航栏</div>
    <router-view />
    <div>侧边导航栏</div>
    <router-view></router-view>
  </div> -->
<el-container class="layout-container">
  <el-aside class="aside" width="auto">
    <app-aside :is-collapse = "isCollapse" class="aside-menu"></app-aside>
    </el-aside>
  <el-container>
    <el-header class="header">
      <div>
        <span
        @click = 'isCollapse = !isCollapse'
        :class= "{
          'el-icon-s-fold':isCollapse,
          'el-icon-s-unfold':!isCollapse
          }"
        ></span>
      <span>欢迎你</span>
      </div>
      <div>
      <el-dropdown>
     <div class="avater-wape">
       <img class="avater" :src="user.photo" alt="">
     <span>{{ user.name }}</span>
     <i class="el-icon-arrow-down el-icon--right"></i>
     </div>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item @click.native="LogOut">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
</template>
<script>
import AppAside from './components/aside'
import { getUserProfile } from '@/api/user'
export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      user: {},
      isCollapse: true // 默认不展开
    }
  },
  computed: {},
  watch: {},
  created () {
    this.LocaluserPrifile()
  },
  mounted () {},
  methods: {
    LocaluserPrifile () {
      getUserProfile().then(res => {
        // console.log(res) // 获取请求结果
        this.user = res.data.data
      }).then(err => {
        console.log(err)
      })
    },
    LogOut () {
      this.$confirm('此操作将永久退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('user')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
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
    .main{
      background-color: yellow;
    }
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
      // background-color: pink;
  border-bottom: 1px solid red;
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
