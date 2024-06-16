<template>
    <div> <van-form @submit="onSubmit">

            <van-field v-model="username" label="用户名" placeholder="请输入用户名" />

            <van-field v-model="password" label="密码" placeholder="请输入密码" />

            <van-field v-model="VerificationCode" center clearable label="验证码" placeholder="请输入验证码">
                <template #button>
                    <van-button size="small" type="primary">图片验证码</van-button>
                </template>
            </van-field>
        </van-form>
    </div>
</template>

<script>


export default {
    name: "Tool",
    data() {
        return {
            active: 0,
        };
    },
    methods: {




    },
};
</script>

<style scoped></style>