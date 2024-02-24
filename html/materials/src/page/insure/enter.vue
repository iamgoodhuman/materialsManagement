<template>
  <div class="enter">
    <h3>保险录入</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="保险公司">
        <el-input v-model="form.insure_company"></el-input>
      </el-form-item>
      <el-form-item label="保险名称">
        <el-input v-model="form.insure_name"></el-input>
      </el-form-item>

      <el-form-item label="保险类型">
        <el-input v-model="form.insure_type"></el-input>
      </el-form-item>

      <el-form-item label="保险日期">
        <el-input v-model="form.insure_date"></el-input>
      </el-form-item>

      <el-form-item label="被保险人">
        <el-input v-model="form.insure_beneficiary"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">录入</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script>
import axios from "@/utils/request";
export default {
  name: "Home",
  data() {
    return {
      form: {

      }
    };
  },
  methods: {
    onSubmit() {
      axios.post('/demo/insure/enter', this.form).then((res) => {
        console.log(res.data)
        if (res.data.code == 200) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
        }
      })
    }

  },
};
</script>
  
<style scoped></style>
  