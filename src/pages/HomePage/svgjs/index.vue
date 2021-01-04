<template>
  <div class="container">
    <div class="mainLayout">
      <div id="customizeImage"></div>
    </div>
  </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";
import { lang } from "../../../components/moment/moment";

export default {
  data() {
    return {
      imgUrl: require("@/assets/img/fish.gif"),
    };
  },
  mounted() {
    //自定义图片
    let imageModel = SVG().addTo("#customizeImage").size("100%", "100%");
    imageModel.image(this.imgUrl);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  height: 580px;
  .mainLayout {
    width: 100%;
    height: 100%;
    #customizeImage {
      width: 100%;
      height: 100%;
     
    }
  }
}
</style>