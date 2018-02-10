<template>
  <div class="section-cell">
    <h1 class="title">项目展示</h1>
    <div class="content">
      <a href="http://ess.hoolinks.com" target="_blank" class="content-block">
        <i title="pc/web">P</i>
        <h4>昊链科技</h4>
        <p>基于PC端货代服务平台</p>
      </a>
      <a href="http://weixin.niurenqushi.com/wxshow/yuexiujinkong.html" target="_blank" class="content-block">
        <i title="mobile">M</i>
        <h4>越秀金控</h4>
        <p>基于移动微信端的金融产品</p>
      </a>
      <a href="http://www.9377.com/platform/wx_game_bridge/" target="_blank" class="content-block">
        <i title="canvas">C</i>
        <h4>搭桥技术</h4>
        <p>基于canvas的微信小游戏</p>
      </a>
      <a href="http://www.app111.com/info/1131542853/" target="_blank" class="content-block">
        <i title="app">C</i>
        <h4>海印金服</h4>
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
  cursor: pointer;
  display: inline-block;
  width: 12em;
  height: 14em;
  margin: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  border-radius: 1em;
  border: 2px solid #999;
  box-shadow: 4px 4px 2px #102c3c;
  vertical-align: top;

  i {
    display: inline-block;
    font-size: 2em;
    width: 2em;
    line-height: 2em;
    margin: 1em 0 0.5em 0;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    /*color: #071822;*/
    border: 2px solid #999;
    /*background-color: #999;*/
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  p {
    margin: 0.5em;
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
