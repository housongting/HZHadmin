<template>
  <div class="loginIn">
    <div class="loginDiv">
      <h2 class="text-center">系统登录</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="mt-20">

        <el-form-item prop="account">
          <el-input placeholder="请输用户名" prefix-icon="el-icon-date" v-model="ruleForm.account"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-date" v-model="ruleForm.password" show-password></el-input>
        </el-form-item>

        <el-button class="mt-20 btn" @click="btnsubmit('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        password: "",
        account: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    btnsubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios.post('sell/users.php?a=login', 'account=' + this.ruleForm.account + '&password=' + this.ruleForm.password).then((res) => {
            if (res.data.code == 0) {
              //console.log(res);
              sessionStorage.setItem('id', res.data.data.id)
              sessionStorage.setItem('token', res.data.token)
              sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
              this.$router.push({ path: '/home' })
            } else {
              this.$message.error(res.data.msg);
            }
          })
        } else {
          return false
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.mt-20 {
  margin-top: 20px;
}
.loginIn {
  background-color: rgb(14, 32, 56);
  height: 100%;
  .loginDiv {
    width: 300px;
    height: 240px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    /deep/ input {
      background-color: rgb(14, 32, 56);
    }
    .btn {
      display: block;
      width: 100%;
      background: #409eff;
      color: #fff;
    }
    h2 {
      color: #fff;
      font-size: 24px;
      letter-spacing: 2px;
    }
  }
}
</style>