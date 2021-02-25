<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号列表</span>
      </div>
      <div class="text item">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column label="id" width="120">
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column prop="account" label="账号" width="120">
          </el-table-column>
          <el-table-column prop="password" label="密码">
          </el-table-column>
          <el-table-column prop="userGroup" label="用户组">
          </el-table-column>
          <el-table-column prop="ctime" label="创建时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin-top:15px">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pagesizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
        <div class="block" style="margin-top:15px">
          <el-button size="mini" type="danger">批量删除</el-button>
          <el-button size="mini" type="primary" style="margin-left:20px" @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,  //当前页
      pagesizes: [2, 4, 6, 10],  //每页条数范围
      total: 0,
      pageSize: 2,
      tableData: [],
      multipleSelection: []
    };
  },
  created () {
    this.showList()
  },
  mounted () {
  },
  methods: {
    showList () {
      console.log('当前页：' + this.currentPage)
      console.log('当前页条数：' + this.pagesize)
      this.axios.get('sell/users.php?a=list&currentPage=' + this.currentPage + '&pageSize=' + this.pageSize).then((res) => {
        if (res.data.code == 0) {
          this.total = parseInt(res.data.total);  //总数
          this.tableData = res.data.data
        }
      })
    },
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    handleSelectionChange (val) {
      //console.log(val)
      this.multipleSelection = val;
    },
    toggleSelection () {
      this.$refs.multipleTable.clearSelection();
    },
    handleSizeChange (val) {
      this.pageSize = val;
      this.showList()
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.showList()
    }
  }
};
</script>

<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>