<template>
  <div class="bless">
    <div>
      <span>祝福</span>
      <div class="bless-wrapper">
        <input type="text" placeholder="填写您的祝福" v-model="blession" />
      </div>
    </div>
    <div>
      <span>祝福人</span>
      <div class="person-wrapper">
        <input type="text" placeholder="填写您的姓名" v-model="person" />
      </div>
      <span class="sendB" @click="sub" :class="{'active': isSend}">发送</span>
    </div>
  </div>
</template>
<script>
import { Picker } from "mint-ui";
import toast from "./toast";
import { mapState } from "vuex";

export default {
  name: "send-bless",
  data() {
    return {
      blession: "",
      person: ""
    };
  },
  computed: {
    ...mapState({
      cardId: state => state.cardId
    }),
    isSend() {
      return this.person !== "" && this.blession !== "";
    }
  },
  methods: {
    sub() {
      if (this.isSend) {
        this.$http
          .post("http://47.105.43.207:80/()/banhunli/card/addWish.gg", {
            cardId: this.cardId,
            wishUserName: this.person,
            wish: this.blession
          })
          .then(response => {
            this.show = true;
            if (response.body.code === "0000") {
              toast("发布成功！");
              this.$emit("send");
            } else {
              toast("发布失败~");
            }
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        toast("信息不全！");
      }
    },
    pickerSure() {
      console.log("pickerSure");
      this.show = false;
      this.formDta.role = this.pickerData;
    },
    addNumber() {
      this.formDta.person += 1;
    },
    delNumber() {
      if (this.formDta.person > 1) {
        this.formDta.person -= 1;
      }
    },
    showPicker() {
      this.relation();
    },
    onValuesChange(picker, values) {
      console.log("picker", values);
      this.pickerData = values;
    },
    onSubmit() {
      const data = this.formDta;
      if (!data.name.trim() || (!data.role || data.role.length === 0)) {
        toast("请完善个人信息！");
        return;
      }
      this.$http
        .post("http://47.105.43.207:80/()/banhunli/card/h5AddVisitor.gg", {
          cardId: this.$route.query.cardId,
          visitorName: data.name,
          carryNumber: data.person,
          relationHead: data.role[0].relationId,
          relationTail: data.role[1].relationId
        })
        .then(response => {
          if (response.body.code === "0000") {
            toast("添加成功");
            this.$emit("submit");
          } else {
            toast(response.body.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    }
  },
  components: {
    Picker
  }
};
</script>
<style lang="scss" scoped>
@import "../../common.scss";
.bless {
  width: 100%;
  height: 278 * $vh;
  background: #fff;
  position: fixed;
  bottom: 0;
  // top: 900 * $vh;
  left: 0;
  div {
    height: 139 * $vh;
    overflow: hidden;
    span {
      height: 139 * $vh;
      line-height: 139 * $vh;
      font-size: 16px;
      float: left;
      margin-left: 25 * $vw;
    }
    div {
      height: 92 * $vh;
      line-height: 92 * $vh;
      text-align: left;
      border: 1px solid rgba(187, 187, 187, 1);
      border-radius: 10 * $vw;
      margin-top: 32 * $vh;
      padding-left: 32 * $vw;
      box-sizing: border-box;
      input {
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .bless-wrapper {
      width: 557 * $vw;
      margin-left: 169 * $vw;
    }
    .person-wrapper {
      width: 335 * $vw;
      margin-left: 48 * $vw;
      float: left;
    }
    .sendB {
      width: 174 * $vw;
      border-radius: 10 * $vw;
      height: 92 * $vh;
      line-height: 92 * $vh;
      background: #ccc;
      color: #fff;
      margin-left: 48 * $vw;
      margin-top: 32 * $vh;
    }
    .sendB.active {
      background: rgb(142, 181, 89);
    }
  }
}
</style>
