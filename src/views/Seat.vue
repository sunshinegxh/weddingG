<template>
  <div class="seat">
    <div class="seat-title">
      <span class="title">欢迎来李雷和韩梅梅的婚礼</span>
      <div class="input">
        <img src="../assets/seat/search.jpg" alt="" v-show="person === ''">
        <input type="text" placeholder="搜索宾客名称，快速查座" v-model="person" />
        <span class="search" v-show="person !== ''" @click="search">搜索</span>
      </div>
    </div>
    <div class="seat-table" ref="table">
      <div class="seat-table-row" v-for="(rol, i) in tables" :key="i">
        <div
          class="seat-table-cell"
          v-for="(cell, j) in rol"
          :key="j"
          :class="{
            'is-hidden': !cell,
            'is-center': cell && cell.isCenter,
            'is-top-door': cell && cell.isTDoor,
            'is-left-door': cell && cell.isLDoor,
            'is-right-door': cell && cell.isRDoor,
            'is-y-road': cell && cell.isYRoad,
            'is-x-road': cell && cell.isXRoad,
            'is-y-half-road': cell && cell.isYHRoad,
            'is-x-l-half-road': cell && cell.isXLHRoad,
            'is-x-r-half-road': cell && cell.isXRHRoad,
          }"
          v-show="!cell || !cell.hidden"
          :style="cell && cell.style"
        >
        <div class="cell-text">{{ cell && cell.tableNumber }}</div>
        <div v-if="cell && cell.isCenter" class="center-after"></div>
        <small v-if="cell && cell._selectNumber">({{cell && cell._selectNumber}})</small>
        </div>
      </div>
    </div>
    <!-- <div class="seat-share">分享给宾客</div> -->
  </div>
</template>

<script>
import toast from "../components/common/toast";
import utils from "../libs/utils";
const colorList = ["#51B0F9", "#FF666A", "#0ACA8D", "#FFA66A"];

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

  watch: {
    person(v) {
      if (v === "") {
        this.search("");
      }
    }
  },
  methods: {
    search() {
      let selectTable = [];
      this.tables.forEach(row => {
        const selectCell = row.filter(item => {
          if (item) {
            const { persons } = item;
            if (persons) {
              const number = persons.filter(p => p.name === this.person.trim());
              item.style = "";
              if (number && number.length > 1) {
                item._selectNumber = number.length;
              } else {
                item._selectNumber = 0;
              }
              if (number && number.length > 0) {
                return true;
              }
              return false;
            }
            return false;
          }
        });
        selectCell && (selectTable = [...selectTable, ...selectCell]);
      });
      selectTable.forEach((table, i) => {
        table.style = {
          backgroundColor: colorList[i % colorList.length],
          color: "#fff"
        };
      });
      if (!selectTable.length) {
        toast("暂未搜到～");
      }
    },

    format(data, door) {
      if (!door) {
        return;
      }
      const result = [];
      const xArr = data.map(({ positionX }) => positionX);
      const lx = Math.abs(Math.min(...xArr));
      const rx = Math.abs(Math.max(...xArr));
      const size = Math.max(lx, rx, Math.abs(door.positionX));
      const rolNum = size * 2 + 1;
      data.map(({ positionX, positionY, tableNumber, ...rest }) => {
        const x = size + positionX;
        if (!result[positionY]) {
          result[positionY] = Array(rolNum);
        }
        result[positionY][x] = {
          tableNumber,
          ...rest,
          _selectNumber: 0,
          style: ""
        };
      });
      // 处理door
      if (!result[door.positionY]) {
        result[door.positionY] = Array(rolNum);
      }
      let doorType = "";
      if (door.positionX === 0) {
        doorType = "isTDoor";
      } else if (door.positionX > 0) {
        doorType = "isRDoor";
      } else {
        doorType = "isLDoor";
      }
      result[door.positionY][door.positionX + size] = {
        tableNumber: "门",
        [doorType]: true,
        ...door
      };
      // 处理主席台，主席台从 -1 到 1占3个格子
      if (!result[0]) {
        result[0] = Array(rolNum);
      }
      result[0][size] = {
        tableNumber: "主席台",
        isCenter: true
      };
      result[0][size - 1] = result[0][size + 1] = {
        hidden: true
      };
      // 处理通道
      for (let y = 1; y <= door.positionY; y++) {
        if (y === door.positionY && door.positionX === 0) {
          continue;
        }
        !result[y] && (result[y] = []);
        const type = y === door.positionY ? "isYHRoad" : "isYRoad";
        !result[y][size] && (result[y][size] = {});
        result[y][size] = {
          ...result[y][size],
          [type]: true
        };
      }

      const minX = size + Math.min(door.positionX, 0);
      const maxX = size + Math.max(door.positionX, 0);
      const half = door.positionX > 0 ? "isXRHRoad" : "isXLHRoad";
      for (let x = minX; x <= maxX; x++) {
        if (x !== size + door.positionX) {
          const type = x === size ? half : "isXRoad";
          !result[door.positionY][x] && (result[door.positionY][x] = {});
          result[door.positionY][x] = {
            ...result[door.positionY][x],
            [type]: true
          };
        }
      }

      this.tables = result;
      this.$nextTick(() => {
        const x = (((rolNum * 12000) / 750 - 100) * window.innerWidth) / 200;
        this.$refs.table.scrollLeft = x;
      });
    },

    getSeat() {
      this.$http
        .post(`http://${utils.api()}/()/banhunli/tool/getAllSeatingH5.gg`, {
          weddingId: this.weddingId
        })
        .then(response => {
          // this.loading = false;
          console.log(response.body.data);
          if (response.body.code === "0000") {
            const res = response.body.data;
            this.tables = res.tables;
            // this.tables[0].persons.push({
            //   name: "斌斌"
            // });
            // this.tables[1].persons.push({
            //   name: "斌斌"
            // });
            // this.tables = Array.from(Array(3), (i, index) => {
            //   return {
            //     positionX: index - 1,
            //     positionY: 1,
            //     tableNumber: index + 1
            //   };
            // });
            // this.tables.push({
            //   positionX: 7,
            //   positionY: 1,
            //   tableNumber: 13
            // })
            this.door = res.door;
            // this.door = {
            //   positionX: 6,
            //   positionY: 2
            // };
            // this.tables = this.tables.filter(
            //   ({ positionX }) => positionX !== 0
            // );
            // this.tables.push(
            //   {
            //     positionX: -2,
            //     positionY: 0,
            //     tableNumber: -1
            //   },
            //   {
            //     positionX: 2,
            //     positionY: 0,
            //     tableNumber: -1
            //   }
            // );
            this.format(this.tables, this.door);
            // this.cur = this.musicList[0];
          } else {
            console.log("res.respCode", response.body.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    weddingId() {
      return this.$route.query.weddingId;
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.seat {
  /* overflow: auto; */
  height: 100vh;
  &-title {
    background: url("../assets/seat/seatBg.jpg") no-repeat;
    background-size: 100% 100%;
    height: 280 * $vh;
    text-align: center;
    position: relative;
    z-index: 10;
    .title {
      display: inline-block;
      font-size: 36 * $vw;
      color: #fff;
      font-weight: bolder;
      /* height: 100%; */
      /* vertical-align: middle; */
      line-height: 48 * $vh;
      margin-top: 140 * $vh;
    }
    .input {
      width: 702 * $vw;
      height: 92 * $vh;
      text-align: center;
      /* line-height: 92 * $vh; */
      position: relative;
      margin: 46 * $vh auto 0 auto;
      /* left: 50%; */
      /* bottom: -46 * $vh; */
      /* transform: translate(-50%, 0); */
      img {
        width: 29 * $vw;
        height: 29 * $vh;
        position: absolute;
        top: 50%;
        left: 25%;
        // bottom: -15 * $vh;
        transform: translate(-50%, -50%);
        z-index: 10;
      }
      input {
        border-radius: 50 * $vw;
        text-align: center;
        width: 100%;
        height: 92 * $vh;
        padding: 0 20 * $vw;
        box-sizing: border-box;
        /* position: absolute; */
        /* top: 10 * $vh; */
        /* left: 0 * $vw; */
        /* right: 0 * $vw; */
        /* bottom: 10 * $vh; */
        background: #fff;
        border: none;
        outline: none;
      }
      .search {
        position: absolute;
        color: #6892fa;
        font-size: 28 * $vh;
        line-height: 92 * $vh;
        right: 48 * $vw;
      }
    }
  }
  &-table {
    /* margin-top: 46 * $vh; */
    position: relative;
    border-collapse: separate;
    border-spacing: 16 * $vh 16 * $vw;
    height: 90vh - 280 * $vh;
    padding-top: 46 * $vh;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100vw;
    // max-height: 100vh - 280 * $vh;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    &-row {
      display: flex;
      flex-wrap: nowrap;
      margin-left: auto;
      margin-right: auto;
      height: 120 * $vw;
      // min-width: 100%;
    }
    &-cell {
      &.is-hidden {
        visibility: hidden;
      }
      &.is-center {
        background: none;
        margin-top: 0;
        .cell-text {
          width: 300 * $vw;
          height: 48 * $vw;
          line-height: 48 * $vw;
          font-size: 28 * $vw;
          text-align: center;
          background: #dddddd;
          color: #999;
          margin: 0 14 * $vw;
          border-radius: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 10 * $vw;
          border-bottom-right-radius: 10 * $vw;
        }
        // overflow: hidden;
        .center-after {
          margin: 0 148 * $vw;
          display: block;
          width: 32 * $vw;
          height: 72 * $vw;
          background: #dddddd;
        }
        // &::after {
        //   content: "";
        //   margin: 0 auto;
        //   display: block;
        //   width: 32 * $vw;
        //   height: 76 * $vw;
        //   background: #dddddd;
        // }
      }
      &.is-top-door {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: -16 * $vw;
          left: 28 * $vw;
          width: 32 * $vw;
          height: 16 * $vw;
          background: #dddddd;
        }
      }
      &.is-left-door,
      &.is-right-door {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          top: 28 * $vw;
          width: 16 * $vw;
          height: 32 * $vw;
          background: #dddddd;
        }
      }
      &.is-left-door::after {
        right: -16 * $vw;
      }
      &.is-right-door::after {
        left: -16 * $vw;
      }
      // &.is-right-door::before {
      //   content: '';
      //   display: inline-block;
      //   width: 16 * $vw;
      //   height: 32 * $vh;
      //   margin-left: -16 * $vw;
      //   background: #dddddd;
      // }
      &.is-y-road {
        margin-top: -32 * $vw;
        width: 32 * $vw;
        height: 120 * $vw;
        margin: 0 44 * $vw;
        background: #dddddd;
        border-radius: 0;
      }
      &.is-y-half-road {
        background: none;
        &::before {
          content: "";
          display: block;
          height: 44 * $vw;
          width: 32 * $vw;
          margin: -16 * $vw auto 0 auto;
          background: #dddddd;
          border-radius: 0;
        }
      }
      &.is-x-road {
        width: 120 * $vw;
        height: 32 * $vw;
        margin: 44 * $vw 0;
        background: #dddddd;
        border-radius: 0;
      }
      &.is-x-l-half-road,
      &.is-x-r-half-road {
        background: none;
        &::after {
          content: "";
          display: block;
          width: 76 * $vw;
          height: 32 * $vw;
          background: #dddddd;
          border-radius: 0;
        }
      }
      &.is-x-l-half-road::after {
        margin-left: -16 * $vw;
      }
      &.is-x-r-half-road::after {
        margin-left: 28 * $vw;
      }
      // &.is-x-half-road {
      //   background: none;
      //   &::after {
      //     content: '';
      //     display: block;
      //     margin-left: -16 * $vw;
      //     width: 76 * $vw;
      //     height: 32 * $vh;
      //     background: #dddddd;
      //     border-radius: 0;
      //   }
      // }
      flex-shrink: 0;
      margin: 16 * $vw 16 * $vw;
      width: 88 * $vw;
      height: 88 * $vw;
      line-height: 88 * $vw;
      background: #fff;
      border-radius: 10 * $vw;
      text-align: center;
      font-size: 36 * $vw;
      text-align: center;
    }
  }
  &-share {
    width: 502 * $vw;
    height: 94 * $vh;
    margin: 20 * $vh auto;
    line-height: 94 * $vh;
    text-align: center;
    // position: absolute;
    // left: 50%;
    // bottom: 48 * $vh;
    // transform: translate(-50%, 0);
    color: #fff;
    background: #739afc;
    font-size: 36 * $vw;
    border-radius: 50 * $vw;
  }
}
</style>
