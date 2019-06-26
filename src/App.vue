<template>
	<div id="app">
		<div class="container-80" id="nav-bar">
			<router-link class="link-text" to="/">
				<img alt src="./assets/Berkatsoft (dark font).png">
			</router-link>
			<nav>
				<router-link class="link-text" to="/">Home</router-link>
				<router-link class="link-text" to="/product">Product</router-link>
				<router-link class="link-text" to="/portfolio">Portfolio</router-link>
				<router-link class="link-text" to="/about">About Us</router-link>
				<router-link class="link-text" to="/article">Article</router-link>
				<router-link class="link-text" to="/contact">Contact Us</router-link>
				<router-link class="link-text" to="/hometest">Home Test</router-link>
			</nav>
		</div>

		<router-view/>
	</div>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		#nav-bar {
			padding: 1rem 3rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 0.5rem auto;
			nav {
				padding: 1rem 0;
				.link-text {
					padding: 1rem;
					text-decoration: none;
					color: black;
					&:hover {
						border: 1px solid black;
					}
				}
			}
		}
	}

	.bg-dark-secondary {
		background-color: black;
		color: white;
	}

	.py-3 {
		padding: 3rem 0;
	}

	.mx-3 {
		margin: 0 3rem;
	}

	.container-80 {
		width: 80vw;
	}
	.container-60 {
		width: 60%;
	}

	.link {
		text-decoration: none;
		&:hover {
			opacity: 0.8;
		}
	}

	.light-text {
		color: white;
	}
	.py-7 {
		padding: 7rem 0;
	}
</style>


	
