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
import service from "../utils/request.js";
export default {
  name: "Home",
  data(){
    return {
    }
  },
  methods:{
    getlist(){
      console.log("获取")
    }
  }
};
</script>

<style scoped></style>
