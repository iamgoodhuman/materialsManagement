<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>消费</el-breadcrumb-item>
    <el-breadcrumb-item>录入</el-breadcrumb-item>
  </el-breadcrumb>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="单条录入" name="first">
      <Itemized></Itemized>
    </el-tab-pane>
    <el-tab-pane label="表格导入" name="second">表格导入</el-tab-pane>

  </el-tabs>
</template>

<script>
import Itemized from './enter/itemized.vue';
export default {
  components: { Itemized },
  data() {
    return {
      activeName: "",
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleClick(a, b) {
      console.log(a, b)
    }
  }
}
</script>

<style lang="less" scoped></style>