<template>
  <div class="app" id="app">
    <loading v-if="loading"/>
      <div class="topbar">
        <div class="back"></div>
        <!-- <div class="back" @click="screenshot"></div> -->
        <div data-html2canvas-ignore="true" @click="toogleMusic()" class="music" :class="[musicType, {'is-stop': musicStop}]">
          <audio @playing="playing" ref="music" :src="musicUrl" autoplay="autoplay" loop="loop"></audio>
        </div>
      </div>
      <component :dataList="indexData" ref="temp" :is="template" class="template"></component>
  </div>
</template>
<script>
import toast from "../components/common/toast";
import Loading from "../components/common/loading";
import domtoimage from "dom-to-image";

export default {
  name: "BaoMax",
  data() {
    return {
      loading: true,
      indexData: [],
      template: null,
      musicUrl: "",
      // true：暂停， false：播放
      musicStop: false,
      changeMusic: false
    };
  },
  computed: {
    cardId() {
      return this.$route.query.cardId;
    },
    templateId() {
      return this.$route.query.templateId || "1";
    },
    status() {
      return this.$route.query.edit || "0";
    },
    musicType() {
      return `type${this.templateId}`;
    }
  },
  updated() {
    console.log("updated");
  },
  created() {
    // let edit = +this.$route.query.edit === 1;
    this.$store.commit("SET_EDIT", this.status);
    this.$store.commit("SET_CARDID", +this.cardId);

    if (this.templateId === "1") {
      (() => import(`../components/temp1`))().then(mod => {
        this.template = mod.default;
      });
    } else if (this.templateId === "2") {
      (() => import(`../components/temp2`))().then(mod => {
        this.template = mod.default;
      });
    } else {
      (() => import(`../components/temp3`))().then(mod => {
        this.template = mod.default;
      });
    }
    // (() => import(`../components/temp${this.templateId}`))().then(mod => {
    //   this.template = mod.default;
    // });
    if (this.status === "0") {
      // 获取模板信息
      this.getTemplateInfo();
    } else {
      this.getUserTemplateInfo();
    }
  },
  mounted() {
    // TODO音乐问题，好像需要用户操作才可触发
    // setTimeout(() => {
    //   this.$refs.music.play();
    //   this.musicStop = true;
    // }, 1000);
    // 客户端修改页面number
    window.refreshPage = page => {
      this.$store.commit("SET_ISSKIP", true);
      this.getUserTemplateInfo().then(() => {
        // this.$refs.temp.current = page;
        this.$refs.temp.setPage(++page);
      });
    };
    window.setMusic = music => {
      this.musicUrl = window.encodeURI(music);
    };
    window.getShowPageIndex = () => {
      return this.$refs.temp.current || 0;
    };
    window.showPageIndex = page => {
      this.$store.commit("SET_ISSKIP", true);
      this.$refs.temp.setPage(++page);
    };
    window.refreshInfo = () => {
      this.setCoverData();
    };
    window.changeMusicStatus = () => {
      // 音乐在播放
      if (!this.musicStop) {
        this.changeMusic = !this.changeMusic;
        if (!this.changeMusic) {
          this.$refs.music.play();
        } else {
          this.$refs.music.pause();
        }
      }
    };
    // 重新设置viewport宽高以适应vh单位
    setTimeout(function() {
      /* eslint-disable no-undef */
      let viewheight = $(window).height();
      let viewwidth = $(window).width();
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute(
        "content",
        "height=" +
          viewheight +
          "px, width=" +
          viewwidth +
          "px, initial-scale=1.0"
      );
    }, 1000);
  },
  methods: {
    playing() {
      console.log("aaaa");
    },
    toogleMusic() {
      if (this.musicStop) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.musicStop = !this.musicStop;
      this.changeMusic = !this.changeMusic;
    },
    getTemplateInfo() {
      this.loading = true;
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/getCardTemplate.gg", {
          templateId: this.templateId
        })
        // .get("http://localhost:3000/getIndex")
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.musicUrl = window.encodeURI(res.musicUrl);
            this.indexData = res.pageList;
          } else {
            console.log("res.respCode", res.message);
          }
        })
        .catch(e => {
          this.loading = false;
          console.log("e:", e);
        });
    },
    getUserTemplateInfo() {
      this.loading = true;
      return (
        this.$http
          .post(
            "http://47.105.43.207:80/()/banhunli/card/getCardInvitations.gg",
            {
              cardId: this.cardId
            }
          )
          // .get("http://localhost:3000/getIndex")
          .then(response => {
            this.loading = false;
            let res = response.body.data;
            if (response.body.code === "0000") {
              this.musicUrl = window.encodeURI(res.musicUrl);
              this.indexData = res.pageList;
            } else {
              console.log("res.respCode", response.body.message);
            }
          })
          .catch(e => {
            document.write(e);
          })
      );
    },
    setCoverData() {
      this.$http
        .post(
          "http://47.105.43.207:80/()/banhunli/card/getInvitationsInfo.gg",
          {
            cardId: this.$route.query.cardId
          }
        )
        .then(response => {
          let res = response.body.data;
          if (response.body.code === "0000") {
            // 第一页一定是封面！！！
            const coverData = this.indexData[0];
            this.indexData.splice(0, 1, {
              ...coverData,
              extra: JSON.stringify(res)
            });
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    screenshot() {
      let self = this;
      let node = document.getElementById("app");
      domtoimage
        .toPng(node)
        .then(function(dataUrl) {
          self.uploadPrintScreen(12, 22, dataUrl);
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
        });
      // domtoimage.toBlob(document.getElementById('app'))
      // .then(function (blob) {
      //   console.log(blob)
      //   var reader = new FileReader();
      //   reader.onload = function(event){
      //     var fd = new FormData();
      //     fd.append('data', event.target.result);
      //     this.$http.post(`http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg`, param,
      //     {
      //       headers: { "Content-Type": "multipart/form-data" }
      //     }
      //   )
      //   }
      //   reader.readAsDataURL(blob);
      // });
      console.log("jietu");
    },
    uploadPrintScreen(cardId, pageId, base64ImgUrl) {
      let param = new FormData();
      param.append("cardId", cardId);
      param.append("pageId", pageId);
      param.append("base64ImgUrl", base64ImgUrl);
      this.$http
        .post(
          `http://47.105.43.207:80/()/banhunli/card/uploadPrintScreen.gg`,
          param
        )
        .then(response => {
          toast("上传成功！");
          console.log("uploadPrintScreen:", response.body.data);
        });
    }
  },
  components: {
    loading: Loading
  }
};
</script>
<style lang="scss" scoped>
@import "../common.scss";
.app {
  height: 100%;
  width: 100%;
  position: relative;
}
.template {
  position: relative;
  z-index: 10;
}
.topbar {
  position: absolute;
  top: 54 * $vh;
  left: 26 * $vw;
  right: 26 * $vw;
  height: 60 * $vh;
  display: flex;
  justify-content: space-between;
  z-index: 20;
}
// .back {
//   background-image: url(../assets/common/invitation_ic_back.png);
// }
.back,
.music {
  height: 60 * $vh;
  width: 60 * $vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
}
.music.type2 {
  background-image: url(../assets/second/invitetion_ic_music_default.png);
  &.is-stop {
    background-image: url(../assets/second/invitetion_ic_music_select.png);
  }
}
// TODO
.music.type1 {
  background-image: url(../assets/second/invitetion_ic_music_default.png);
  &.is-stop {
    background-image: url(../assets/second/invitetion_ic_music_select.png);
  }
}
</style>
