<template>
  <div class="section-cell">
    <h1 class="title">工作经历</h1>
    <div class="info">
      <p>一步一个脚印，即使时间再短，也会有所收获，生活总是充满故事</p>
    </div>
    <div class="content">
      <div class="part">
        <h3 class="clr-comm">广州菲音信息科技有限公司</h3>
        <h6>2013年4月~2014年4月</h6>
        <p>开发部  游戏前端开发工程师</p>
        <p>负责游戏前端开发</p>
        <p>使用svn进行版本控制</p>
        <p>工作之余开始前端各项技能的学习</p>
      </div>
      <div class="part">
        <h3 class="clr-comm">广州创思信息技术有限公司</h3>
        <h6>2014年6月~2016年5月</h6>
        <p>技术部  web前端开发工程师</p>
        <p>负责网页交互设计、编辑，及性能优化</p>
        <p>负责canvas小游戏的开发及制作</p>
        <p>工作之余开始对JS闭包，原型链等高级特性进行深入研究</p>
      </div>
      <div class="part">
        <h3 class="clr-comm">广州帝隆科技股份有限公司</h3>
        <h6>2016年6月~2016年8月</h6>
        <p>技术部  web前端开发工程师</p>
        <p>负责各项目前端开发及维护，包括PC端，移动端，APP等</p>
        <p>使用cmd进行JS自动化压缩、提交等</p>
        <p>负责svn版本控制、合并等</p>
        <p>工作之余开始着重与移动方面的研究及项目管理，了解ES6新特性</p>
      </div>
      <div class="part">
        <h3 class="clr-comm">广州市昊链信息科技股份有限公司</h3>
        <h6>2016年9月~至今</h6>
        <p>开发部  web前端开发工程师</p>
        <p>负责网站平台、官网前端、微信端的开发及维护</p>
        <p>负责优化，重构模块代码，优化性能</p>
        <p>负责JS插件开发，微信本地代理调试等</p>
        <p>现阶段主要学习ES6、ES7及Node.js</p>
      </div>
    </div>
    <div class="axis">
      <a>2013/4</a>
      <a>2014/6</a>
      <a>2016/6</a>
      <a>2016/9</a>
      <span class="line"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="scss" scoped>
#exp .content {
  position: relative;
  margin: 1em auto 0 auto;
  min-width: 5em;
  height: 13em;

  .part {
    display: none;
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
  }
}
.axis {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  color: #999;
  border-bottom: 2px solid #999;
  font-size: 0.5em;

  a,
  .line {
    display: inline-block;
    width: 10em;
  }

  a {
    position: relative;
    z-index: 1;
    padding-bottom: 1em;

    &:after {
      background-color: #071822;
      position: absolute;
      display: block;
      margin: 0 auto;
      width: 0.6em;
      height: 0.6em;
      bottom: -0.5em;
      left: 0;
      right: 0;
      border: 2px solid #999;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      content: "";
    }

    &.active {
      color: #5dc3b1;
    }

    &.active:after {
      border-color: #5dc3b1;
    }
  }

  .line {
    position: absolute;
    height: 2px;
    bottom: -2px;
    transition: left 0.3s;
    -webkit-transition: left 0.3s;
    -moz-transition: left 0.3s;
    background-color: #5dc3b1;
  }
}

.mobile {
  .content {
    height: 15em;
  }
  .axis {
    font-size: 0.6em;

    a,
    .line {
      width: 6em;
    }
  }
}
</style>
