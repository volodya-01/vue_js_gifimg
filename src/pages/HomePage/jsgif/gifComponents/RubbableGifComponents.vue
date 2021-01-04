<template>
  <div class="RubbableGifComponents">
    <div class="imgbox">
      <img
        ref="RubbableGifComponents"
        :src="imgUrlGIF"
        rel:auto_play="1"
        width="467"
        height="375"
        rel:rubbable="1"
      />
    </div>
  </div>
</template>
<script>
import RubbableGif from "./libgif/rubbable";
export default {
  name: "RubbableGifComponents",
  data() {
    return {
      imgUrlGIF: require("@/assets/img/fish.gif"),
    };
  },
  async mounted() {
    try {
      this.InitSuperGif();
    } catch (e) {
      console.error("程序错误", e);
    }
  },
  methods: {
    InitSuperGif() {
      // 通过异步函数，获取gif文件
      var sup1 = new RubbableGif({
        gif: this.$refs.RubbableGifComponents,
      });
      sup1.load();
    },
  },
};
</script>
 
<style lang="scss" scoped>
.RubbableGifComponents {
  width: 60%;
  .imgbox {
    width: 60%;
  }
  
}
</style>
