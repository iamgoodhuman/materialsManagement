<template>
  <div class="query">
    <h3>保险</h3>
    <el-button @click="query">查询</el-button>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="180">
        </el-table-column>
        <el-table-column prop="insure_company" label="保险公司">
        </el-table-column>
        <el-table-column prop="insure_name" label="保险名称">
        </el-table-column>
        <el-table-column prop="insure_type" label="保险类型">
        </el-table-column>
        <el-table-column prop="insure_date" label="保险日期">
        </el-table-column>
        <el-table-column prop="insure_beneficiary" label="被保险人">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
  
<script>
import axios from "@/utils/request";
export default {
  name: "Query",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    query() {
      axios.get('/demo/insure/query').then(res => {
        console.log(res)
        if(res.data.code == 200){
          this.tableData = res.data.data
        }
      })
    }

  },
};
</script>
  
<style scoped></style>
  