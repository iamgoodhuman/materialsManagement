<template>
  <div class="home">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">22</div></el-col
      >
    </el-row>
    <el-button @click="getlist">默认按钮</el-button>
  </div>
</template>

<script>
import service from "../utils/request";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    getlist() {
      console.log("获取");
      service.get("demo/list").then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
        } else {
          this.$message({
            message: "查询失败",
            type: "error",
          });
        }
      });
    },
  },
};
</script>

<style scoped></style>
