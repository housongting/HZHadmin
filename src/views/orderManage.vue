<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="订单号">
                <el-input size="small" v-model="formInline.user" placeholder="订单号"></el-input>
            </el-form-item>
            <el-form-item label="收货人">
                <el-input size="small" v-model="formInline.user" placeholder="收货人"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input size="small" v-model="formInline.user" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select size="small" v-model="formInline.region" placeholder="订单状态">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div style="margin-bottom:15px">
            选择时间&ensp;&ensp;
            <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
            &ensp;&ensp;
            <el-button type="primary" size="small">查询</el-button>
        </div>
        <div>
            <el-table :data="tableData" border style="width: 100%;margin-bottom:15px">
                <el-table-column fixed prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="province" label="省份" width="120">
                </el-table-column>
                <el-table-column prop="city" label="市区" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="300">
                </el-table-column>
                <el-table-column prop="zip" label="邮编" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template>
                        <el-button type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      currentPage4: 4,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 15px;
}
</style>