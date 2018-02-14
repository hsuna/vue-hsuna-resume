<template>
  <div class="section-cell">
    <h1 class="title">关于我</h1>
    <div class="content">
      <div class="content-block"><i class="hr hr-medal"></i>学历 / 大专</div>
      <div class="content-block"><i class="hr hr-time"></i>年龄 / {{2018-1991}}岁</div>
      <div class="content-block"><i class="hr hr-location"></i>坐标 / 广州</div>
      <div class="content-block"><i class="hr hr-my"></i>状态 / 在职</div>
    </div>
    <div class="info">
      <p>2013年毕业于广东交通职业技术学院</p>
      <p>4年互联网经验，3年web前端开发经验</p>
      <p>强烈的自我驱动力，代码强迫症患者</p>
      <p>一个先学es，后学css的F2E  →_→</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="scss" scoped>
.content {
  max-width: 960px;
  margin: 50px auto 40px;
  font-size: 24px;

  &::after {
    content: "";
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
  display: inline-block;
  max-width: 640px;
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

/*========= 响应式布局 =========*/
@media screen and (max-width: 840px) {
  .content-block {
    width: 49.5%;
  }
}

/*========= 移动端布局 =========*/
.mobile {
  .content {
    margin: 4rem auto 2rem;
    font-size: 2.0rem;
  }

  .content-block {
    margin-bottom: 1rem;
    i {
      padding-right: 0.6rem;
      font-size: 2.2rem;
    }
  }

  .info {
    margin: 0;
    padding: 2rem 1rem;
    font-size: 1.8rem;
  }
}
</style>
