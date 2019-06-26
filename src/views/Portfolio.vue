<template>
	<div>
		<HeaderShortBG subtitle="What we are proud of" title="Portfolio"/>
		<section id="portfolio-items">
			<div class="container-60">
				<h1>Our Portfolio</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat quae aliquam placeat inventore tempora suscipit iste similique animi iusto vero soluta reprehenderit tempore, fuga eligendi consectetur magnam! Recusandae, ab.</p>
				<a href="#">Show More</a>
			</div>
		</section>
		<section id="portfolio-client">
			<div class="container-60">
				<h1>Our Clients</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repudiandae beatae laudantium nobis ex quod doloremque harum tenetur sed, illum, labore, voluptatem vero nemo id exercitationem optio amet excepturi eligendi!</p>
			</div>
			<!-- Insert Clients' Images -->
		</section>
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
	#portfolio-items {
		div.container-60 {
			margin: 5rem auto;
			display: flex;
			flex-direction: column;
			text-align: center;
			h1,
			p,
			a {
				margin: 1rem 0;
			}
			a {
				font-weight: bolder;
			}
		}
	}
	#portfolio-client {
		background-color: white;
		padding: 5rem 0;
		div.container-60 {
			text-align: center;
			margin: auto;
		}
	}
</style>