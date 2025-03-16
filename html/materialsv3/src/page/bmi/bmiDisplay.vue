<template>
  体重趋势
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="时间选择">
      <el-config-provider>
        <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="开始时间"
          end-placeholder="结束时间" :size="size" />

      </el-config-provider>
    </el-form-item>
  </el-form>


</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped></style>