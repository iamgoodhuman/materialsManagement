<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">header</el-header>
            <el-container>
                <el-aside>
                    菜单
                </el-aside>
                <el-main>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item >首页</el-breadcrumb-item>
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