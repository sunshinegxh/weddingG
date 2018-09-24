<template>
  <div class="cover animate" ref="`section${idx}`">
    <shot-screen></shot-screen>
    <span class="cover-bg to-show-2">
      <div class="cover-bg-white from-bottom60 delayP5"></div>
      <img class="from-right30 delay1" src="../assets/cover_wedding.png" alt="">
      <p class="from-right30 delayP15">{{ con.extra.groom }}</p>
      <p class="from-right30 delayP15">＆</p>
      <p class="from-right30 delayP15">{{ con.extra.bride }}</p>
      <span class="from-right30 delay2">{{ con.extra.time }}</span>
      <span class="from-right30 delayP25">{{ con.extra.address}}</span>
    </span>
  </div>
</template>

<script>
import shotScreen from "./ShotScreen.vue";

export default {
  name: "cover",
  props: ["idx", "con", "currentPage"],
  data() {
    return {
      current: 0,
      loaded: false
    };
  },
  components: {
    shotScreen
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

<style lang="scss" type="text/css">
@import "../common.scss";
.cover {
  position: relative;
  width: 100%;
  height: 100%;
  &-bg {
    width: 100%;
    position: relative;
    height: 100%;
    display: inline-block;
    background: url("../assets/cover_bg.png") no-repeat;
    background-size: 100%;
    overflow: hidden;
    &-white {
      width: 410 * $px;
      height: 676 * $px;
      background: #fff;
      position: absolute;
      left: 36 * $px;
      bottom: -1000px;
    }
    img {
      position: absolute;
      top: 610 * $px;
      width: 482 * $px;
      opacity: 1;
      left: 1000px;
    }
    p {
      position: absolute;
      color: #222222;
      font-size: 48 * $px;
      left: 1000px;
    }
    span {
      position: absolute;
      display: inline-block;
      color: #222222;
      font-size: 28 * $px;
      text-align: left;
      left: 1000px;
    }
    p:nth-of-type(1) {
      top: 700 * $px;
    }
    p:nth-of-type(2) {
      top: 790 * $px;
    }
    p:nth-of-type(3) {
      top: 880 * $px;
    }
    span:nth-of-type(1) {
      top: 1040 * $px;
    }
    span:nth-of-type(2) {
      width: 360 * $px;
      top: 1100 * $px;
    }
  }
}
.cover-bg .delayP5 {
  -moz-animation-delay: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.cover-bg .delay1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.cover-bg .delayP15 {
  -moz-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.cover-bg .delay2 {
  -moz-animation-delay: 2s;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.cover-bg .delayP25 {
  -moz-animation-delay: 2.5s;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}

.from-bottom60 {
  -webkit-animation: fBtm60 2s forwards;
  -moz-animation: fBtm60 2s forwards;
  animation: fBtm60 2s forwards;
}
@-moz-keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}
@-webkit-keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}
@keyframes fBtm60 {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 60px;
    opacity: 0.8;
  }
}

.from-right30 {
  -webkit-animation: fRht30 2s ease forwards;
  -moz-animation: fRht30 2s ease forwards;
  animation: fRht30 2s ease forwards;
}
@-moz-keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
@-webkit-keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
@keyframes fRht30 {
  0% {
    left: 1000px;
    opacity: 0;
  }
  100% {
    left: 30px;
    opacity: 1;
  }
}
</style>
