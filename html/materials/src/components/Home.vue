<template>
  <div class="home">
    <el-row>
  <el-col :span="12"><div class="grid-content bg-purple">11</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">22</div></el-col>
</el-row>
  </div>
</template>

<script>
import service from '../utils/request.js'
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

 
<style scoped>
 
</style>
