<template>
  <div class="app">
    <loading v-if="loading"/>
    <div v-else>
      <div class="topbar">
        <div class="back"></div>
        <div @click="toogleMusic()" class="music" :class="[musicType, {'is-stop': musicStop}]">
          <audio ref="music" :src="musicUrl" autoplay="autoplay" loop="loop"></audio>
        </div>
      </div>
      <component :dataList="indexData" ref="temp" :is="template" class="template"></component>
    </div>
  </div>
</template>
<script>
import Loading from "../components/common/loading";

export default {
  name: "BaoMax",
  data() {
    return {
      loading: true,
      indexData: [],
      template: null,
      musicUrl: "",
      musicStop: false
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
  created() {
    // TODO
    (() => import(`../components/temp${this.templateId}`))().then(mod => {
      // (() => import("../components/temp2"))().then(mod => {
      this.template = mod.default;
    });
    if (this.status === "0") {
      // 获取模板信息
      this.getTemplateInfo();
    } else {
      this.getUserTemplateInfo();
    }
  },
  mounted() {
    // 客户端修改页面number
    window.refreshPage = page => {
      this.getUserTemplateInfo().then(() => {
        this.$refs.temp.current = page;
      });
    };
    window.setMusic = music => {
      alert("setmusic");
      this.musicUrl = music;
    };
  },
  methods: {
    toogleMusic() {
      console.log("aaaa");
      if (this.musicStop) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.musicStop = !this.musicStop;
    },
    getTemplateInfo() {
      this.loading = true;
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/getCardTemplate.gg", {
          templateId: this.templateId
        })
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.musicUrl = res.musicUrl;
            this.indexData = res.pageList;
            console.log(this.indexData);
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
      return this.$http
        .post(
          "http://47.105.43.207:80/()/banhunli/card/getCardInvitations.gg",
          {
            cardId: this.cardId
          }
        )
        .then(response => {
          this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.indexData = res.pageList;
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
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
.back {
  background-image: url(../assets/common/invitation_ic_back.png);
}
.back,
.music {
  height: 60 * $vh;
  width: 60 * $vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
