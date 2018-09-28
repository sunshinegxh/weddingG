<template>
  <div class="cover animate" ref="`section${idx}`">
    <span class="border-bg cover-bg-left from-left0"></span>
    <span class="border-bg cover-bg-bottom from-bottom0"></span>
    <span class="border-bg cover-bg-right from-right0"></span>
    <span class="border-bg cover-bg-top from-top0"></span>
    <div class="cover-bg3">
      <span class="cover_pic_copywrite delay1 from-top0"></span>
      <span class="name delayP15 from-top200">新浪 & 新娘</span>
      <img src="../../assets/third/cover_pic.jpg" alt="" class="cover_pic scale01 delayP25">
      <span class="address delay2 from-bottom100">这里是地址这里是地这里是地址这里是地址</span>
      <span class="date delay3 from-bottom204">2020 年 10 月 30 日 23 时 49 分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "cover",
  props: ["idx", "con"],
  data() {
    return {
      current: 0,
      loaded: false
    };
  },
  created() {
    window.setInfo = this.setInfo;
  },
  methods: {
    setInfo() {
      alert("refresh");
      this.$http
        .get("http://192.168.0.134:3000/getIndex")
        // .post("/card/getInvitationsInfo.gg", {
        //   params: {
        //     pageNo: 1,
        //     pageSize: 20
        //   }
        // })
        .then(response => {
          // this.loading = false;
          console.log(response);
          // let res = response.data;
          // if (res.respCode === 0) {
          //   // 本地注释掉
          //   this.indexData = res.respData;
          // } else {
          //   alert(res.respMsg);
          // }
        })
        .catch(e => {
          document.write(e);
        });
    },
    changePage(index) {
      this.$emit("changePage", index);
    },
    comClass() {
      return {
        toRead: true,
        big: this.current === 1
      };
    }
  }
};
</script>

<style lang="scss" type="text/css" scoped>
@import "../../common.scss";
.cover {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: serif;
  &-bg3 {
    width: 702 * $px;
    height: 1072 * $px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url("../../assets/third/cover_bg.png") no-repeat;
    background-size: contain;
  }
  .border-bg {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .cover_pic_copywrite {
    width: 702 * $px;
    height: 200 * $px;
    display: inline-block;
    background: url("../../assets/third/cover_pic_copywrite.png") no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: -300 * $px;
  }
  .name {
    position: absolute;
    left: 0;
    right: 0;
    top: -300 * $px;
    font-size: 48 * $px;
    color: #000;
    margin: 0 auto;
  }
  .cover_pic {
    width: 544 * $px;
    position: absolute;
    left: 0;
    right: 0;
    top: 280 * $px;
    margin: 0 auto;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .address {
    position: absolute;
    left: 0;
    right: 0;
    width: 480 * $px;
    text-align: center;
    bottom: -300 * $px;
    font-size: 36 * $px;
    color: #000;
    margin: 0 auto;
  }
  .date {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: -300 * $px;
    font-size: 36 * $px;
    color: #000;
    margin: 0 auto;
  }
  &-bg-left {
    left: 0;
    top: 0;
    width: 340 * $px;
    height: 1206 * $px;
    display: inline-block;
    background: url("../../assets/third/cover_pic_left.png") no-repeat;
  }
  &-bg-right {
    right: 0;
    top: 70 * $px;
    width: 230 * $px;
    height: 1178 * $px;
    background: url("../../assets/third/cover_pic_right.png") no-repeat;
  }
  &-bg-top {
    top: 0;
    right: 0;
    width: 400 * $px;
    height: 200 * $px;
    background: url("../../assets/third/cover_pic_up.png") no-repeat;
  }
  &-bg-bottom {
    bottom: 0;
    left: 0;
    width: 750 * $px;
    height: 228 * $px;
    background: url("../../assets/third/cover_pic_down.png") no-repeat;
  }
}

.cover-bg3 .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.cover-bg3 .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}

.cover-bg3 .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.cover-bg3 .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

.cover-bg3 .delay3 {
  -moz-animation-delay: 3s;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.from-bottom204 {
  -webkit-animation: fBtm204 2s ease forwards;
  -moz-animation: fBtm204 2s ease forwards;
  animation: fBtm204 2s ease forwards;
}
@-moz-keyframes fBtm204 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 204 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm204 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 204 * $px;
    opacity: 0.8;
  }
}
@keyframes fBtm204 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 204 * $px;
    opacity: 0.8;
  }
}

.from-bottom100 {
  -webkit-animation: fBtm100 2s ease forwards;
  -moz-animation: fBtm100 2s ease forwards;
  animation: fBtm100 2s ease forwards;
}
@-moz-keyframes fBtm100 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 100 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm100 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 100 * $px;
    opacity: 0.8;
  }
}
@keyframes fBtm100 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 100 * $px;
    opacity: 0.8;
  }
}

.from-top200 {
  -webkit-animation: fTop200 2s ease forwards;
  -moz-animation: fTop200 2s ease forwards;
  animation: fTop200 2s ease forwards;
}
@-moz-keyframes fTop200 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 200 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fTop200 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 200 * $px;
    opacity: 0.8;
  }
}
@keyframes fTop200 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 190 * $px;
    opacity: 0.8;
  }
}

.from-top0 {
  -webkit-animation: fTop0 2s forwards;
  -moz-animation: fTop0 2s forwards;
  animation: fTop0 2s forwards;
}
@-moz-keyframes fTop0 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fTop0 {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}
@keyframes fTop0 {
  0% {
    top: -300 * $px;
    opacity: 0;
  }
  100% {
    top: 0 * $px;
    opacity: 0.8;
  }
}

.from-bottom0 {
  -webkit-animation: fBtm0 2s forwards;
  -moz-animation: fBtm0 2s forwards;
  animation: fBtm0 2s forwards;
}
@-moz-keyframes fBtm0 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 0 * $px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm0 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 0 * $px;
    opacity: 0.8;
  }
}
@keyframes fBtm0 {
  0% {
    bottom: -300 * $px;
    opacity: 0;
  }
  100% {
    bottom: 0 * $px;
    opacity: 0.8;
  }
}

.from-right0 {
  -webkit-animation: fRht0 2s ease forwards;
  -moz-animation: fRht0 2s ease forwards;
  animation: fRht0 2s ease forwards;
}
@-moz-keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}
@keyframes fRht0 {
  0% {
    right: -300 * $px;
    opacity: 0;
  }
  100% {
    right: 0 * $px;
    opacity: 1;
  }
}

.from-left0 {
  -webkit-animation: flft0 2s ease forwards;
  -moz-animation: fLft0 2s ease forwards;
  animation: fLft0 2s ease forwards;
}
@-moz-keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}
@-webkit-keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}
@keyframes fLft0 {
  0% {
    left: -300 * $px;
    opacity: 0;
  }
  100% {
    left: 0 * $px;
    opacity: 1;
  }
}
</style>
