<template>
  <div class="esign">
    <div class="esign_describlebox">
      <div class="esign_describlebox_Title">画布背景：</div>
      <div class="esign_describlebox_content">
        原生拾色器无法选择透明底，所以改为输入框，为空则是透明底色，支持多种写法
        （
        <strong
          >'#ccc'，'#E5A1A1'，'rgb(229, 161,
          161)'，'rgba(0,0,0,.6)'，'red'</strong
        >） 颜色无效时谷歌会变成黑色背景。
      </div>
    </div>
    <div class="esign_describlebox">
      <div class="esign_describlebox_Title">清空画板：</div>
      <div class="esign_describlebox_content">
        清掉画布所有内容包括背景色，恢复至初始透明背景。
      </div>
    </div>
    <div class="esign_describlebox">
      <div class="esign_describlebox_Title">是否裁剪：</div>
      <div class="esign_describlebox_content">
        在画布设定尺寸基础上裁掉空余部分。
      </div>
    </div>
    <!-- 输入参数 -->
    <div class="esign_Input">
      <div class="esign_Input_lineWidth">
        <div class="Titlebox">画笔粗细:</div>
        <div class="Inputbox">
          <el-select v-model="lineWidth" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="esign_Input_lineColor">
        <div class="Titlebox">画笔颜色:</div>
        <div class="Inputbox">
          <el-input
            v-model="lineColor"
            type="color"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="esign_Input_bgColor">
        <div class="Titlebox">画布背景:</div>
        <div class="Inputbox">
          <el-input
            v-model="bgColor"
            type="color"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="esign_Input_isCrop">
         <div class="Titlebox">是否裁剪:</div>
        <div class="Inputbox">
           <el-checkbox v-model="isCrop"></el-checkbox>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="esign-box">
      <vue-esign
        class="esignature"
        ref="esign"
        :width="800"
        :height="300"
        :isCrop="isCrop"
        :lineWidth="lineWidth"
        :lineColor="lineColor"
        :bgColor.sync="bgColor"
      />
    </div>
    <div class="esigh-btns">
      <button @click="handleReset">清空画板</button>
      <button @click="handleGenerate">生成图片</button>
    </div>
    <div class="esigh-result">
      <img v-if="resultImg" :src="resultImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "vueEsigncomponents",
  data() {
    return {
      lineWidth: 6,
      lineColor: "#000",
      bgColor: "#fff",
      resultImg: "",
      isCrop: false,
      //
      options: [
        {
          value: "2",
          label: "2",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "6",
          label: "6",
        },
        {
          value: "8",
          label: "8",
        },
        {
          value: "10",
          label: "10",
        },
      ],
    };
  },
  methods: {
    handleReset() {
      this.$refs.esign.reset();
      this.resultImg = "";
    },
    handleGenerate() {
      this.$refs.esign
        .generate()
        .then((res) => {
          this.resultImg = res;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.esign {
  max-width: 1000px;
  margin: auto;
  padding: 10px;
  .esign_describlebox {
    display: flex;
    flex-flow: row nowrap;
    margin: 5px 0;
    .esign_describlebox_Title {
      width: 80px;
      color: grey;
    }
    .esign_describlebox_content {
      width: 80%;
      color: red;
    }
  }
  .esign_Input {
    display: flex;
    flex-flow: row nowrap;
    margin: 10px 0;
    .esign_Input_lineWidth {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .Titlebox {
      }
      .Inputbox {
        width: 110px;
        margin-left: 5px;
      }
    }
    .esign_Input_lineColor {
       display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-left: 15px;
      .Titlebox {
      }
      .Inputbox {
        width: 110px;
        margin-left: 5px;
      }
    }
    .esign_Input_bgColor {
       display: flex;
      flex-flow: row nowrap;
      align-items: center;
       margin-left: 15px;
      .Titlebox {
      }
      .Inputbox {
        width: 110px;
        margin-left: 5px;
      }
    }
    .esign_Input_isCrop {
       display: flex;
      flex-flow: row nowrap;
      align-items: center;
       margin-left: 15px;
      .Titlebox {
      }
      .Inputbox {
        width: 110px;
        margin-left: 5px;
      }
    }
  }
}
.esigh-btns button {
  color: #fff;
  height: 40px;
  width: 100px;
  font-size: 16px;
  margin-right: 10px;
  outline: none;
  border-radius: 4px;
  background: #f60;
  border: 1px solid transparent;
}
.esigh-btns button:active {
  color: #fff;
  box-shadow: 0px 0px 50px orangered inset;
}
.esigh-result {
  margin-top: 10px;
}
.esigh-result img {
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px solid #ececee;
}
.esignature {
  margin: 10px 0;
  border: 2px solid #ccc;
}
</style>
