<template>
  <div class="seat">
    <div class="seat-title">
      <span>欢迎来李雷和韩梅梅的婚礼</span>
      <img src="../assets/seat/search.jpg" alt="" v-if="person === ''">
      <input type="text" placeholder="搜索宾客名称，快速查座" v-model="person" />
    </div>
    <div class="seat-contain">
      <div class="seat-contain-center">主席台</div>
      <div class="seat-contain-table" v-for="(item, index) in tables" :key="index" :style="style(item)">{{ item.tableNumber }}</div>
      <div class="seat-contain-door">门</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seat",
  data() {
    return {
      person: "",
      tables: []
    };
  },
  created() {
    this.getSeat();
  },
  methods: {
    getSeat() {
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/tool/getAllSeatingH5.gg", {
          weddingId: 91
        })
        .then(response => {
          // this.loading = false;
          console.log(response.body.data);
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.tables = res.tables;
            // this.cur = this.musicList[0];
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    style(item) {
      let left = (item.positionX + 4) * 40 + (item.positionX - 1) * 16;
      let top = item.positionY * 40 + (item.positionY - 1) * 16;
      return `left: ${left}px;top: ${top}px`;
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.seat {
  &-title {
    background: url("../assets/seat/seatBg.jpg") no-repeat;
    background-size: 100% 100%;
    height: 280 * $vh;
    text-align: center;
    position: relative;
    span {
      display: inline-block;
      font-size: 36 * $vw;
      color: #fff;
      font-weight: bolder;
      height: 100%;
      vertical-align: middle;
      line-height: 48 * $vh;
      margin-top: 132 * $vh;
    }
    img {
      width: 29 * $vw;
      height: 29 * $vh;
      position: absolute;
      left: 25%;
      bottom: -15 * $vh;
      transform: translate(-50%, 0);
      z-index: 10;
    }
    input {
      width: 702 * $vw;
      height: 92 * $vh;
      text-align: center;
      line-height: 92 * $vh;
      border-radius: 50 * $vw;
      border: none;
      position: absolute;
      left: 50%;
      bottom: -46 * $vh;
      transform: translate(-50%, 0);
    }
  }
  &-contain {
    position: relative;
    &-table {
      position: absolute;
      width: 88 * $vw;
      height: 88 * $vh;
      line-height: 88 * $vh;
      background: #fff;
      border-radius: 10 * $vw;
      text-align: center;
      font-size: 36 * $vw;
      text-align: center;
    }
  }
}
</style>
