import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import put from "../views/components/put.vue";
import del from "../views/components/delete.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/tables",
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/post",
    name: "Post",
    component: () => import('../views/components/post.vue') ,
  },
  {
    path: "/put",
    name: "Put",
    component: put ,
  },
  {
    path: "/del",
    name: "Delete",
    component: del ,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
