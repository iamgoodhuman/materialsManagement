<template>
  <div>
    <ul class="fundHeader">
      <il>本月总收入</il>
      <il>本月固定存</il>
      <il>本月总支出</il>
    </ul>
    <ul class="fundHeader">
      <il>本月预算</il>
      <il>结余预算</il>
      <il>现金流剩余</il>
    </ul>
    <el-row :gutter="20">
      <el-col :span="10"> <el-card class="box-card">
          <div>
            <ul>
              <li>今日收入</li>
              <li>今日支出</li>
              <li>买菜支出</li>
              <li>孩子支出</li>
              <li>超市支出</li>
              <li>其他支出</li>
            </ul>
          </div>
        </el-card></el-col>
      <el-col :span="10"> <el-card class="box-card">
          <div  >2</div>
        </el-card></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.fundHeader {
  display: flex;
  justify-content: space-around;
}

.box-card {
  ul{
    list-style: none;
    padding: 0;
    li{
      line-height:35px;
    }
  }
}
</style>