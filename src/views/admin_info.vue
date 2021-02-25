<template>
  <div class="admin_info">
    <div class="bg_white">
      <p style="padding-top:1rem;padding-left:16px">管理员信息</p>
      <el-divider></el-divider>
      <p class="titke">管理员Id：</p>{{id}}
      <el-divider></el-divider>
      <p class="titke">账号：</p>{{account}}
      <el-divider></el-divider>
      <p class="titke">用户组：</p>{{userGroup}}
      <el-divider></el-divider>
      <p class="titke">创建时间：</p>{{ctime}}
      <el-divider></el-divider>
      <p class="titke">管理员头像：</p>

      <el-upload class="avatar-uploader" style="display:inline-block;vertical-align: middle" action="http://work.08321.org/sell/goods.php?a=uploadImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      account: '',
      userGroup: '',
      ctime: '',
      imageUrl: ''
    }
  },
  methods: {
    errorHandler () {
      return true
    },
    handleAvatarSuccess (res) {
      this.imageUrl = this.$baseurl + res.data
      this.axios.post('sell/users.php?a=chgImg', this.qs.stringify({ id: this.id, imgUrl: this.imageUrl }))
        .then(() => {
          // console.log('恭喜你，头像修改成功');
        })
        .catch((error) => {
          console.log(error.data.msg);
        })
    },
    beforeAvatarUpload (file) {
      //const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    }
  },
  created () {
    var id = sessionStorage.getItem('id');
    this.axios.get('sell/users.php?a=readOne&id=' + id)
      .then((res) => {
        // console.log(res);
        var data = res.data.data
        this.id = data.id;
        this.account = data.account;
        this.userGroup = data.userGroup;
        this.ctime = data.ctime;
        this.imageUrl = data.imgUrl;
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style lang="scss" scoped>
.titke {
  margin-left: 30px;
  width: 130px;
  text-align: right;
  display: inline-block;
}
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: inline-block;
}
</style>
