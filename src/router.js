import Vue from "vue";
import Router from "vue-router";

import Test from "./views/Test.vue";

import Home from "./views/Home.vue";
import Article from "./views/Article.vue";
import Contact from "./views/Contact.vue";
import Portfolio from "./views/Portfolio.vue";
import Product from "./views/Product.vue";
import HomeTest from "./views/HomeTest.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},

		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/article",
			name: "article",
			component: Article
		},
		{
			path: "/contact",
			name: "contact",
			component: Contact
		},
		{
			path: "/portfolio",
			name: "portfolio",
			component: Portfolio
		},
		{
			path: "/product",
			name: "product",
			component: Product
		},
		{
			path: "/hometest",
			name: "hometest",
			component: HomeTest
		},
		{
			path: "/test",
			name: "Test",
			component: Test
		}
	]
});
