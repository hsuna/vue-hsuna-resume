<template>
  <div id="app" @wheel.prevent="onScrollBarWheel">
    <div class="section" @click="onNextPageHandler">
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
  min-width: 800px;
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
      -webkit-transition: -webkit-transform 0.8s;
      transition: transform 0.8s;
    }

    &.slide-enter {
      -webkit-transform: translateY(-100%);
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
  -webkit-transform: translateY(-50%);
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
</style>
