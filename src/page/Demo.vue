<template>
  <div class="section-cell">
    <h1 class="title">项目展示</h1>
    <div class="content">
      <a href="http://ess.hoolinks.com" target="_blank" class="content-block">
        <i title="pc/web">P</i>
        <p class="title">昊链科技</p>
        <p>基于PC端货代服务平台</p>
      </a>
      <a href="http://weixin.niurenqushi.com/wxshow/yuexiujinkong.html" target="_blank" class="content-block">
        <i title="mobile">M</i>
        <p class="title">越秀金控</p>
        <p>基于移动微信端的金融产品</p>
      </a>
      <a href="http://www.9377.com/platform/wx_game_bridge/" target="_blank" class="content-block">
        <i title="canvas">C</i>
        <p class="title">搭桥技术</p>
        <p>基于canvas的微信小游戏</p>
      </a>
      <a href="http://www.app111.com/info/1131542853/" target="_blank" class="content-block">
        <i title="app">C</i>
        <p class="title">海印金服</p>
        <p>基于Html5+的金融网贷App</p>
      </a>
    </div>
    <div class="more">
      <p><a></a></p>
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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

@media screen and (max-width: 65em) {
  .content-block {
    width: 20%;
    margin: 2%;
  }
}
@media screen and (max-width: 55em) {
  .content-block {
    height: 10em;

    p {
      display: none;
    }
  }
}
</style>
