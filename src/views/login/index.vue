<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt="">
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已经阅读和同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机 号 要给表单绑定 :rules
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号码格式不正确'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '',
        code: ''
      },
      // 校验方法
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', triger: 'blur' },
          // 自定义校验规则validator（验证器）要跟一个变量，且变量要在data中声明
          { validator: checkMobile, triger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', triger: 'blur' },
          // 字符串长度为6位
          { len: 6, message: '验证码长度6位', triger: 'blur' }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.container-login {
  width:100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover ;
  .my-card{
    width: 400px;
    height: 350px;
    background-color:rgba(0, 0, 0, .2);
    // box-shadow: 10px 10px 5px #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
      display: block;
      width: 200px;
      margin: 0 auto 20px;
      }
    }
  }
</style>
