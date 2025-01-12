<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">header</el-header>
            <el-container>
                <el-aside>


                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon><Coin /></el-icon>
                                <span>收入与支出</span>
                            </template>
                            <el-menu-item index="1-1">展示</el-menu-item>
                            <el-menu-item index="1-2">录入</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

</script>
<style>
.common-layout {
    width: 100%;
    height: 100%;
}

.el-container {
    width: 100%;
    height: 100%;
}

.header {
    background-color: #545c64;
}
</style>