<template>
	<div class="home">
	<!--	<img alt="Vue logo" src="../assets/logo.png">-->
		<MenuSuperior msg="Welcome to Your Vue.js App"/> 
	 

		<router-view/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MenuSuperior from '@/components/MenuSuperior.vue'


export default {
	name: 'home',
	components: {
		HelloWorld,
		MenuSuperior
	}
}
</script>
