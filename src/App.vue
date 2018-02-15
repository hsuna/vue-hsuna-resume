<template>
  <div id="app" @touchstart="onTouchStartHandler" @touchend="onTouchEndHandler" @wheel.prevent="onScrollBarWheel">
    <div class="section">
      <transition name="slide">
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
    <div class="section-tips" v-show="curNav != 'contact'">
      <p class="text">上下滚动鼠标翻页</p>
      <div class="arrow"><i class="hr hr-arrow"></i></div>
    </div>
    <div class="section-mobile">
      <div class="top-arrow" v-show="curNav != 'index'"><i class="hr hr-arrow"></i></div>
      <div class="bottom-arrow" v-show="curNav != 'contact'"><i class="hr hr-arrow"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      touchesCache: null,
      isMobile: false,
      isPageLock: -1,
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
    this.isMobile = this.navigator().mobile;
  },
  watch: {
    $route(to, from) {
      this.curNav = to.name;
    }
  },
  methods: {
    //如果是移动端，则使用Touch模式
    onTouchStartHandler(evt) {
      if (!this.isMobile) return;
      this.touchesCache = evt.touches[0];
    },
    onTouchEndHandler(evt) {
      if (!this.isMobile || !this.touchesCache) return;

      if (-1 == this.isPageLock && evt.changedTouches[0]) {
        let offsetY = evt.changedTouches[0].clientY - this.touchesCache.clientY;
        if (offsetY < -100) {
          this.onPrevPageHandler();
          this.disablePageChange();
        } else if (offsetY > 100) {
          this.onNextPageHandler();
          this.disablePageChange();
        }
      }
      this.touchesCache = null;
    },
    //如果是PC端，则使用mousewheel模式
    onScrollBarWheel(evt) {
      if (this.isMobile) return;
      if (-1 == this.isPageLock) {
        if (evt.wheelDeltaY > 0 || evt.deltaY < 0) {
          this.onPrevPageHandler();
          this.disablePageChange();
        } else if (evt.wheelDeltaY < 0 || evt.deltaY > 0) {
          this.onNextPageHandler();
          this.disablePageChange();
        }
      }
    },
    disablePageChange() {
      this.isPageLock = setTimeout(() => {
        clearTimeout(this.isPageLock);
        this.isPageLock = -1;
      }, 1000);
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
      //index = index + 1 < this.navList.length ? index + 1 : 0;
      if (index + 1 < this.navList.length) {
        this.$router.replace({
          path: this.navList[index + 1].id
        });
      }
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

<style lang="scss">
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

    > h1 {
      margin-top: 2px;
      margin-bottom: 30px;
      font-size: 64px;
      color: #5dc3b1;
      text-shadow: 1px 2px #071822, 3px 4px #345c74;
    }

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

  .section-mobile {
    display: none;

    .top-arrow,
    .bottom-arrow {
      position: fixed;
      left: 0;
      right: 0;
      font-size: 1.6rem;
      text-align: center;
    }

    .top-arrow {
      top: 1rem;
      animation: arrowUpMovie 1s linear infinite;
    }

    .bottom-arrow {
      bottom: 1rem;
      animation: arrowDownMovie 1s linear infinite;
    }

    @keyframes arrowUpMovie {
      0% {
        transform: translateY(0) rotate(180deg);
      }
      50% {
        transform: translateY(-0.4rem) rotate(180deg);
      }
      100% {
        transform: translateY(0) rotate(180deg);
      }
    }

    @keyframes arrowDownMovie {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.4rem);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}

@media screen and (max-width: 960px) and (max-height: 540px) {
  .section-nav{
    display: none;
  }
}

@media screen and (max-height: 540px) {
    .section-tips {
    display: none;
  }
}

.mobile {
  .section-cell {
    padding: 2rem;

    > h1 {
      font-size: 5rem;
    }
  }

  .section-nav,
  .section-tips {
    display: none;
  }
  .section-mobile {
    display: block;
  }
}
</style>
