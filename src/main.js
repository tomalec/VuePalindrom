import Vue from 'vue'
import App from './App.vue'
import {Palindrom, PalindromDOM} from 'palindrom'


Vue.config.productionTip = false

new PalindromDOM({
  remoteUrl: window.location.href,
  onStateReset: function (obj) {
      new Vue({
        render: h => h(App),
        data: function () {
          return obj;
        }
      }).$mount('#app')
  },
  listenTo: document.getElementById('app'),
  useWebSocket: true,
  debug: false,
  localVersionPath: '/_ver#c$',
  remoteVersionPath: '/_ver#s',
  ot: true,
  purity: false,
  pingIntervalS: 60,
  path: '/',
  devToolsOpen: false,
  fatalErrorReloadAfterS: 5
});
