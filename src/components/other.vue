<template>
    <div class="other animate" ref="section4">
      <img src="../assets/otherTitle.png" alt="">
      <div class="other-content">
        <div class="other-content-title">
          <span>服务部门</span>
          <span>位置</span>
          <span>邮箱/电话</span>
          <span></span>
        </div>
        <div class="other-content-desc">
					<div>
						<span><p>HR共享</p><p>服务中心</p></span>
						<span>7层C区中庭</span>
						<span><p>myHR@</p><p>5588</p></span>
						<span>
							<a href="tel:010-62675588">
								<!-- <img src="../assets/phone.png" alt=""> -->
							</a>
						</span>
					</div>
					<div v-for="(item, index) in desc" :key="index">
						<span v-for="(item1, index1) in item.cont" :key="index1">{{ item1 }}</span>
						<span>
							<a :href="'tel:'+item.tel">
								<!-- <img src="../assets/phone.png" alt=""> -->
							</a>
						</span>
					</div>
        </div>
      </div>
			<div class="other-content">
				<div class="other-content-desc other-content-desc1">
					<div>
						<span>内线电话</span>
						<span><p>5898 + 2/3***</p><p>6267 + 5/6***</p></span>
						<span><p>8224 + 4***</p><p>6061 + 8/9***</p></span>
					</div>
				</div>
			</div>
      <home @changePage="changePage"></home>
    </div>
</template>

<script>
import Home from "./home";

export default {
  name: "other",
  data() {
    return {
      desc: [
        {
          cont: ["行政服务", "1层西大堂", "6789"],
          tel: "010-62676789"
        },
        {
          cont: ["IT服务", "2层B区", "5999"],
          tel: "010-62675999"
        },
        {
          cont: ["文印室", "2层A区货梯旁", "6652"],
          tel: "010-62676652"
        },
        {
          cont: ["差旅服务", "1层A区电梯旁", "6785"],
          tel: "010-62676785"
        },
        {
          cont: ["ERP系统", "*******", "3180"],
          tel: "010-62673180"
        },
        {
          cont: ["会服中心", "*******", "3649"],
          tel: "010-58983649"
        }
      ]
    };
  },
  methods: {
    changePage(index) {
      this.$emit("changePage", index);
    }
  },
  components: {
    Home
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.other {
  img {
    margin-top: 76 * $px;
    width: 100%;
    margin-bottom: 40 * $px;
  }
  &-content {
    background: #3e62e3;
    font-size: 24 * $px;
    width: 700 * $px;
    border-radius: 10 * $px;
    margin: 0 25 * $px 10 * $px;
    &-title {
      border-radius: 10 * $px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100 * $px;
      text-align: center;
      font-size: 28 * $px;
      font-weight: bold;
      background: #427bea;
      span {
        flex: 1;
        border-right: 1px solid #5691f4;
        display: block;
        height: 62 * $px;
        line-height: 62 * $px;
      }
    }
    &-desc {
      padding: 0 20 * $px;
      div {
        height: 100 * $px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #5691f4;
        span {
          flex: 1;
          display: block;
          height: 50 * $px;
          line-height: 50 * $px;
          p {
            margin: 0;
            padding: 0;
            height: 25 * $px;
            line-height: 25 * $px;
          }
          img {
            margin: 0;
            vertical-align: middle;
            width: 27 * $px;
            height: 27 * $px;
          }
        }
      }
      div:nth-of-type(7) {
        border-bottom: none;
      }
    }
    &-desc1 {
      div {
        border-bottom: none;
      }
    }
  }
}
</style>
