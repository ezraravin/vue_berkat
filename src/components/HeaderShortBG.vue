<template>
	<div>
		<h1>{{ title }}</h1>
		<h2>{{ subtitle }}</h2>
	</div>
</template>

<script>
	export default {
		name: "HeaderShortBg",
		props: {
			title: String,
			subtitle: String
		}
	};
</script>

<style lang="scss" scoped>
	div {
		padding: 5rem 0;
		background-image: url("../assets/bg-short.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 3rem;
		}
	}
</style>