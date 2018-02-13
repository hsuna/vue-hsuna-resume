<template>
  <div class="section-cell">
    <h1 class="title">关于我</h1>
    <div class="content">
      <div class="content-block"><i class="hr hr-medal"></i>学历 / 大专</div>
      <div class="content-block"><i class="hr hr-time"></i>年龄 / 26岁</div>
      <div class="content-block"><i class="hr hr-location"></i>坐标 / 广州</div>
      <div class="content-block"><i class="hr hr-my"></i>状态 / 在职</div>
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
  margin: 50px 0 40px;
  font-size: 24px;

  &::after{
    content: '';
    display: table;
    clear: both;
  }
}
.content-block {
  float: left;
  width: 24.9%;
  margin-bottom: 10px;

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
  margin: 10px;
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


@media screen and (max-width: 840px) {
  .content-block {
    width: 49.5%;
  }
}
</style>
