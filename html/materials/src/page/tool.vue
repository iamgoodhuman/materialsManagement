<template>
    <div>
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item icon="home-o">体脂</van-tabbar-item>
            <van-tabbar-item icon="search">保险</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
        </van-tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { Notify } from 'vant';
export default {
    name: "Tool",
    data() {
        return {
            active: 0,
        };
    },
    methods: {
        onChange(index) {
            console.log("index", index)
            if (index == 0) {
                this.$router.push({ path: '/bmi/index' }).catch(err => err);
            } else if (index == 1) {
                this.$router.push({ path: '/insure/enter' }).catch(err => err);
            } else if (index == 2) {

                this.$router.push({ path: '/insure/insure' }).catch(err => err);
            }
        },
        // handleSelect(key, keyPath) {
        //     if (key == 'insureQuery') {
        //         this.$router.push({ path: '/insure/insure' }).catch(err => err);
        //     } else if (key == 'insureEnter') {
        //         this.$router.push({ path: '/insure/enter' }).catch(err => err);
        //     } else if (key == 'BmiIndex') {
        //         this.$router.push({ path: '/bmi/index' }).catch(err => err);
        //     }
        // }


    },
};
</script>

<style scoped></style>