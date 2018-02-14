<template>
  <div class="section-cell">
    <div class="portrait" @mouseover="portraitOverHandler" @mouseout="portraitOutHandler">
      <img src="/static/images/photo_2.jpg" width="100%" height="100%" />
      <transition name="fade">
        <img src="/static/images/photo_1.jpg" width="100%" height="100%" v-show="1 == photoNum" />
      </transition>
    </div>

    <h1 class="title">陈阳志</h1>
    <p class="motto">敢而慎之，勇敢不错失任何机会，谨慎不忽略一丝细节</p>
    <p class="job clr-primary">web前端工程师</p>
    <p class="email"><a href="mailto:me@hsuna.com">me@hsuna.com</a></p>
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
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 1rem auto;
  border: 10px solid #5dc3b1;
  border-radius: 50%;

  img {
    position: absolute;
    left: 0;
    top: 0;
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

.motto,
.email {
  font-size: 20px;
}

.job {
  line-height: 2;
  font-size: 26px;
  font-weight: bold;
}

.mobile{
  .portrait{
    width: 16rem;
    height: 16rem;
    margin-bottom: 2rem;
    border-width: .6rem;
  }

  .motto,
  .email {
    font-size: 1.8rem;
  }

  .job {
    font-size: 2.2rem;
  }
}
</style>
