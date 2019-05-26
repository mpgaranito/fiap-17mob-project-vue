import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
 

Vue.use(Router)

let router =  new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'login',
			component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}, 
		{
			path: '/user/:id',
			name: 'user',
			component: () => import('./views/User.vue'),
			beforeEnter: (to, from, next) => {
				// Validations
				console.log(to)
				console.log(from)
				next()
			}
		}
	],
	
})

router.beforeEach((to, from, next) => {
	console.log('Executing before every route change')
	next()
})

router.afterEach((to, from) => {
	console.log('Executing after every route change')
})

export default router
