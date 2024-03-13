<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">保险</template>
                <el-menu-item index="insureQuery">保险查看</el-menu-item>
                <el-menu-item index="insureEnter">保险录入</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">BMI</template>
                <el-menu-item index="2-1">BMI查看</el-menu-item>
                <el-menu-item index="2-2">BMI录入</el-menu-item>
            </el-submenu>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "@/utils/request";
export default {
    name: "Index",
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key == 'insureQuery') {
                this.$router.push({ path: '/insure/insure' }).catch(err => err);
            } else if (key == 'insureEnter') {
                this.$router.push({ path: '/insure/enter' }).catch(err => err);
            }
        }

    },
};
</script>

<style scoped></style>