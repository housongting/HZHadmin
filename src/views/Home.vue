<template>
  <div class="home">
    <el-container>
      <el-aside width="230px">
        <div class="flex align_center justify_center" style="height:60px">
          <img src="../assets/imgs/pic1.png" alt="">
          <h2 class="ml_5" style="color:#fff">外卖商家中心</h2>
        </div>
        <el-menu default-active="/home" unique-opened router collapse-transition class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">

          <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>

          <el-menu-item index="/home/orderManage">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/goodlist">商品列表</el-menu-item>
              <el-menu-item index="/home/addgoods">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">店铺管理</span>
          </el-menu-item>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/ZHList">账号列表</el-menu-item>
              <el-menu-item index="/home/addZH">添加账号</el-menu-item>
              <el-menu-item index="/home/changePsd">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>销售统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/goodsStatistics">商品统计</el-menu-item>
              <el-menu-item index="/home/DDTJ">订单统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <div class="rightBar flex align_center">
          <div>
            <span style="font-weight:bold">首页</span>
            <span v-for="(item,index) in this.$route.meta" :key="index">/{{item}}</span>
          </div>
          <div class="flex align_center">
            <span>欢迎你！小貂蝉</span>
            <img class="ml_5" src="../assets/imgs/pic6.png" height="40" width="40" alt="">
          </div>
        </div>
        <div class="contain">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      firstTitle: "第一标题",
      secondTitle: "第二标题"
    };
  },
  components: {},
  created() {
    console.log(11)
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      /deep/ .el-menu-item-group__title {
        display: none;
      }
      /deep/ .el-menu-item-group .el-menu-item {
        padding-left: 49px !important;
      }
      height: 100%;
      background: #304156;
      .el-menu {
        border-right: 0;
      }
    }
    .el-main {
      height: 100%;
      padding: 0;
      .rightBar {
        height: 60px;
        padding: 0 10px;
        justify-content: space-between;
      }
      .contain {
        height: calc(100% - 60px);
        background: #f0f2f5;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>




