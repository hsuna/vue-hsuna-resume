<template>
  <div id="app">
    <div class="section">
      <router-view/>
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
  watch: {
    $route(to, from) {
      this.curNav = to.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  display: table;
  position: absolute;
  min-width: 40em;
  width: 100%;
  height: 100%;
  text-align: center;
  background: url(/static/images/bg.jpg) repeat;

  .section-cell {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  h1 {
    margin-top: -0.2em;
    margin-bottom: 0.1em;
    color: #5dc3b1;
    text-shadow: 1px 2px #071822, 3px 4px #345c74;
  }
}

.section-nav {
  position: fixed;
  z-index: 100;
  top: 50%;
  right: 17px;
  margin-top: -63.5px;
  opacity: 1;

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
