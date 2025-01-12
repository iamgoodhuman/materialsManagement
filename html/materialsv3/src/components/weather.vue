<template>
    <div class="common-layout">

    </div>
</template>
<script>
export default {
    data() {
        return {
            latitude: 0,
            longitude: 0
        }
    },
    created() {
        navigator.geolocation.getCurrentPosition(function (res) {
            this.latitude = res.coords.latitude
            this.longitude = res.coords.longitude
        });
    },
    mounted() {

    }
}
</script>
<style></style>