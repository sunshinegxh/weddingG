<template>
    <div class="good animate" ref="section4">
      <img src="../assets/goodTitle.png" alt="">
      <div class="good-content">
        <div class="good-content-idx">
          <p>1</p>
        </div>
        <div class="good-content-des">
          <h3>电脑设备</h3>
          <p><span>新员工：</span>入职当天IT同事会电话联系，告知电脑 领取时间和地点,请耐心等待</p>
          <p><span>老员工：</span>设备满<span>4</span>年可更换。员工本人<span @click="jump()" class="und">登陆ERP-财务管理-物品申请-选择与之前型号相同的新电脑</span>后提交申请</p>
        </div>
      </div>
      <div class="good-content">
        <div class="good-content-idx">
          <p>2</p>
        </div>
        <div class="good-content-des">
          <h3>转接线</h3>
          <p>员工本人<span @click="jump()" class="und">登陆ERP-财务管理-物品申请-选择适配自己机型的转接线</span>后提交申请</p>
        </div>
      </div>
      <div class="good-content" v-for="(item, index) in desc" :key="index">
        <div class="good-content-idx">
          <p>{{ index + 3 }}</p>
        </div>
        <div class="good-content-des" v-html="item"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "good",
  data() {
    return {
      desc: [
        `<h3>投影仪</h3>
          <p>部门内有两个投影仪供使用，使用前签字领用<span>（3D21列）</span></p>
          <p>公司会议服务中心可凭工卡借用投影仪等会议设 备<span>（北大堂右侧）</span></p>`,
        `<h3>插线板/网线等</h3>
          <p>员工本人到<span>IT服务中心</span>登记领取即可</p>`,
        `<h3>文具</h3>
          <p>可到部门助理处领取所需文具<span>（3D21列）</span></p>`
      ]
    };
  },
  methods: {
    jump() {
      location.href =
        "https://proc1.erp.sina.com.cn/erp.php/list_goodsapply/change/indexcontroller/loadDraftView?default_id=BF671DF9-01E2-4324-BE56-6A8F222BB588";
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.good {
  img {
    margin-top: 76 * $px;
    width: 100%;
  }
  &-content {
    font-size: 26 * $px;
    display: flex;
    padding-right: 60 * $px;
    position: relative;
    &-idx {
      width: 35 * $px;
      height: 100%;
      margin: 0 24 * $px 0 49 * $px;
      p {
        width: 35 * $px;
        height: 35 * $px;
        line-height: 35 * $px;
        text-align: center;
        margin: 0;
        background: #faa746;
        border-radius: 100%;
        font-weight: bold;
      }
    }
    &-idx::after {
      content: "";
      top: 35 * $px;
      bottom: 0px;
      width: 2px;
      left: 65 * $px;
      background: #faa746;
      position: absolute;
    }
    &-des {
      flex: 1;
      text-align: left;
      h3 {
        margin: 0;
      }
      p span {
        color: #ffdd20;
      }
    }
  }
  &-content:nth-of-type(5) {
    .good-content-idx::after {
      content: "";
      top: 0;
      bottom: 0;
      width: 0;
      position: absolute;
    }
  }
}
</style>
