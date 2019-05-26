import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyCLDkEtZBAgB8gPsopTvTiO6AMX65Vc8QE",
  authDomain: "dashboard-24b85.firebaseapp.com",
  projectId: "dashboard-24b85",
  messagingSenderId: "307821962394"
};
firebase.initializeApp(config);
let app = "";
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
