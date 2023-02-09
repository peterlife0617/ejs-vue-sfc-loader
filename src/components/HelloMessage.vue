<template>
	<span class="example">{{ name + msg }}</span>
</template>
<script>
	export default {
		props: ['name'],
		data() {
			return {
				msg: 'hello!',
			};
		},
		mounted() {
			alert('child mounted!!!');
		},
	};
</script>

<style scoped>
	.example {
		color: red;
	}
</style>
