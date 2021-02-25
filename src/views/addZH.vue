<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加账号</span>
      </div>
      <div class="item">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" style="width:420px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.number="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="用户组">
            <el-select v-model="ruleForm.userArr" placeholder="请选择用户组" style="width: 100%">
              <el-option label="超级管理员" value="超级管理员"></el-option>
              <el-option label="中级管理员" value="中级管理员"></el-option>
              <el-option label="普通管理员" value="普通管理员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btnTj">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
const querystring = require('querystring');
export default {
  data () {
    return {
      ruleForm: {
        username: "",
        password: "",
        userArr: ""
      },
    };
  },
  created () {

  },
  mounted () {
  },
  methods: {
    btnTj () {
      var params = {
        'account': this.ruleForm.username,
        'password': this.ruleForm.password,
        'userGroup': this.ruleForm.userArr,
      }

      this.axios.post('sell/users.php?a=add', querystring.stringify(params)).then((res) => {
        if (res.data.code == 0) {
          this.$message({
            message: '恭喜你，添加账户成功',
            type: 'success'
          });
        } else {
          this.$message.error(res.data.msg);
        }

      })

    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>