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
    <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form></div>
  </div>
</template>
<script>
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
      checked: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit () {
      console.log('11')
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
