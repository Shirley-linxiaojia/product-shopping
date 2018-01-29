// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/details/analysis.vue'
import DetailCouPage from './pages/details/count.vue'
import DetailForPage from './pages/details/forecast.vue'
import DetailPubPage from './pages/details/publish.vue'
import axios from 'axios'
import './api/axios.js'

Vue.use(VueRouter);
let router=new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:DetailPage,
			redirect:'/detail/analysis',  
			children:[
				{
					path:'analysis',
					component:DetailAnaPage
				},
				{
					path:'count',
					component:DetailCouPage
				},
				{
					path:'forecast',
					component:DetailForPage
				},
				{
					path:'publish',
					component:DetailPubPage
				},
			]
		}		
	]
});

new Vue({
  el: '#app',
  router,
  template:'<Layout/>',
  components:{ Layout }
})
