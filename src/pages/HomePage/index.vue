<template>
  <div class="HomePage">
     <el-button type="primary" @click="clickFullscreen" class="Fullscreen"
      >全屏</el-button
    >
    <el-button type="primary" @click="saveImage('html2canvas', '生成图片')" class="downloadImg">生成图片</el-button>
    <div class="HomePage_outbox_scrolloutbox" id="html2canvas" ref="html2canvas">
      <vue-scroll :ops="ops" ref="vs">
        <div class="HomePage_outbox_scrolloutbox_inbox">
          <component :is="ComponentsData"></component>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import Bus from "@/utils/bus.js";
import { mapGetters } from "vuex";
import demoComponents from "./demoComponents/index";
import AxiosUrl from "@/middleware/services/AxiosUrl";
import html2canvas from 'html2canvas';
import screenfull from "screenfull";
export default {
  name: "HomePage",
  components: {
    demoComponents,
  },
  data() {
    return {
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "number",
          detectResize: true,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: "easeInOutQuint",
          verticalNativeBarPos: "right",
        maxHeight: 959,
          // maxWidth: undefined
        },
        rail: {
          background: "#2C2F3A",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false,
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: true,
          background: "#A2A1A6",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: "4px",
          disable: false,
        },
      },
      NowStaustimerH: null,
      IsShowComponents: true,
    };
  },
  computed: {
    ...mapGetters({
      ComponentsData: "HomePageModule/ComponentsData",
    }),
  },
  mounted() {
    this.getTimeNowStausfun();
    this.testfun()
  },
  methods: {
    //初始化、定时5分钟刷新数据
    getTimeNowStausfun() {
      this.GetWaterworksName();
      this.GetTotalWaterFlow();
      this.NowStaustimerH = setInterval(() => {
        this.GetTotalWaterFlow();
      }, 300000);
      this.$once("hook:beforeDestroy", () => {
        console.log("清除定时器NowStaustimerH");
        window.clearInterval(this.NowStaustimerH);
        this.NowStaustimerH = null;
      });
    },
    GetWaterworksName() {
      this.$store.dispatch("HomePageModule/GetWaterworksName");
    },
    GetTotalWaterFlow() {
      this.$store.dispatch("HomePageModule/GetTotalWaterFlow");
    },
    testfun(){
       this.$axios.post(AxiosUrl.baseUrlPath + 'test')
      .then(res=>{
      console.log("testfun",res)
      })
    },
    //图片格式转换方法
       dataURLToBlob(dataurl) {
            let arr = dataurl.split(',');
            let mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        },
 //点击方法
       saveImage(divText, imgText) {
            let canvasID = this.$refs[divText];
            let that = this;
            let a = document.createElement('a');
            html2canvas(canvasID,{scale:1.3}).then(canvas => {
                let dom = document.body.appendChild(canvas);
                dom.style.display = 'none';
                a.style.display = 'none';
                document.body.removeChild(dom);
                let blob = that.dataURLToBlob(dom.toDataURL('image/png'));
                a.setAttribute('href', URL.createObjectURL(blob));
                //这块是保存图片操作  可以设置保存的图片的信息
                a.setAttribute('download', imgText + '.png');
                document.body.appendChild(a);
                a.click();
                URL.revokeObjectURL(blob);
                document.body.removeChild(a);
            });
        },
         clickFullscreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
  },
};
</script>
<style lang="scss" scoped>
.HomePage {
  width: 100%;
  position: relative;
  .downloadImg{
    position: absolute;
   top: 60px;
    right: 160px;
    z-index: 22;
  }
  .Fullscreen {
    position: absolute;
    top: 60px;
    right: 260px;
    z-index: 22;
  }
   .HomePage_outbox_scrolloutbox {
      width: 100%;
      .HomePage_outbox_scrolloutbox_inbox {
         width: 100%;
      }
   }
}
</style>