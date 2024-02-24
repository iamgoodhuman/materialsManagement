<template>
  <div class="query">
    <h3>保险</h3>
    <el-button>查询</el-button>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="id" width="180">
        </el-table-column>
        <el-table-column prop="name" label="保险公司">
        </el-table-column>
        <el-table-column prop="address" label="保险名称">
        </el-table-column>
        <el-table-column prop="address" label="保险类型">
        </el-table-column>
        <el-table-column prop="address" label="保险日期">
        </el-table-column>
        <el-table-column prop="address" label="被保险人">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
  
<script>
import service from "@/utils/request";
export default {
  name: "Query",
  data() {
    return {
      tableData: []
    };
  },
  methods: {


  },
};
</script>
  
<style scoped></style>
  