<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="bg_white">
          <img src="../assets/imgs/pic2.png" alt="">
          <div>
            <h3>总订单</h3>
            <strong>102400</strong>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg_white">
          <img src="../assets/imgs/pic3.png" alt="">
          <div>
            <h3>总销售额</h3>
            <strong>102400</strong>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg_white">
          <img src="../assets/imgs/pic4.png" alt="">
          <div>
            <h3>今日订单数</h3>
            <strong>102400</strong>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bg_white">
          <img src="../assets/imgs/pic5.png" alt="">
          <div>
            <h3>今日销售额</h3>
            <strong>102400</strong>
          </div>
        </div>
      </el-col>
    </el-row>
    
    <div id="indexEcharts">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg_white{
  display:flex;
  justify-content:space-around;
  padding:10px;
  box-sizing: border-box;
  align-items:center;
  img{
    height:70px;
  }
  h3{
    color: #CFCFCF;
  }
  strong{
      color:#333333;
  }
}
#indexEcharts{
   height:400px;
   margin-top:20px;
   background:#fff;
}
</style>


