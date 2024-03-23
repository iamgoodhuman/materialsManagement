<template>
  <div class="enter">
    <h3>信息录入页</h3>
    
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