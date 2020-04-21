<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-header"></div>
    <el-form class="login-from" ref="form" :model="user">
  <el-form-item>
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <el-form-item >
    <el-input v-model="user.code"  placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item >
   <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>
  <el-form-item >
    <el-button class="login-btn" type="primary" :loading="LoginLoading" @click="onLogin">登录</el-button>
  </el-form-item>
</el-form></div>
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        modile: '',
        code: ''
      },
      checked: false,
      LoginLoading: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取用户的数据
      const user = this.user
      // 请求中 不能继续发送请求
      this.LoginLoading = true
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => {
        // 登录成功
        console.log(res)
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })
        // 请求成功  load关闭
        this.LoginLoading = false
      }).catch(err => {
        // 登录失败
        console.log('登录失败', err)
        this.$message.error('登录失败，手机号或验证码错误')
        // 请求失败  load关闭
        this.LoginLoading = false
      })
    }
  }
}
</script>
<style scoped lang='less'>
.login-container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form-wrap{
    background-color: #fff;
    padding: 50px;
    min-width: 400px;
   .login-header{
    background: url("./logo_index.png");
    height: 57px;
    width: 400px;
    margin-bottom: 30px;
  }
  .login-from{
    .login-btn{
      width: 100%;
    }
  }
  }
}
</style>
