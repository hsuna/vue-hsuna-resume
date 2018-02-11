<template>
  <div class="section-cell">
    <div class="portrait" @mouseover="portraitOverHandler" @mouseout="portraitOutHandler">
      <transition name="fade">
        <img src="/static/images/photo_1.jpg" v-show="0 == photoNum">
      </transition>
      <transition name="fade">
        <img src="/static/images/photo_2.jpg" v-show="1 == photoNum">
      </transition>
    </div>

    <h1 class="title">陈阳志</h1>
    <p class="fs11">敢而慎之，勇敢不错失任何机会，谨慎不忽略一丝细节</p>
    <h3 class="clr-comm">web前端工程师</h3>
    <p><a href="mailto:1622427381@qq.com">1622427381@qq.com</a></p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      photoNum: 0
    };
  },
  methods: {
    portraitOverHandler() {
      this.photoNum = 1;
    },
    portraitOutHandler() {
      this.photoNum = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.portrait {
  margin: 1rem auto;
  position: relative;
  width: 200px;
  height: 200px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    border: 10px solid #5dc3b1;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
