<template>
   <el-header class="header-container">
      <div>
        <span class="el-icon-s-fold"></span>
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
    <el-dropdown-item>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-header>
</template>
<script>
import { getUserProfile } from '@/api/user'
export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {
      user: {}
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
    }
  }
}
</script>
<style scoped lang="less">
.header-container{
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
