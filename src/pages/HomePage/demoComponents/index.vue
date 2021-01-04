<template>
  <div class="demoComponents" ref="demoComponents">>
    <div class="SvgIconClassoutbox">
      <h2 class="partone_Title">一、SvgIcon使用</h2>
      <SvgIcon :name="'listicon'" :title="''" class="SvgIconClass" />
      <SvgIcon :name="'3开发中'" :title="''" class="SvgIconClassIshow" />
    </div>
    <div class="jsgifoutbox">
       <h2 class="partone_Title">二、jsgif使用</h2>
      <jsgif/>
    </div>
    <div class="svgjsoutbox">
       <h2 class="partone_Title">三、SVG().js使用</h2>
      <svgjs/>
    </div>
    <div class="vueEsigncomponentsoutbox">
      <h2>vue 实现电子版签名</h2>
      <vueEsigncomponents/>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import jsgif from '../jsgif/index'
import svgjs from '../svgjs/index'
import vueEsigncomponents from '../vueEsigncomponents/index'
import Bus from "@/utils/bus.js";
import { mapGetters } from "vuex";
import reqdata from "@/reqdata/reqdata";

export default {
  name: "demoComponents",
  components: {
    SvgIcon,
    jsgif,
    svgjs,
    vueEsigncomponents
  },
  data() {
    return {
      JIAMI: "",
      JIEMI: "",
      Region: reqdata.Region,
    };
  },
  mounted() {
    console.log(
      "getBoundingClientRect()",
      this.$refs.demoComponents.getBoundingClientRect()
    );
    this.JIAMI = this.$Utils.demoRequest(JSON.stringify("admin"));
    this.JIEMI = JSON.parse(this.$Utils.demoResponse(this.JIAMI));
  },
};
</script>
<style lang="scss" scoped>
.demoComponents {
  width: 60%;
  margin-left: 20%;
  .SvgIconClassoutbox {
    margin-top: 60px;
    .partone_Title {
      margin-bottom: 30px;
    }
    .SvgIconClass {
      width: 60px;
      height: 60px;
      color: darkcyan;

      &:hover {
        color: cadetblue;
      }
    }
    .SvgIconClassIshow {
      display: none;
      width: 100%;
      height: 600px;
    }
    &:hover .SvgIconClassIshow {
      display: block;
      width: 100%;
      height: 600px;
    }
  }
 
  .jsgifoutbox{
      margin-top: 60px;
    .partone_Title {
      margin-bottom: 30px;
    }
  }
  .svgjsoutbox{
      margin-top: 60px;
    .partone_Title {
      margin-bottom: 30px;
    }
  }
  .vueEsigncomponentsoutbox{
      margin-top: 60px;
    .partone_Title {
      margin-bottom: 30px;
    }
  }
}
</style>