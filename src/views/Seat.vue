<template>
  <div class="seat">
    <div class="seat-title">
      <span>欢迎来李雷和韩梅梅的婚礼</span>
      <img src="../assets/seat/search.jpg" alt="" v-if="person === ''">
      <input type="text" placeholder="搜索宾客名称，快速查座" v-model="person" />
    </div>
    <div class="seat-contain">
      <div class="seat-contain-table">
        <div class="seat-contain-row" v-for="(item, i) in result" :key="i" :style="{width: '345vw'}">
          <div class="seat-contain-cell" v-for="(item1, j) in item" :key="j" :class="{'is-hidden': !item1, 'is-center': item1 && item1.isCenter}">{{ item1 && item1.tableNumber }}</div>
        </div>
      </div>
      <!-- <div class="seat-contain-door" :style="style(door)">门</div> -->
    </div>
    <div class="seat-share">分享给宾客</div>
  </div>
</template>

<script>
export default {
  name: "Seat",
  data() {
    return {
      person: "",
      tables: [],
      result: [],
      rolNum: 0,
      door: {}
    };
  },
  created() {
    this.getSeat();
  },
  methods: {
    format(data, door) {
      const result = [];
      const xArr = data.map(({ positionX }) => positionX);
      debugger;
      const size = Math.abs(Math.min(...xArr));
      [door, ...data].map(({ positionX, positionY, tableNumber }) => {
        const x = size + positionX;
        if (!result[positionY]) {
          result[positionY] = [];
        }
        result[positionY][x] = {
          tableNumber
        };
      });
      if (!result[0]) {
        result[0] = [];
      }
      result[0][size] = {
        tableNumber: "主席台",
        isCenter: true
      };

      this.result = result;
      console.log("aaa", result);
    },

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
            // this.tables = res.tables;
            this.tables = Array.from(Array(21), (i, index) => {
              return {
                positionX: index - 10,
                positionY: 1,
                tableNumber: index + 1
              };
            });
            this.door = res.door;
            this.tables = this.tables.filter(
              ({ positionX }) => positionX !== 0
            );
            this.format(this.tables, { ...res.door, tableNumber: "门" });
            // this.cur = this.musicList[0];
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    // style(item) {
    //   let left = (item.positionX) * 40 + (item.positionX - 1) * 16;
    //   let top = item.positionY * 40 + (item.positionY - 1) * 16;
    //   // let left = (item.positionX + 4) * 40 + (item.positionX - 1) * 8;
    //   // let top = item.positionY * 40 + (item.positionY - 1) * 8;
    //   return `left: ${left}px;top: ${top}px`;
    // }
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
    padding-top: 120 * $vh;
    // display: flex;
    // flex-wrap: nowrap;
    // overflow: auto;
    // min-height: calc(100vh - 300 * $vh);
    // width: 100%;
    // transform: translateX(50%);
    // top: 280 * $vh;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // overflow: auto;
    &-row {
      display: block;
      // display: flex;
      // flex-wrap: nowrap;
      // transform: translateX(-20%);
      // display: table-row;
      min-width: 100%;
      // height: 88 * $vh;
      // white-space: nowrap;
    }
    &-cell {
      &.is-hidden {
        visibility: hidden;
      }
      &.is-center {
        min-width: 300 * $vw;
        max-width: 300 * $vw;
        width: 300 * $vw;
        height: 48 * $vh;
        line-height: 48 * $vh;
        font-size: 28 * $vw;
        text-align: center;
        background: #dddddd;
        color: #999;
        margin: 0;
        transform: translateX(-110 * $vw);
        border-top-left-radius: 0 * $vw;
        border-top-right-radius: 0 * $vw;
        border-bottom-right-radius: 10 * $vw;
        border-bottom-left-radius: 10 * $vw;
      }
      display: inline-block;
      // display: table-cell;

      flex-shrink: 0;
      margin: 16 * $vh 16 * $vw;
      min-width: 88 * $vw;
      width: 88 * $vw;
      max-width: 88 * $vw;
      height: 88 * $vh;
      line-height: 88 * $vh;
      background: #fff;
      border-radius: 10 * $vw;
      text-align: center;
      font-size: 36 * $vw;
      text-align: center;
    }
    &-table {
      position: relative;
      border-collapse: separate;
      border-spacing: 16 * $vh 16 * $vw;
      // transform: translateX(-50%);
      overflow: auto;
      // transform: translate(50%);
      // position: absolute;
      // display: inline-block;
      // flex-shrink: 0;
      // margin: 16 * $vh 16 * $vw;
      // width: 88 * $vw;
      // height: 88 * $vh;
      // line-height: 88 * $vh;
      // background: #fff;
      // border-radius: 10 * $vw;
      // text-align: center;
      // font-size: 36 * $vw;
      // text-align: center;
    }
    &-center {
      width: 300 * $vw;
      height: 48 * $vh;
      line-height: 48 * $vh;
      font-size: 28 * $vw;
      text-align: center;
      background: #dddddd;
      color: #999;
      position: absolute;
      left: 16 * $vw;
      left: 50%;
      top: 46 * $vh;
      transform: translate(-50%, 0);
      border-top-left-radius: 0 * $vw;
      border-top-right-radius: 0 * $vw;
      border-bottom-right-radius: 10 * $vw;
      border-bottom-left-radius: 10 * $vw;
    }
    &-door {
      width: 88 * $vw;
      height: 88 * $vh;
      line-height: 88 * $vh;
      font-size: 28 * $vw;
      text-align: center;
      background: #dddddd;
      color: #999;
      position: absolute;
      border-radius: 10 * $vw;
    }
  }
  &-share {
    width: 502 * $vw;
    height: 94 * $vh;
    line-height: 94 * $vh;
    position: absolute;
    left: 50%;
    bottom: 48 * $vh;
    transform: translate(-50%, 0);
    color: #fff;
    background: #739afc;
    font-size: 36 * $vw;
    border-radius: 50 * $vw;
  }
}
</style>
