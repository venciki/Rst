import Vue from 'vue'
import Router from 'vue-router'
import Maintabbar from '@/components/Main-tabbar'
import axios from 'axios'


const shebei = () => import('../pages/shebei/shebei')
const hetong = () => import('../pages/hetong/hetong')
const shiyan = () => import('../pages/shiyan/shiyan')
const xitong = () => import('../pages/xitong/xitong')
const anliku = () => import('../pages/anliku/anliku')
const dianchang =() => import('../pages/shebei/dianchang.vue')
const shebeiguanli =() => import('../pages/shebei/shebeiguanli.vue')
const shebeilibie =() => import('../pages/shebei/shebeilibie.vue')
const guanli = () => import ('../pages/shebei/dianchang02.vue')
const Addfile = () => import ('../pages/hetong/Addfile.vue')
const Filelist = () => import ('../pages/hetong/Filelist.vue')
const Lookfile = () => import ('../pages/hetong/Lookfile.vue')
const Afteradd = () => import ('../pages/anliku/Afteradd.vue')
const Addanli = () => import('../pages/anliku/Addanli.vue')
const Xinzeng = () => import('../pages/xitong/xinzeng.vue')
const Afterxinzeng = () => import('../pages/xitong/Afterxinzeng.vue')
const Afteruser = () => import('../pages/xitong/Afteruser.vue')
const user = () => import('../pages/xitong/user.vue')
const zuoye =() => import ('../pages/shiyan/zuoye.vue')
const Afterzuoye =() => import ('../pages/shiyan/Afterzuoye.vue')
const baojia =() => import ('../pages/shiyan/baojia.vue')
const Afterbaojia =() => import ('../pages/shiyan/Afterbaojia.vue')
const shiyanren =() => import ('../pages/shiyan/shiyanren.vue')
const Aftershiyanren =() => import ('../pages/shiyan/Aftershiyanren.vue')
const moban =() => import ('../pages/shiyan/moban.vue')
const canshuKong =() => import('../pages/shiyan/canshuKong.vue')
const canshuAfteradd =() => import('../pages/shiyan/canshuAfteradd.vue')
const Aftermoban =() => import('../pages/shiyan/Aftermoban.vue')
const login =() => import('../pages/login/login.vue')
const reportGuanli =() => import('../pages/shiyan/reportGuanli.vue')
const reportAfteradd =() => import('../pages/shiyan/reportAfteradd.vue')
const reportTestKong =() => import('../pages/shiyan/reportTestKong.vue')
const testMessageList =() => import('../pages/shiyan/testMessageList.vue')


Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Maintabbar',
      redirect:'/login'
    },
    {
      path:'/login',
      component:login
    },
    {
        path:'/shebei',
        component:shebei,
        redirect:'/shebei/dianchang',
        children:[
            {
                path:'dianchang',
                component:dianchang
            },
            {
                path:'dianchangguanli',
                component:guanli
            },
            {
                path:'shebeilibie',
                component:shebeilibie
            },
            {
                path:'shebeiguanli',
                component:shebeiguanli
            }
        ]
    },
    {
        path:'/hetong',
        component:hetong,
        redirect:'/hetong/Addfile',
        children:[
            {
                path:'Addfile',
                component:Addfile
            },
            {
                path:'Filelist',
                component:Filelist
            },
            {
                path:'Lookfile',
                component:Lookfile
            },
        ]
    },
    {
        path:'/shiyan',
        component:shiyan,
        redirect:'/shiyan/zuoye',
        children:[
            {
              path:'zuoye',
              component:zuoye
            },
            {
                path:'Afterzuoye',
                component:Afterzuoye
              },
              {
                path:'baojia',
                component:baojia
              },
              {
                path:'Afterbaojia',
                component:Afterbaojia
              },
              {
                path:'shiyanren',
                component:shiyanren
              },
              {
                path:'Aftershiyanren',
                component:Aftershiyanren
              },
              {
                path:'moban',
                component:moban
              },
              {
                path:'Aftermoban',
                component:Aftermoban
              },
              {
                path:'canshuKong',
                component:canshuKong
              },
              {
                path:'canshuAfteradd',
                component:canshuAfteradd
              },
              {
                path:'reportGuanli',
                component:reportGuanli
              },
              {
                path:'reportAfteradd',
                component:reportAfteradd 
              },
              {
                path:'reportTestKong',
                component:reportTestKong 
              },
              {
                path:'testMessageList',
                component:testMessageList 
              },
            // {
            //   path:'Afteradd',
            //   component:Afterxinzeng    reportTestKong
            // },
            // {
            //     path:'user',
            //     component:user
            //   },
            //   {
            //     path:'Afteruser',
            //     component:Afteruser
            //   },
           
        ]
    },
    {
        path:'/xitong',
        component:xitong,
        redirect:'/xitong/xinzeng',
        children:[
            {
              path:'xinzeng',
              component:Xinzeng
            },
            {
              path:'Afteradd',
              component:Afterxinzeng
            },
            {
                path:'user',
                component:user
              },
              {
                path:'Afteruser',
                component:Afteruser
              },
           
        ]
    },
    {
      path:'/anliku',
      component:anliku,
      redirect:'/anliku/anliku',
      children:[
          {
            path:'Afteradd',
            component:Afteradd
          },
          {
            path:'anliku',
            component:Addanli
          },
         
      ]
  }
]
const router =  new Router({
    routes,
    data(){
        return
    },
})

export default router

// router.beforeEach((to, from, next)=>{
//     document.title = to.matched[0].meta.title;
//     // console.log('+++')
//     next();
//   })
  
//   router.afterEach((to, from)=>{
//     // console.log('---')
//   })

