<template>
  <div class="section-cell">
    <h1 class="title">项目展示</h1>
    <div class="content">
      <a href="https://www.hoolinks.com" target="_blank" class="content-block">
        <i title="pc/web">W</i>
        <p class="title">昊链科技</p>
        <p class="info">一站式物流供应链服务平台</p>
      </a>
      <a href="https://www.hoolinks.com/cloudHub/kklinks.html" target="_blank" class="content-block">
        <i title="mobile">M</i>
        <p class="title">链英汇</p>
        <p class="info">关务供应链咨询社区网站</p>
      </a>
      <a href="http://www.app111.com/info/1131542853/" target="_blank" class="content-block">
        <i title="app">A</i>
        <p class="title">海印金服</p>
        <p class="info">p2p金融网贷App</p>
      </a>
      <a href="http://www.9377.com/platform/wx_game_bridge/" target="_blank" class="content-block">
        <i title="canvas">C</i>
        <p class="title">搭桥技术</p>
        <p class="info">活动专题微信小游戏</p>
      </a>
    </div>
    <div class="more">
      <p><a href="https://github.com/hsuna/">
        <i class="hr hr-github"></i>查看更多
      </a></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="scss" scoped>
.content-block {
  display: inline-block;
  width: 200px;
  height: 250px;
  margin: 16px;
  border-radius: 16px;
  border: 2px solid #999;
  box-shadow: 4px 4px 2px #102c3c;
  vertical-align: top;
  font-size: 18px;
  cursor: pointer;

  i {
    display: inline-block;
    width: 70px;
    line-height: 70px;
    margin: 35px 0 10px;
    border: 2px solid #999;
    border-radius: 50%;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
  }

  .title {
    font-size: 22px;
    font-weight: bold;
  }

  p {
    line-height: 1.5;
    margin: 10px;
  }

  &:hover {
    color: #5dc3b1;
    border-color: #5dc3b1;

    i {
      color: #071822;
      background-color: #5dc3b1;
      border-color: #5dc3b1;
    }
  }
}

.info {
  margin: 1em;
}

.mobile {
  .content-block {
    width: 40%;
  }
}

.more {
  margin-top: 5px;
  font-size: 16px;

  .hr-github {
    margin-right: 6px;
    font-size: 20px;
  }
}

/**响应式 */
@media screen and (max-width: 600px) {
  .content-block {
    height: 200px;

    i {
      width: 60px;
      line-height: 60px;
    }

    .info {
      display: none;
    }
  }
}
@media screen and (max-width: 960px) {
  .content-block {
    width: 20%;
    margin: 2%;

    i {
      margin-top: 25px;
    }
  }
}

/**移动端 */
.mobile {
  .content-block {
    width: 45%;

    p {
      margin: 0.5rem;
    }

    i {
      margin-top: 1.8rem;
      margin-bottom: 0;
    }

    .title {
      margin-top: 1.5rem;
      font-size: 2rem;
    }

    .info {
      display: block;
      font-size: 1.8rem;
    }
  }
}
</style>
