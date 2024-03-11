<template>
  <div>
    <div class="xbwa"></div>
    <div class="xbwb"></div>
  </div>
</template>

<script>
export default {
  name: "Xbw",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    goa() {
      let xbwa = document.querySelector(".xbwa");
      var ula = document.createElement("ul"); //创建ul节点
      xbwa.appendChild(ula);
      for (let i = 1; i<=36; i++) {
        var img = document.createElement("img"); //创建li节点
        img.src = require( "@/assets/xbw/0" + i + ".jpg" )
        ula.appendChild(img); //将li加入ul
      }
    },
    gob() {
      let xbwb = document.querySelector(".xbwb");
      var ula = document.createElement("ul"); //创建ul节点
      xbwb.appendChild(ula);
      for (let i = 1; i<=71; i++) {
        var img = document.createElement("img"); //创建li节点
        img.src = require( "@/assets/xbw/" + i + ".jpg" )
        ula.appendChild(img); //将li加入ul
      }
  }},
  mounted() {
    this.goa();
    this.gob()
  },
}
</script>

<style>
.xbwa img,.xbwb img{
    width: 100%;
}
ul{
    padding: 0;
    margin: 0;
}
</style>
