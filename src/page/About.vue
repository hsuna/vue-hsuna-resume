<template>
  <div class="section-cell">
    <h1 class="title">关于我</h1>
    <div class="content">
      <div class="content-block"><i class="iconfont icon-medal"></i>学历 / 大专</div>
      <div class="content-block"><i class="iconfont icon-time"></i>年龄 / 26岁</div>
      <div class="content-block"><i class="iconfont icon-location"></i>坐标 / 广州</div>
      <div class="content-block"><i class="iconfont icon-my"></i>状态 / 在职</div>
    </div>
    <div class="info">
      <p>2013年毕业于广东交通职业技术学院，现就职于广州市昊链信息科技股份有限公司</p>
      <p>比起使用更喜欢研究，看别人的代码，悟别人的思想，只要有思想的代码都是可让人学习的代码</p>
      <p>一个先学js，后学css的F2E  →_→</p>
      <p>为什么学js，因为...closure&prototype</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="scss" scoped>
.content {
  margin: 50px 0;
  font-size: 24px;
}
.content-block {
  display: inline-block;
  min-width: 200px;
  width: 15%;

  &:hover {
    color: #5dc3b1;
  }

  i {
    padding-right: 5px;
    font-size: 30px;
  }
}
.info {
  position: relative;
  display: inline-block;
  padding: 18px 35px;
  font-size: 18px;

  &:before,
  &:after {
    position: absolute;
    width: 35px;
    height: 35px;
    content: "";
  }

  &:before {
    top: 0;
    left: 0;
    border-top: 2px solid #5dc3b1;
    border-left: 2px solid #5dc3b1;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #5dc3b1;
    border-right: 2px solid #5dc3b1;
  }

  p {
    padding: 8px 0;
  }
}

.mobile {
  .content {
    margin-bottom: 1em;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .content-block {
    font-size: 0.75em;
    float: left;
    width: 49%;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 65em) {
  .content-block {
    width: 49.5%;
  }
}
</style>
