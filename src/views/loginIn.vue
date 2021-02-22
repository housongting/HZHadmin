<template>
    <div class="loginIn">
        <div class="loginDiv">
            <h2 class="text-center">系统登录</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="mt-20">

                <el-form-item prop="username">
                    <el-input placeholder="请输用户名" prefix-icon="el-icon-date" v-model="ruleForm.username"></el-input>
                </el-form-item>

                <el-form-item prop="pass">
                <el-input  placeholder="请输入密码" prefix-icon="el-icon-date" v-model="ruleForm.pass" show-password></el-input>
                </el-form-item>

                <el-button class="mt-20 btn" @click="btnsubmit('ruleForm')">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    btnsubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           this.$router.push({path:"/home"})
        } else {
          console.log("error submit!!");
          return false;
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