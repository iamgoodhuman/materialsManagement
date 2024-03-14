<template>
  <div class="enter">
    <h3>体质录入</h3>
    <el-form ref="form" :model="form" :rules="rules"  label-width="80px">
      <el-form-item label="录入时间" prop="time">
        <el-date-picker v-model="form.time" type="date" value-format="yyyy-MM-dd HH:mm" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="体重(kg)" prop="weight">
        <el-input v-model="form.weight"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">录入</el-button>
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
        time: "",
        weight: ""
      },
      rules: {
        time: [
          { required: true, message: '请选择日期', trigger: 'blur' },
          { min: 0, max: 100, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {

      })
      // axios.post('/demo/insure/enter', this.form).then((res) => {
      //   console.log(res.data)
      //   if (res.data.code == 200) {
      //     this.$message({
      //       message: res.data.msg,
      //       type: 'success'
      //     });
      //   }
      // })
    }

  },
};
</script>

<style scoped></style>