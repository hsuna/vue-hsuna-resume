<template>
  <div id="app" @wheel.prevent="onScrollBarWheel">
    <div class="section">
      <transition :name="isMobile?'':'slide'">
        <router-view/>
      </transition>
    </div>
    <div class="section-nav">
      <ul>
        <li v-for="nav in navList" :key="nav.name" :class="curNav==nav.id?'active':''">
          <a :href="nav.url"></a>
          <div class="tooltip">{{nav.label}}</div>
        </li>
      </ul>
    </div>
    <div class="section-tips">
      <p>上下滚动鼠标翻页</p>
      <div class="arrow"><i class="hr hr-arrow"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: false,
      curNav: "index",
      navList: [
        {
          id: "index",
          label: "首页",
          url: "#/index"
        },
        {
          id: "about",
          label: "关于我",
          url: "#/about"
        },
        {
          id: "skill",
          label: "专业技能",
          url: "#/skill"
        },
        {
          id: "exp",
          label: "工作经历",
          url: "#/exp"
        },
        {
          id: "demo",
          label: "项目展示",
          url: "#/demo"
        },
        {
          id: "contact",
          label: "联系我",
          url: "#/contact"
        }
      ]
    };
  },
  created() {
    const ua = navigator.userAgent;
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    this.isMobile = isIphone || isAndroid;

    if (this.isMobile) {
      //判断是否移动端
      document.body.classList.add("mobile"); //如果是移动端，则添加样式
    }
  },
  watch: {
    $route(to, from) {
      this.curNav = to.name;
    }
  },
  methods: {
    onScrollBarWheel(evt) {
      if (evt.wheelDeltaY > 0 || evt.deltaY < 0) {
        this.onPrevPageHandler();
      } else if (evt.wheelDeltaY < 0 || evt.deltaY > 0) {
        this.onNextPageHandler();
      }
    },
    onPrevPageHandler() {
      var index = this.getCurPageIndex();
      //index = index - 1 >= 0 ? index - 1 : 0;
      if (index - 1 >= 0) {
        this.$router.replace({
          path: this.navList[index - 1].id
        });
      }
    },
    onNextPageHandler() {
      var index = this.getCurPageIndex();
      index = index + 1 < this.navList.length ? index + 1 : 0;
      this.$router.replace({
        path: this.navList[index].id
      });
    },
    getCurPageIndex() {
      let index = 0;
      this.navList.forEach((item, i) => {
        if (item.id == this.curNav) {
          return (index = i);
        }
      });
      return index;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  display: table;
  position: absolute;
  min-height: 540px;
  width: 100%;
  height: 100%;
  text-align: center;
  background: url(/static/images/bg.jpg) repeat;

  .section-cell {
    display: table-cell;
    width: 100%;
    height: 100%;
    padding-bottom: 2%;
    vertical-align: middle;

    &.slide-enter-active {
      transition: transform 0.8s;
    }

    &.slide-enter {
      transform: translateY(-100%);
    }

    &.slide-leave-active {
      display: none;
    }
  }
}

.section-nav {
  position: fixed;
  z-index: 100;
  top: 50%;
  right: 17px;
  opacity: 1;
  transform: translateY(-50%);

  li {
    display: block;
    position: relative;
    width: 14px;
    height: 13px;
    margin: 7px;

    .tooltip {
      display: none;
      position: absolute;
      max-width: 220px;
      top: -4px;
      right: 20px;
      white-space: nowrap;
      font-size: 14px;
      color: #999;
    }

    &.active,
    &:hover {
      a {
        &:before {
          background: #999;
        }
      }
    }

    &:hover {
      .tooltip {
        display: block;
      }
    }
  }

  a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    text-decoration: none;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      z-index: 1;
      width: 8px;
      height: 8px;
      border: 1px solid #000;
      background: rgba(0, 0, 0, 0);
      border-color: rgb(153, 153, 153);
      border-radius: 50%;
    }
  }
}

.section-tips {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);

  .arrow {
    font-size: 24px;
    animation: arrowMovie 1s linear infinite;

    @keyframes arrowMovie {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(4px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .section-nav {
    top: auto;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;

    li {
      display: inline-block;

      .tooltip {
        top: -20px;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
  .section-tips {
    bottom: 10px;

    .arrow {
      display: none;
    }
  }
}

@media screen and (max-height: 540px) {
  .section-nav,
  .section-tips {
    display: none;
  }
}
</style>
