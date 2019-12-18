<template>
<div>
	<h1>seqsum 페이지</h1>
	<Nav></Nav>
	<ul>
		<input v-model ="first" type="text" />첫번째수
		<input v-model="second" type="text" />두번째수
	</ul>
	<button @click="sum">+</button>
	<p>합계:{{totalNum}}</p>
</div>
</template>

<script>
import Nav from '@/components/cmm/Nav.vue'
//import Footer from '@/components/Footer.vue'
export default{
	name: 'seqsum',
	components:{
		Nav
		//Footer

	},
	data(){
		return {
			totalNum : 0,
			first:0,
			second : 0


		

		}

	},
	methods:{
		calc(){
			let arr = []
			let st = parseInt(this.startN)
			let ed = parseInt(this.endN)

		
			this.result = 0
			for(let i = st ; i <= ed ;i++){
				//alert(this.startN)
				//alert(this.endN)
				this.result += parseInt(i)
				arr.push(i)
			}
			arr.sort()


			alert(this.result)
			this.seen = true
		},
		sum(){
			let s = parseInt(this.first)
			let e = parseInt(this.second)
			let arr = [s,e]
			arr.sort(function(s,e) {
				return s-e
				
			})
			
			let sum = 0
			let st = arr[0]
			let ed = arr[1]
			for(let i = st ; i <= ed ; i++){

				sum += i

			}
			this.totalNum = sum


		}


	}
}
</script>


<style scoped>

</style>