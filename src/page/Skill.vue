<template>
  <div class="section-cell">
    <h1 class="title">专业技能</h1>
    <div class="content">
      <p>{{content}}</p>
    </div>
    <div v-for="(skills, index) in skillList" class="tag-panel" v-bind:key="index">
      <div v-for="skill in skills" v-bind:key="skill.text" class="tag" :class="skill.degree" :title="skill.degree">
        {{skill.text}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      content: "框架的意义是什么？倘若有一天所有框架都没了，你还会写代码吗？",
      skillList: [
        [
          { degree: "expert", text: "html/html5" },
          { degree: "expert", text: "javascript" },
          { degree: "expert", text: "es6" }
        ],
        [
          { degree: "expert", text: "css/css3" },
          { degree: "expert", text: "sass" },
          { degree: "familiar", text: "less" }
        ],
        [
          { degree: "expert", text: "angular" },
          { degree: "expert", text: "vue/vue-cli" },
          { degree: "familiar", text: "react" }
        ],
        [
          { degree: "expert", text: "git" },
          { degree: "expert", text: "webpack" },
          { degree: "familiar", text: "gulp" }
        ],
        [
          { degree: "familiar", text: "node.js" },
          { degree: "familiar", text: "koa2" },
          { degree: "common", text: "python" }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding-bottom: 10px;
  font-size: 18px;
}
.tag-panel {
  margin: 16px auto;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  margin-right: 8px;
  border: 1px solid #5dc3b1;
  border-radius: 3px;
  font-size: 16px;
  background-color: transparent;
  color: #5dc3b1;
  opacity: 0;

  &.expert {
    opacity: 1;
  }

  &.familiar {
    opacity: 0.5;
  }

  &.common {
    opacity: 0.2;
  }
}
</style>
