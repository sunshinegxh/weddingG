<template>
  <div class="tan animate" ref="`section${idx}`">
    <div :class="{'tan-bg': true, 'to-show-2': isCurrent}">
      <img src="../../assets/barrage_thankyou.png" :class="{'from-right24': isCurrent}" alt="">
      <div>
        <ul>
          <li v-for="(item, index) in tanData" :key="index" class="firstA">{{ item }}</li>
          <!-- <li v-for="(item, index) in tanData" :key="index" :class="liClass(index)">{{ item }}</li> -->
        </ul>
      </div>
      <input
        placeholder="写下你的祝福"
        v-model="blession"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "tan1",
  props: ["idx", "con", "currentPage"],
  watch: {
    currentPage(newV) {
      this.isCurrent = newV === this.idx;
      // if (this.isCurrent) {
      //   console.log(this.tanData);
      //   setInterval(() => {
      //     let arr = [...this.tanData];
      //     this.tanData = [...arr.slice(1), arr[0]];
      //   }, 2000);
      // }
    }
  },
  data() {
    return {
      isCurrent: false,
      blession: "",
      tanData: [
        // "马先生祝福：祝新人早生贵子，百年好合～111",
        // "马先生祝福：祝新人早生贵子，百年好合～222",
        // "马先生祝福：祝新人早生贵子，百年好合～333",
        // "马先生祝福：祝新人早生贵子，百年好合～4444",
        // "马先生祝福：祝新人早生贵子，百年好合～5",
        "马先生祝福：祝新人早生贵子，百年好合～666666666"
      ]
    };
  },
  created() {},
  methods: {
    liClass(index) {
      switch (+index) {
        case 0:
          return {
            "tan-bg-info": true,
            "tan-bg-first": this.isCurrent,
            firstA: this.isCurrent
          };
        case 1:
          return {
            "tan-bg-info": true,
            "tan-bg-second": this.isCurrent,
            secondA: this.isCurrent
          };
        case 2:
          return {
            "tan-bg-info": true,
            "tan-bg-third": this.isCurrent,
            thirdA: this.isCurrent
          };
        default:
          return {
            "tan-bg-none": true
          };
      }
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../../common.scss";
.tan {
  position: relative;
  width: 100%;
  height: 100%;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../../assets/barrage_bg.png") no-repeat;
    background-size: 100%;
    img {
      position: absolute;
      width: 40 * $px;
      top: 50%;
      transform: translate(0, -50%);
      right: -1000 * $px;
      opacity: 0;
    }
    input {
      width: 700 * $px;
      height: 80 * $px;
      border: none;
      border-radius: 48 * $px;
      line-height: 80 * $px;
      text-align: left;
      color: rgba(255, 255, 255, 1);
      background: rgba(0, 0, 0, 0.4);
      display: inline-block;
      position: absolute;
      bottom: 48 * $px;
      left: 50%;
      margin-left: -350 * $px;
      box-sizing: border-box;
      padding: 0 30 * $px;
    }
    input:-ms-input-placeholder {
      color: #fff;
      opacity: 1;
    }
    input::-webkit-input-placeholder {
      color: #fff;
      opacity: 1;
    }
    div {
      position: absolute;
      width: 350 * $px;
      height: 400 * $px;
      bottom: 260 * $px;
      ul {
        position: relative;
        height: 100%;
        li {
          font-size: 24 * $px;
          margin-left: 24 * $px;
          border-radius: 48 * $px;
          text-align: left;
          box-sizing: border-box;
          line-height: 30 * $px;
          padding: 20 * $px 30 * $px;
          position: absolute;
        }
        li.tan-bg-third {
          margin-bottom: 0;
        }
      }
    }
    &-info {
      // background: rgba(0, 0, 0, 0.4);
      // position: absolute;
      // left: 24 * $px;
    }
    &-first {
      // height: 96 * $px;
      // color: rgba(255, 255, 255, 0.4);
      // top: 0;
    }
    &-second {
      // height: 96 * $px;
      // color: rgba(255, 255, 255, 1);
      // position: absolute;
      // top: 144 * $px;
    }
    &-third {
      // width: 264 * $px;
      // height: 74 * $px;
      // color: rgba(255, 255, 255, 0.4);
      // position: absolute;
      // top: 288 * $px;
      // left: 24 * $px;
    }
    &-none {
      opacity: 0;
    }
  }
}
.tan .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.tan .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.tan .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.tan .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}
.from-right24 {
  -webkit-animation: fRht24 2s ease forwards;
  -moz-animation: fRht24 2s ease forwards;
  animation: fRht24 2s ease forwards;
}
@-moz-keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}
@keyframes fRht24 {
  0% {
    right: -1000 * $px;
    opacity: 0;
  }
  100% {
    right: 24 * $px;
    opacity: 1;
  }
}

.firstA {
  -webkit-animation: fa 8s ease infinite;
  -moz-animation: fa 8s ease infinite;
  animation: fa 8s ease infinite;
}
@keyframes fa {
  0% {
    opacity: 0;
    top: 300 * $px;
  }
  25% {
    opacity: 1;
    top: 288 * $px;
    color: rgba(255, 255, 255, 0.4);
  }
  50% {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    top: 144 * $px;
    transform: scale(1.2);
  }
  75% {
    opacity: 1;
    color: rgba(255, 255, 255, 0.4);
    top: 0;
    transform: scale(1);
  }
  100% {
    top: -20 * $px;
    opacity: 0;
  }
}

.secondA {
  -webkit-animation: sa 2s ease infinite;
  -moz-animation: sa 2s ease infinite;
  animation: sa 2s ease infinite;
}
@keyframes sa {
  0% {
    top: 144 * $px;
  }
  100% {
    top: 0;
  }
}

.thirdA {
  -webkit-animation: ta 2s ease infinite;
  -moz-animation: ta 2s ease infinite;
  animation: ta 2s ease infinite;
}
@keyframes ta {
  0% {
    top: 288 * $px;
    left: 24 * $px;
  }
  100% {
    top: 144 * $px;
    transform: scale(1.2);
    left: 24 * $px;
  }
}
</style>
