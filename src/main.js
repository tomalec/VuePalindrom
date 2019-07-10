import Vue from 'vue'
import App from './App.vue'
//import PalindromDOM from '../palindrom/dist/palindrom-dom'
import { PalindromDOM } from 'palindrom'

Vue.config.productionTip = false

var palindrom = new PalindromDOM({
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
  remoteUrl: window.location.href,
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
