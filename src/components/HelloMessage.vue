<template>
	<span class="example">{{ msg }}</span>
</template>
<script>
	export default {
		props: ['msg'],

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
