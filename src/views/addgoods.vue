<template>
    <div class="bg_white">
        <div style="padding:10px;border-bottom:1px solid #ccc">添加商品</div>
        <div style="padding:15px 0">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="商品名称" style="width:317px">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活商分类">
                    <el-select v-model="form.region" placeholder="请选择商品分类">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品特色">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="新品上市" name="type"></el-checkbox>
                        <el-checkbox label="第二单半价" name="type"></el-checkbox>
                        <el-checkbox label="主打产品" name="type"></el-checkbox>
                        <el-checkbox label="火爆产品" name="type"></el-checkbox>
                        <el-checkbox label="祖传手艺" name="type"></el-checkbox>
                        <el-checkbox label="来源四川" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="是否促销">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="是否促销">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="促销"></el-radio>
                        <el-radio label="不促销"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="食品规格">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="单规格"></el-radio>
                        <el-radio label="多规格"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="包装费">
                    <el-input-number v-model="num" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input-number v-model="num" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="商品描述" style="width:400px">
                    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即创建</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        textarea:'',
      imageUrl: "",
      num: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .avatar-uploader .el-upload {
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
  display: block;
}
</style>