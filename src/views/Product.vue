<template>
	<div>
		<HeaderShortBG subtitle="Your business - our solutions" title="Product"/>

		<section class="container-60 py-3" id="product">
			<img alt="Product Image" id="product-img" src="../assets/product-img.png" width="500">
			<div>
				<h1>Our Product</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam aperiam, beatae explicabo nostrum eligendi quia neque quisquam nulla dignissimos! Ut, obcaecati ducimus doloribus neque dolorum expedita eum voluptas blanditiis?</p>
			</div>
			<div class="product-box">
				<img alt="Cloud Icon" src="../assets/icon-cloud.png">
				<h1>Cloud Development</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam aperiam, beatae explicabo nostrum eligendi quia neque quisquam nulla dignissimos! Ut, obcaecati ducimus doloribus neque dolorum expedita eum voluptas blanditiis?</p>
			</div>
			<div class="product-box">
				<img alt="Cloud Icon" src="../assets/icon-web.png">
				<h1>Web Development</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam aperiam, beatae explicabo nostrum eligendi quia neque quisquam nulla dignissimos! Ut, obcaecati ducimus doloribus neque dolorum expedita eum voluptas blanditiis?</p>
			</div>
			<div class="product-box">
				<img alt="Cloud Icon" src="../assets/icon-cloud.png">
				<h1>Cloud Development</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam aperiam, beatae explicabo nostrum eligendi quia neque quisquam nulla dignissimos! Ut, obcaecati ducimus doloribus neque dolorum expedita eum voluptas blanditiis?</p>
			</div>
			<div class="product-box">
				<img alt="Cloud Icon" src="../assets/icon-web.png">
				<h1>Web Development</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam aperiam, beatae explicabo nostrum eligendi quia neque quisquam nulla dignissimos! Ut, obcaecati ducimus doloribus neque dolorum expedita eum voluptas blanditiis?</p>
			</div>
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
	#product {
		display: grid;
		grid-template-columns: 500px 500px;
		grid-gap: 2rem;
		justify-content: space-evenly;
		margin: auto;

		div {
			p {
				margin-top: 2rem;
				padding-right: 2rem;
			}
			&.product-box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 3rem;
				box-shadow: 0px 18px 48px -12px rgba(100, 100, 100, 0.35);
			}
		}
	}
</style>