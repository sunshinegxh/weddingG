<template>
  <div>
    <div class="pick-mask"></div>
      <div class="role-picker">
        <picker :visible-item-count="3" :showToolbar="true" :slots="slots" @change="onValuesChange" valueKey="relationName">
          <div class="picker-action">
            <span role="button" @click="pickerCancel">取消</span>
            <span role="button" @click="pickerSure">确认</span>
          </div>
        </picker>
      </div>
  </div>
</template>
