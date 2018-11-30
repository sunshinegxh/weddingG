<template>
  <ul class="music">
    <li v-for="(item, index) in musicList" :key="index" @click="choose(item)">
      <img :class="{'nomussic': nomussic(item)}" src="../assets/music.png" alt="">
      <span>{{ item.musicName }}</span>
    </li>
    <audio class="music-hidden" ref="music1" :src="cur.musicUrl" autoplay="autoplay" loop="loop"></audio>
  </ul>
</template>

<script>
import utils from "../libs/utils";

export default {
  name: "music",
  data() {
    return {
      musicList: [],
      cur: {}
    };
  },

  created() {
    this.getMusic();
    window.getMusic = this.set;
  },
  methods: {
    getMusic() {
      this.$http
        .post(`${utils.api()}/()/banhunli/card/getSystemMusicList.gg`, {
          cardId: this.$route.query.cardId,
          pageNo: 1,
          pageSize: 20
        })
        .then(response => {
          // this.loading = false;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.musicList = res.musics;
            this.cur = this.musicList[res.selectIndex];
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    set() {
      this.$refs.music1.pause();
      // alert("set:" + `${this.cur.musicId}-${this.cur.musicUrl}`);
      return `${this.cur.musicId}-${this.cur.musicUrl}`;
    },
    choose(item) {
      this.cur = item;
      this.$refs.music1.play();
    },
    nomussic(item) {
      console.log(
        item.musicId,
        this.cur.musicId,
        item.musicId === this.cur.musicId
      );
      return item.musicId !== this.cur.musicId;
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";
.music {
  background: #fff;
  min-height: 100%;
  li {
    position: relative;
    display: flex;
    img {
      margin: 31 * $vh 24 * $vw;
      width: 36 * $vw;
      height: 36 * $vh;
      line-height: 36 * $vh;
    }
    img.nomussic {
      visibility: hidden;
    }
    span {
      flex: 1;
      text-align: left;
      padding-left: 24 * $vw;
      line-height: 96 * $vh;
      font-size: 32 * $vw;
      border-bottom: 1px solid #e5e5e5;
      color: #010101;
    }
  }
  &-hidde {
    display: none;
  }
}
</style>
