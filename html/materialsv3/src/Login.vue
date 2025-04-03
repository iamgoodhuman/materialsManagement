<template>
    <div class="common-layout">
        <div class="box">
            <el-form :model="form" label-width="auto" >
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"  type="password"/>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="form.yanzheng" style="width: 150px;"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped>
.common-layout {
    display: grid;
    place-items: center;
    height: 100vh;
}

.box {
    width: 400px;
    height: 300px;
    border: 1px solid red;
}
</style>