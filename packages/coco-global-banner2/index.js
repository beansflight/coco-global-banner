import Component from "./index.vue";
import config from "./package.json";

// 为组件提供 install 安装方法，供按需引入
Component.install = function (Vue) {
  console.log("注册全局组件：coco-global-banner2");
  // eslint-disable-next-line no-debugger
  debugger;
  Vue.component(`${config.name}.${config.version}`, Component);
};

// 默认导出组件
export { Component, config };
