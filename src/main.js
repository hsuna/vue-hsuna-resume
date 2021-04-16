import "fullpage.js/dist/fullpage.css";
import "swiper/dist/css/swiper.css";

import "./assets/style/index.less";

import Fullpage from "fullpage.js";
import Swiper from "swiper";

function initFullpage(options) {
  let fullpage = new Fullpage("#fullpage", {
    menu: "#menu",
    // lockAnchors: true,
    anchors: ["home", "about", "skill", "exp", "demo", "contact"],
    licenseKey: "88888888-88888888-88888888-88888888",
    // autoScrolling: true,
    // scrollHorizontally: true,
    ...options,
  });
}

function initSwiper() {
  const labels = ["2013/4", "2014/8", "2016/9"];
  let swiper = new Swiper("#swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className}"><span>${labels[index]}</span></div>`;
      },
    },
  });
}

(function () {
  var isInit = false;
  initFullpage({
    afterLoad: function (lastSection, curSection) {
      if (!isInit) {
        initSwiper();
        isInit = true;
      }
      document
        .getElementById("tips")
        .setAttribute("data-anchor", curSection.anchor);
    },
  });
  document.getElementById("app").style.display = "block";
})();
