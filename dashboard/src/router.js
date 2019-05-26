import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "login"
    },
    {
      path: "/",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/index.html",
      name: "index",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("./views/User.vue"),
      beforeEnter: (to, from, next) => {
        // Validations
        console.log(to);
        console.log(from);
        next();
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  console.log(currentUser);
  if (requiresAuth && !currentUser && to.path !== "/") {
    next("/");
    console.log("login before every route change");
  } else if (!requiresAuth && currentUser) {
    next("home");
    console.log("home before every route change");
  } else next();

  console.log("Executing before every route change");
});

router.afterEach((to, from) => {
  console.log("Executing after every route change");
});

export default router;
