<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
        text-color="#fff" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>消费</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">录入</el-menu-item>
                <el-menu-item index="1-2">展示</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>BMI</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">录入</el-menu-item>
                <el-menu-item index="2-2">展示</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        
    </el-menu>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style>
.el-menu{
    height: 100%
}
</style>