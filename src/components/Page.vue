<template>
    <section class="page" v-if="option" 
        :style="{height: '100%',background: option.background,color: option.color||'#fff',backgroundSize: 'cover'}"      
        :class="{'page-before': option.index < currentPage,
                'page-after': option.index > currentPage,
                'page-current': option.index === currentPage}">
        <slot></slot>
    </section>
    <section class="page" v-else>
        <div id="loading">
            <div>
                <div class="loading-icon"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "page",
  props: {
    currentPage: Number
  },
  data() {
    return {
      option: null
    };
  }
};
</script>
<style lang="scss" type="text/css" scoped>
.page {
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease 0s;
  z-index: 1;
}

.page-before {
  z-index: 0;
  transform: translate3d(0, -100%, 0);
}

.page-after {
  z-index: 0;
  transform: translate3d(0, 100%, 0);
}

/* 水平、垂直居中 */
.all-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#loading {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1200;
  background: #000;
  opacity: 0.6;

  div {
    .loading-icon {
      display: block;
      width: 40px;
      height: 40px;
      background-image: url("https://h5.sinaimg.cn/upload/1005/453/2018/05/30/loading.png");
      background-size: contain;
      background-repeat: no-repeat;
      animation: loading_rotate 1s infinite;
    }
  }
}

@keyframes loading_rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
