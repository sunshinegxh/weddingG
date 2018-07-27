<template>
    <div class="hrbp animate" ref="section4">
      <img src="../assets/hrbpTitle.png" alt="">
      <!-- <div class="hrbp-content" v-for="(item, index) in desc" :key="index">
        <div class="hrbp-content-idx">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="hrbp-content-des" v-html="item"></div>
      </div> -->
      <div class="hrbp-content">
        <div class="hrbp-content-idx">
          <p>1</p>
        </div>
        <div class="hrbp-content-des">
          <h3>车辆管理</h3>
          <p>打印填写<span @click="printing('新浪大厦报备车辆员工安全承诺书')" class="und">《安全承诺书》</span>，手签相关内容；<br/>
             车辆为员工<span>本人</span>，提交<span>行驶证复印件；</span><br/>
             车辆为员工<span>配偶</span>,提交<span>行驶证、结婚证复印件；</span><br/>
             车辆为员工<span>家属</span>,提交<span>行驶证、户口本复印件；</span>
          </p>
          <p>安全承诺书和车辆材料提交纸质版，钉在一起交至<span>部门助理处</span></p>
          <p>访客车辆停放：提前一天报备，邮件发送访客姓名、电话、车型、车牌号，到访时间段，到访原因至部门助理邮箱</p>
        </div>
      </div>
      <div class="hrbp-content">
        <div class="hrbp-content-idx">
          <p>2</p>
        </div>
        <div class="hrbp-content-des">
          <h3>门禁/工牌卡补办</h3>
          <p>门禁卡(考勤卡)补办：<span class="und" @click="jump('erp')">登录ERP-行政服务-新建-门禁卡补办申请</span></p>
          <p>工牌卡(照片卡)补办：邮件发送补办需求至秦鹏<br/>
            <span class="und"><a href="mailto:qinpeng@staff.sina.com.cn">（qinpeng@staff.sina.com.cn）</a></span>
          </p>
        </div>
      </div>
      <div class="hrbp-content">
        <div class="hrbp-content-idx">
          <p>3</p>
        </div>
        <div class="hrbp-content-des">
          <h3>加入工会</h3>
          <p>邮件发送“<span>姓名</span>”“<span>工号</span>”及<span>申请加入工会</span>至傅毅<br/>
            <span class="und"><a href="mailto:fuyi@staff.sina.com.cn">（fuyi@staff.sina.com.cn）</a></span>
          </p>
        </div>
      </div>
      <div class="hrbp-content">
        <div class="hrbp-content-idx">
          <p>4</p>
        </div>
        <div class="hrbp-content-des">
          <h3>人力资源相关</h3>
          <p>可通过<span>ERP-MYHR-HR门户</span>中查询<br/>
             链接：<span class="und" @click="jump('hr')">MY HR</span>
          </p>
        </div>
      </div>
      <div class="hrbp-content">
        <div class="hrbp-content-idx">
          <p>5</p>
        </div>
        <div class="hrbp-content-des">
          <h3>健康中心</h3>
          <p>营业时间：每周一、三、五10：00~17:00</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "hrbp",
  data() {
    return {
      desc: [
        `<h3>车辆管理</h3>
          <p>打印填写<span class="und">《安全承诺书》</span>，手签相关内容；<br/>
             车辆为员工<span>本人</span>，提交<span>行驶证复印件；</span><br/>
             车辆为员工<span>配偶</span>,提交<span>行驶证、结婚证复印件；</span><br/>
             车辆为员工<span>家属</span>,提交<span>行驶证、户口本复印件；</span>
          </p>
          <p>安全承诺书和车辆材料提交纸质版，钉在一起交至<span>部门助理处</span></p>
          <p>访客车辆停放：提前一天报备，邮件发送访客姓名、电话、车型、车牌号，到访时间段，到访原 因至部门助理邮箱</p>`,
        `<h3>门禁/工牌卡补办</h3>
          <p>门禁卡(考勤卡)补办：<span class="und">登录ERP-行政服务-新建 -门禁卡补办申请</span></p>
          <p>工牌卡(照片卡)补办：邮件发送补办需求至秦鹏<br/>
            <span class="und">（qinpeng@staff.sina.com.cn）</span>
          </p>`,
        `<h3>加入工会</h3>
          <p>邮件发送“<span>姓名</span>”“<span>工号</span>”及<span>申请加入工会</span>至傅毅<br/>
            <span class="und">（fuyi@staff.sina.com.cn）</span>
          </p>`,
        `<h3>人力资源相关</h3>
          <p>可通过<span>ERP-MYHR-HR门户</span>中查询<br/>
             链接：<span class="und">MY HR</span>
          </p>`,
        `<h3>健康中心</h3>
          <p>营业时间：每周一、三、五10：00~17:00</p>`
      ]
    };
  },
  methods: {
    jump(text) {
      if (text === "erp") {
        location.href =
          "http://oa.erp.sina.com.cn/workflow/index.php/queryForm/create_xz?currentMenuId=FE3B6A24-303C-43F9-A94A-76FA5F80C14A";
      } else if (text === "hr") {
        location.href = "http://hr.intra.sina.com.cn/index.php/index/empl";
      }
    },
    printing(con) {
      if (window.appInterface) {
        window.appInterface.call("urlDownload", {
          url: `http://html5.pages.intra.weibo.cn/newbee/docs/${con}.docx`,
          name: con
        });
      }
    }
  }
};
</script>

<style lang="scss" type="text/css">
@import "../common.scss";

.hrbp {
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
        margin: 0 0 15 * $px 0;
      }
      p {
        margin: 0 0 8 * $px 0;
        span {
          color: #ffdd20;
        }
      }
    }
  }
  &-content:nth-of-type(5) {
    .hrbp-content-idx::after {
      content: "";
      top: 0;
      bottom: 0;
      width: 0;
      position: absolute;
    }
  }
}
</style>
