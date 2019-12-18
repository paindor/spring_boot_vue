<template>
	<div>
		<Nav></Nav>
		<JumboTron></JumboTron>
		<Footer></Footer>
	</div>
</template>

<script>
import Nav from '@/components/cmm/Nav.vue'
import JumboTron from '@/components/cmm/JumboTron.vue'
import Footer from '@/components/cmm/Footer.vue'
export default{
	name : 'home',
	components : {
		Nav,
		JumboTron,
		Footer
		
	},
	data(){
		return{
			msg : '홈화면 진입'
		}
	}
}
</script>

<style scoped>

</style>