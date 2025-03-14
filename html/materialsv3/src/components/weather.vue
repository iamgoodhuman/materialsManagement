<template>
    <div class="common-layout">
        {{ latitude  }} {{longitude }}
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
        
    },
    mounted() {
        this.position()
    },
    methods:{
        position(){
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        },
        showPosition(position) {
             console.log("position",position); 
             this.latitude = position.coords.latitude
             this.longitude = position.coords.longitude
        },
        showError(){

        }
    }
}
</script>
<style scoped></style>