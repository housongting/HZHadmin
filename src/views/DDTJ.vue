<template>
    <div>
        <div style="padding:10px;margin-bottom:20px">
            时间范围&ensp;&ensp;&ensp;&ensp;
            <el-date-picker size="small" v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>&ensp;&ensp;&ensp;&ensp;
            <el-button size="mini" type="primary">查询</el-button>
        </div>
        <div class="DDTJ bg_white" style="height:400px">

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>