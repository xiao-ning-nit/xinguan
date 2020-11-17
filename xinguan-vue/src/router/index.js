import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import Users from '../views/user/Users'
import Welcome from '../views/welcome/Welcome'
import Products from '../views/product/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
        path: '/welcome',
        name:'Welcome',
        component:Welcome,
      },
        {
          path: '/users',
          name: 'Users',
          component: Users,
      },
      {
        path: '/products',
        name: 'Products',
        component: Products,
    },
      ]
    },
  ]
})
