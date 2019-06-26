<template>
	<div>
		<header class="link-light" id="home-landing-page">
			<div class="py-7">
				<div class="text">
					<h1>
						Providing Reliable
						<br>Software
					</h1>
					<a class="my-2 btn-light" href="#">Learn More</a>
				</div>
				<img alt="Laptop" src="../assets/laptop.png">
			</div>
		</header>

		<section class="container-60" id="home-about">
			<h1>BerkatSoft</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, temporibus? Repudiandae iusto quo reprehenderit quibusdam facere itaque nostrum impedit explicabo? Animi deleniti suscipit dolores error nihil perferendis reprehenderit assumenda incidunt.</p>
			<a href="#">More About Us</a>
		</section>

		<section id="home-product">
			<div class="text">
				<h1>Our Product</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt dolore dignissimos alias distinctio! Explicabo repellat similique optio nesciunt nam cum, earum rerum quia corporis ea, molestiae eos, facilis doloribus!</p>
				<a class="btn-light" href="#">Our Product</a>
			</div>
			<img alt="Product" src="../assets/product-img.png">
		</section>
		<FooterContact/>
		<FooterMain/>
	</div>
</template>


<script>
	// @ is an alias to /src
	import FooterMain from "@/components/FooterMain";
	import FooterContact from "@/components/FooterContact";

	export default {
		name: "test",
		components: {
			FooterMain,
			FooterContact
		}
	};
</script>

<style lang="scss" scoped>
	#home-landing-page {
		background-image: url("../assets/bg-long.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		nav {
			margin-top: 0;
			padding-top: 1rem;
			ul {
				li {
					a {
						&.current {
							border: 1px solid white;
						}
						&:hover {
							@extend a.current;
						}
					}
				}
			}
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			&.text {
				flex-direction: column;
				justify-content: center;
			}
		}
	}
	#home-about {
		text-align: center;
		margin: 5rem auto;
		h1,
		p,
		a {
			margin: 1rem 0;
		}
		a {
			text-decoration: underline;
			font-weight: bolder;
		}
	}
	#home-product {
		background-color: white;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		div.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: auto 2rem auto 20rem;
			h1,
			p,
			a {
				margin-top: 2rem;
			}
		}
	}
</style>

