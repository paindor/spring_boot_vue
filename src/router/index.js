import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from "@/components/contents/Cart.vue"
import Calculator from "@/components/contents/Calculator.vue"
import JumboTron from "@/components/cmm/JumboTron.vue"
import Footer from "@/components/cmm/Footer.vue"
import Seqsum from "@/components/contents/Seqsum.vue"
import Account from "@/components/contents/Account.vue"
import TodoOld from "@/components/TodoOld.vue"
import Parent from "@/components/slot/Parent.vue"
Vue.use(Router)
export default new Router({
	mode : 'history',
	routes: [
		{path: '/' , name : 'home' , component : Home},
		{path: '/cart' ,name :  'cart' , component: Cart},
		{path: '/calculator' ,name :  'calculator' , component: Calculator},
		{path: '/jumboTron' , name: 'jumboTron', component : JumboTron},
		{path: '/footer' , name: 'footer', component : Footer},
		{path: '/seqsum' ,name: 'seqsum', component: Seqsum},
		{path: '/account' , name : 'account' , component: Account},
		{path: '/todoOld' , name : 'todoOld' , component: TodoOld},
		{path: '/parent' , name : 'parent' , component: Parent}
		
	]
})