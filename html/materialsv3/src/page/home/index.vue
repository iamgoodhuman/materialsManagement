<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">  <Weather></Weather> </el-header>
            <el-container>
                <el-aside width="200px"> 
                    <Nav></Nav>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>
    </div>
</template>
<script setup>
import Weather from '../../components/weather.vue'
import Nav from '../../components/nav.vue'
</script>
<style scoped>
.common-layout {
    width: 100%;
    height: 100%;
}

.el-container {
    width: 100%;
    height: 100%;
}

.header {
    background-color: #3c8dbc;
    color: white
}
</style>