<template>
  <div class="form-bottom">
    <p class="title">为了方便新人，请填写您的赴宴信息</p>
    <div class="form-bottom-item">
      <span class="label">姓名</span>
      <div class="input-wrapper"><input type="text" placeholder="请输入您的姓名" v-model="formDta.name" /></div>
    </div>
    <div class="form-bottom-item">
      <span class="label">关系</span>
      <div class="input-wrapper rela" @click="showPicker" :class="{'black': isblack}">
        {{ roleText }}
      </div>
    </div>
    <div class="form-bottom-item">
      <span class="label">赴宴人数</span>
      <div class="input-wrapper">
        <span class="del-btn" role="button" @click="delNumber">-</span>
        <span class="number">{{ formDta.person }}</span>
        <span class="add-btn" role="button" @click="addNumber">+</span>
      </div>
    </div>
    <div class="submit-btn" role="button" @click="onSubmit" :style="{backgroundColor: btnColor}">确认赴宴并提交信息</div>
    <div v-if="show" class="pick-wrapper-bottom" @touchstart.stop="" @touchend.stop="" @touchmove.prevent>
      <div class="role-picker-bottom">
        <picker :visible-item-count="3" :showToolbar="true" :slots="slots" @change="onValuesChange" valueKey="relationName">
          <div class="picker-action">
            <span role="button" @click="pickerCancel">取消</span>
            <span role="button" @click="pickerSure">确认</span>
          </div>
        </picker>
      </div>
    </div>
  </div>
</template>
<script>
import { Picker } from "mint-ui";
import toast from "./toast";
import { mapState } from "vuex";
import utils from "../../libs/utils";

export default {
  name: "custom-form-bottom",
  props: ["btnColor"],
  data() {
    return {
      formDta: {
        name: "",
        role: [],
        person: 1
      },
      show: false,
      pickerData: [],
      slots: [
        {
          flex: 1,
          values: [""],
          className: "slot1",
          textAlign: "center"
        },
        {
          flex: 1,
          values: [""],
          className: "slot3",
          textAlign: "center"
        }
      ],
      isblack: false
    };
  },
  computed: {
    ...mapState({
      edit: state => state.edit
    }),
    roleText() {
      if (!this.formDta.role || this.formDta.role.length === 0) {
        return "选择您和新人的关系";
      }
      return this.formDta.role.map(({ relationName }) => relationName).join("");
    }
  },
  methods: {
    relation() {
      this.$http
        .post(`${utils.api()}/()/banhunli/tool/getRelations.gg`, {
          haveSelf: 0
        })
        .then(response => {
          this.show = true;
          let res = response.body.data;
          if (response.body.code === "0000") {
            this.slots[0].values = [...res.head];
            this.slots[1].values = [...res.tail];
          } else {
            console.log("res.respCode", res.message);
          }
        })
        .catch(e => {
          document.write(e);
        });
    },
    stopRoll() {
      /* eslint-disable no-undef */
      $.fn.pagepiling.setAllowScrolling(false);
    },
    pickerCancel() {
      /* eslint-disable no-undef */
      $.fn.pagepiling.setAllowScrolling(true);
      this.show = false;
    },
    pickerSure() {
      console.log("pickerSure");
      this.show = false;
      this.isblack = true;
      /* eslint-disable no-undef */
      $.fn.pagepiling.setAllowScrolling(true);
      this.formDta.role = this.pickerData;
    },
    addNumber() {
      // if (+this.edit === 2) {
      this.formDta.person += 1;
      // }
    },
    delNumber() {
      if (this.formDta.person > 1) {
        // if (this.formDta.person > 1 && +this.edit === 2) {
        this.formDta.person -= 1;
      }
    },
    showPicker() {
      // if (+this.edit === 2) {
      this.stopRoll();
      this.relation();
      // }
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
        .post(`${utils.api()}/()/banhunli/card/h5AddVisitor.gg`, {
          cardId: this.$route.query.cardId,
          visitorName: data.name,
          carryNumber: data.person,
          relationHead: data.role[0].relationId,
          relationTail: data.role[1].relationId
        })
        .then(response => {
          if (response.body.code === "0000") {
            toast("添加成功");
            this.$store.commit("SET_BTMDTA", this.formDta);
            // console.log(this.formDta);
            this.$store.commit("SET_INFODONE", true);
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
.form-bottom {
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 32 * $vh;
  color: #999999;
  text-align: left;
  position: absolute;
  bottom: 0;
  z-index: 100;
  background: #fff;
}
.title {
  height: 78 * $vh;
  line-height: 78 * $vh;
  background: #f0f0f0;
  color: #999999;
  font-size: 28 * $vw;
  opacity: 1;
  margin: 0;
  padding-left: 24 * $vw;
}
.form-bottom-item {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 96 * $vh;
  line-height: 96 * $vh;
  font-size: 32 * $vw;
  opacity: 1;
  margin-left: 24 * $vw;
  input {
    appearance: none;
    border: none;
    outline: none;
  }
}
.form-bottom-item:nth-of-type(3) {
  border-bottom: none;
}
.label {
  width: 148 * $vw;
  text-align: left;
  color: #000;
}
.input-wrapper {
  flex: 1;
  text-align: left;
  justify-items: center;
  input {
    color: #000;
    font-size: 32 * $vh;
  }
  input::-webkit-input-placeholder {
    color: #999999;
  }
}
.submit-btn {
  height: 94 * $vh;
  line-height: 94 * $vh;
  // margin-top: 60 * $vh;
  background: #8eb559;
  // border-radius: 47 * $vw;
  color: #ffffff;
  font-size: 36 * $vh;
  text-align: center;
  opacity: 1;
}
.number {
  margin-left: 48 * $vw;
  margin-right: 48 * $vw;
  display: inline-block;
  text-align: center;
  width: 2em;
}
.add-btn,
.del-btn {
  display: inline-block;
  width: 36 * $vw;
  height: 36 * $vh;
  vertical-align: text-top;
  line-height: 34 * $vh;
  border: 1px solid #999999;
  text-align: center;
}
.pick-wrapper-bottom {
  position: absolute;
  top: 0;
  // bottom: 0;
  right: 0;
  left: 0;
}
.pick-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 9999;
}
.picker-action {
  display: flex;
  padding: 0 36 * $vw 0 36 * $vw;
  box-sizing: border-box;
  justify-content: space-between;
  > span {
    width: 160 * $vw;
    height: 80 * $vh;
    line-height: 80 * $vh;
  }
}
.role-picker-bottom {
  z-index: 9999;
  position: absolute;
  left: 0;
  right: 0;
  // top: 900 * $vh;
  bottom: 0;
  height: 600 * $vh;
  opacity: 1;
  transform: translateY(600 * $vh);
  background: #ffffff;
}
// @keyframes opacity {
//   100% {
//     opacity: 1;
//   }
// }
.input-wrapper.rela {
  color: #999;
}
.input-wrapper.black {
  color: #000;
}
.number.black {
  color: #000;
}
</style>
