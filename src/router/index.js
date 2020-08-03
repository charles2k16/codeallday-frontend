import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Posts from "../components/Posts";
import Post from "../components/SinglePost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/posts",
    name: "home",
    component: Home,
    children: [
      {
        path: "/posts",
        name: "posts",
        component: Posts
      },
      {
        path: "/post",
        name: "post",
        component: Post
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
