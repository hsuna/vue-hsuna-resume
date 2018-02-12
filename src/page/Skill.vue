<template>
  <div class="section-cell">
    <h1 class="title">专业技能</h1>
    <div class="content">
      <p>{{content}}</p>
    </div>
    <div v-for="(skills, index) in skillList" class="tag-panel" v-bind:key="index">
      <div v-for="skill in skills" v-bind:key="skill.text" class="tag" :class="skill.degree">
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
          { degree: "expert", text: "HTML/HTML5" },
          { degree: "expert", text: "CSS" },
          { degree: "expert", text: "Javascript" }
        ],
        [
          { degree: "expert", text: "jQuery" },
          { degree: "familiar", text: "Bootstrap" },
          { degree: "familiar", text: "Angularjs" },
          { degree: "expert", text: "Requirejs" }
        ],
        [
          { degree: "expert", text: "HTML5+" },
          { degree: "expert", text: "jQueryMobile" },
          { degree: "familiar", text: "Mui" }
        ],
        [
          { degree: "expert", text: "Canvas" },
          { degree: "expert", text: "CreateJs" },
          { degree: "familiar", text: "Egret" }
        ],
        [
          { degree: "familiar", text: "Node.js" },
          { degree: "familiar", text: "Koa2" },
          { degree: "common", text: "PHP" }
        ],
        [
          { degree: "expert", text: "PhotoShop" },
          { degree: "expert", text: "Flash" }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.content{
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
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  font-size: 16px;
  background-color: transparent;
  color: #5dc3b1;
  opacity: 0;
  filter: Alpha(opacity=0);

  &.expert {
    opacity: 1;
    filter: Alpha(opacity=100);
  }

  &.familiar {
    opacity: 0.8;
    filter: Alpha(opacity=80);
  }

  &.common {
    opacity: 0.4;
    filter: Alpha(opacity=40);
  }
}
</style>
