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
      musicList: [
        {
          isSystem: 1,
          musicId: 2,
          musicName: "love me tender2",
          musicUrl:
            "https://96.f.1ting.com/5b9cc88f/40a8d52b660b6d22355decefbc988ba3/zzzzzmp3/2013lDec/16W/16chenglin/02.mp3"
        },
        {
          isSystem: 2,
          musicId: 3,
          musicName: "love me tender3",
          musicUrl:
            "https://96.f.1ting.com/5b9cc88f/40a8d52b660b6d22355decefbc988ba3/zzzzzmp3/2013lDec/16W/16chenglin/02.mp3"
        }
      ],
      cur: {}
    };
  },
  created() {
    this.$http
      .get("http://192.168.0.134:3000/getIndex")
      // .post("/card/getSystemMusicList.gg", {
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
  methods: {
    choose(item) {
      this.cur = item;
      localStorage.setItem("musicId", item.musicId);
      localStorage.setItem("musicUrl", item.musicUrl);
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
