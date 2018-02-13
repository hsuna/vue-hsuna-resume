<template>
  <div class="section-cell">
    <h1 class="title">工作经历</h1>
    <div class="info">
      <p>一步一个脚印，即使时间再短，也会有所收获，生活总是充满故事</p>
    </div>
    <div class="content">
      <transition-group name="fade">
        <div v-for="(part, index) in partList" class="part" v-bind:key="part.axis" v-show="curPart==index">
          <p class="title clr-primary">{{part.title}}</p>
          <p class="time">{{part.time}}</p>
          <p v-for="(text, index) in part.contents" v-bind:key="index">{{text}}</p>
        </div>
      </transition-group>
    </div>
    <div class="axis clearfix" @mouseout="axisMouseOutHandler">
      <a v-for="(part, index) in partList" class="part" v-bind:key="part.axis" @mouseover="axisMouseOverHandler(index)" :class="curPart==index?'active':''">
        {{part.axis}}
      </a>
      <span class="line" :style="'left:'+(curPart*100/partList.length)+'%'"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      timeId: -1,
      curPart: 0,
      partList: [
        {
          axis: "2013/4",
          title: "广州菲音信息科技有限公司",
          time: "2013年4月~2014年4月",
          contents: [
            "开发部  游戏前端开发工程师",
            "负责游戏客户端开发",
            "负责游戏开发设计，保证模块的可行性、游戏性和稳定性"
          ]
        },
        {
          axis: "2015/4",
          title: "广州创思信息技术有限公司",
          time: "2015年4月~2016年7月",
          contents: [
            "开发部  web前端开发工程师",
            "负责前端功能开发，优化和维护产品页面，缩减页面体积、加快加载速度及优化用户体验",
            "使用Javascript熟练、准确地进行代码构建，实现所需的动画效果以及交互效果",
            "配合后台开发人员实现界面和功能"
          ]
        },
        {
          axis: "2016/9",
          title: "广州市昊链信息科技股份有限公司",
          time: "2016年9月~至今",
          contents: [
            "开发部  web前端开发工程师",
            "根据产品设计需求，配合后台开发人员实现产品界面和功能，维护及优化前端页面性能",
            "制作或协助制作各种页面组件或页面模版",
            "参与制定JS、CSS、Html开发规范并推进执行",
            "参与设计并编写WEB前端架构及应用"
          ]
        }
      ]
    };
  },
  created() {
    this.curPart = this.partList.length - 1;
    this.axisMouseOutHandler();
  },
  methods: {
    axisMouseOverHandler(pIndex) {
      clearInterval(this.timeId);
      this.timeId = -1;
      this.curPart = pIndex;
    },
    axisMouseOutHandler() {
      if (-1 == this.timeId) {
        this.timeId = setInterval(() => {
          if (this.curPart + 1 < this.partList.length) {
            this.curPart++;
          } else {
            this.curPart = 0;
          }
        }, 5000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  font-size: 18px;
}
.content {
  position: relative;
  margin: 20px auto 0;
  min-height: 220px;

  .part {
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
    line-height: 1.5;
    font-size: 18px;

    .title {
      font-size: 26px;
      font-weight: bold;
    }

    .time {
      font-weight: bold;
    }
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
.axis {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  color: #999;
  border-bottom: 2px solid #999;
  font-size: 12px;

  a,
  .line {
    width: 33.3%;
  }

  a {
    float: left;
    position: relative;
    z-index: 1;
    padding-bottom: 16px;

    &:after {
      background-color: #071822;
      position: absolute;
      display: block;
      margin: 0 auto;
      width: 10px;
      height: 10px;
      bottom: -8px;
      left: 0;
      right: 0;
      border: 2px solid #999;
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
