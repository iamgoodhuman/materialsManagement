<template>
    <div class="common-layout">
        <el-container>
            <el-header>header</el-header>
            <el-container>
                <el-aside>
                    <el-menu mode="vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                        router>
                        <el-menu-item index="/home">首页</el-menu-item>
                        <el-sub-menu index="settings">
                            <template #title>资金管理</template>
                            <el-menu-item>
                                <router-link to="/fund">日常管理</router-link>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main><router-view></router-view> </el-main>
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
</style>