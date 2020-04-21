<template>
  <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-header"></div>
    <el-form class="login-from" ref="login-form" :model="user" :rules="formRules">
  <el-form-item prop="mobile">
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <el-form-item prop="code">
    <el-input v-model="user.code"  placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item prop="agree">
   <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>
  <el-form-item >
    <el-button class="login-btn" type="primary" :loading="LoginLoading" @click="onLogin">登录</el-button>
  </el-form-item>
</el-form></div>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        agree: false
      },
      // checked: false,
      LoginLoading: false,
      formRules: {
        // 注意：此时只是验证手机号和验证码的必填与格式的正确与否
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|5|6|8|9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'blur' }
        ],
        agree: [
          // value 就是结果表达式 true 或 false
          {
            validator: (rule, value, callback) => {
            // true
              if (value) {
                callback()
              } else {
                callback(new Error('请遵守用户协议'))
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取用户的数据
      // const user = this.user
      // 请求中 不能继续发送请求
      this.$refs['login-form'].validate(valid => {
        if (!valid) {
          return
        }
        // 校验成功，登录
        // 调用login方法
        this.login()
      })
    },
    login () {
      this.LoginLoading = true
      // 注意 需要手机号码，验证码，同意规则之后进行发送请求
      // 否则不发送请求
      // 不要忘记传参
      login(this.user).then(res => {
        // 登录成功
        console.log(res)
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })
        // 请求成功  load关闭
        // 登录成功，跳转到首页
        this.LoginLoading = false
        // 注意 利用配路由的方式
        this.$router.push({
          name: 'home'
        })
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
