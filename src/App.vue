<template>
  <div id="app">
    <div class="section-nav" style="color: rgb(153, 153, 153); margin-top: -63.5px;">
      <ul v-for="nav in navList">
        <li data-tooltip="{nav.label}">
          <a href="{nav.id}" class=""></a>
        </li>
      </ul>
    </div>
    <div class="section">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navList: [
          {
            id: '#home',
            label: '首页',
          },
          {
            id: '#about',
            label: '关于我',
          },
          {
            id: '#skill',
            label: '专业技能',
          },
          {
            id: '#exp',
            label: '工作经历',
          },
          {
            id: '#demo',
            label: '项目展示',
          },
          {
            id: '#contact',
            label: '联系我',
          },
        ]
      }
    }
  }
</script>
