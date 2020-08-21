import Vue from "vue"
import VueRouter from "vue-router";

const Home = ()=>import("views/home/Home.vue")
const Category = ()=>import('views/category/Category.vue')
const Cart = ()=>import('views/cart/Cart.vue')
const Profile = ()=>import('views/profile/Profile.vue')
const Detail = ()=>import('views/detail/Detail.vue')
//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      index:0,
      showFooter: true
    }
  }
  ,
  {
    path: '/category',
    component: Category,
    meta: {
      index:0,
      showFooter: true
    }
  }
  ,
  {
    path: '/cart',
    component: Cart,
    meta: {
      index:0,
      showFooter: true
    }
  }
  ,
  {
    path: '/profile',
    component: Profile,
    meta: {
      index:0,
      showFooter: true
    }
  }
  ,
  {
    path: '/detail',
    component: Detail,
    meta: {
      index:0,
      showFooter: true
    }
  }
]
const route = new VueRouter({
  routes,
  mode: 'history'
})
export default route
