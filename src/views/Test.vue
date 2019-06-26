<template>
	<div>
		<HeaderShortBG subtitle="Subtitle Here" title="Title Here"/>
		<FooterContact/>
		<FooterMain/>
	</div>
</template>

<script>
	import HeaderShortBG from "@/components/HeaderShortBG";
	import FooterMain from "@/components/FooterMain";
	import FooterContact from "@/components/FooterContact";

	export default {
		name: "test",
		components: {
			HeaderShortBG,
			FooterMain,
			FooterContact
		}
	};
</script>

<style lang="scss" scoped>
</style>