<template>
	<div id="app">
		<app-navbar sticky />

		<b-container fluid>
			<router-view />
		</b-container>
	</div>
</template>

<script>
import AppNavbar from '@/components/Navbar';

export default {
	name: 'App',
	components: {
		AppNavbar
	}
}
</script>

<style>

</style>
