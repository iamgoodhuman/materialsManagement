<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>消费</el-breadcrumb-item>
    <el-breadcrumb-item>展示</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="fund">
    <ul class="fundHeader">
      <il>{{ this.month }}月总收入</il>
      <il>{{ this.month }}月固定存</il>
      <il>{{ this.month }}月总支出</il>
    </ul>

    <ul class="fundHeader">
      <il>{{ this.month }}月预算</il>
      <il>结余预算</il>
      <il>现金流剩余</il>
    </ul>

    <el-row :gutter="20" class="expenses">
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
          <div>曲线</div>
        </el-card></el-col>
    </el-row>
    <el-row :gutter="20" class="budget">
      <el-col :span="10">

        <ul>
          <li>本月预算</li>
          <li>买菜预算</li>
          <li>孩子预算</li>
          <li>超市预算</li>
          <li>其他预算</li>
        </ul>
        <ul>
          <li>本月预算</li>
          <li>买菜预算</li>
          <li>孩子预算</li>
          <li>超市预算</li>
          <li>其他预算</li>
        </ul>

      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: "", //本月
    }
  },
  created() {

  },
  mounted() {
    this.month = new Date().getMonth() + 1;
  },
  methods: {
    changeSidebar(path) {
      console.log("path", path)
      this.$router.push(path);
    },
  }
}
</script>

<style lang="less" scoped>
.fundHeader {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.expenses {
  .box-card {
    box-shadow: none;
  }

  ul {
    list-style: none !important;
    padding: 0;

    li {
      line-height: 35px;
    }
  }
}

.budget {
  .el-col {
    display: flex;
    justify-content: space-between;

    li {
      line-height: 35px;
    }
  }
}
</style>