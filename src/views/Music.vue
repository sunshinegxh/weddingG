<template>
  <ul class="music">
    <li v-for="(item, index) in musicList" :key="index" @click="choose(item)">
      <img v-show="item.musicId === cur.musicId" src="../assets/music.png" alt="">
      <span>{{ item.musicName }}</span>
    </li>
  </ul>
</template>

<script>
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
        .post(
          "http://47.105.43.207:80/()/banhunli/card/getSystemMusicList.gg",
          {
            pageNo: 1,
            pageSize: 20
          }
        )
        .then(response => {
          // this.loading = false;
          console.log(response.body.data.musics);
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.musicList = res.musics;
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    set() {
      return `${this.cur.musicId}-${this.cur.musicUrl}`;
    },
    choose(item) {
      this.cur = item;
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
    display: flex;
    img {
      width: 36 * $px;
      height: 36 * $px;
      line-height: 36 * $px;
    }
    span {
      flex: 1;
      text-align: left;
      padding-left: 84 * $px;
      line-height: 96 * $px;
      font-size: 32 * $px;
      border-bottom: 1px solid #000;
      color: #010101;
    }
  }
}
</style>
