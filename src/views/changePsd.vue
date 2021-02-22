<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>修改密码</span>
            </div>
            <div class="item">
                <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" style="width:420px" class="demo-ruleForm">
                    <el-form-item label="原密码" prop="oldPsd">
                        <el-input type="password" v-model="ruleForm.oldPsd" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPsd">
                        <el-input v-model.number="ruleForm.newPsd"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="confirmPsd">
                        <el-input v-model.number="ruleForm.confirmPsd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">确定</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        oldPsd: "",
        newPsd: "",
        confirmPsd: ""
      }
    };
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