<template>
  <div class="home">
    <el-container>
      <el-aside width="230px">
        <div class="flex align_center justify_center" style="height:60px">
          <img src="../assets/imgs/pic1.png" alt="">
          <h2 class="ml_5" style="color:#fff">外卖商家中心</h2>
        </div>
        <el-menu :default-active="this.$route.path" unique-opened router collapse-transition class="el-menu-vertical-demo" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">

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
            <span>欢迎你！{{username}}</span>
            <el-popover placement="bottom" width="80" trigger="click">
              <div class="text item" style="text-align:center" @click="jump">管理员信息</div>
              <el-divider></el-divider>
              <div class="text item" style="text-align:center" @click="backAdmin">退出系统</div>
              <el-avatar class="ml_5" slot="reference" small="medium" :src="imgUrl"></el-avatar>
            </el-popover>

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
  data () {
    return {
      username: '',
      imgUrl: ''
    };
  },
  components: {

  },
  created () {
    var id = sessionStorage.getItem('id');
    var token = sessionStorage.getItem('token');
    var userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.username = userInfo.account;
    this.imgUrl = userInfo.imgUrl;
    // console.log(userInfo);
    // //验证登录状态-----没有登录token就切换到登录页面
    this.axios.get('sell/users.php?a=chklogin', { params: { id, token } })
      .then((res) => {
        if (res.data.code == 0) {
          console.log('登录成功')
        } else {
          this.$router.push({ path: '/' })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // this.axios.get('sell/users.php?a=chklogin&id=' + id + '&token=' + token)
    //   .then((res) => {
    //     console.log(res)
    //   })

  },
  mounted () { },
  methods: {
    jump () {
      this.$router.push({ path: '/home/admin_info' })
    },
    backAdmin () {
      sessionStorage.clear();
      this.$router.push({ path: '/' })
    }
  }
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




