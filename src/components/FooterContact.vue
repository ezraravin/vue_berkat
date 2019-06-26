<template>
	<footer class="py-3 bg-dark-secondary" id="footer-contact">
		<div class="container-80">
			<div id="social">
				<img alt="Logo" src="../assets/Berkatsoft (light font).png">
				<p class="my-3">Our company has been developing high quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.</p>

				<div id="social-icon">
					<a href="#">
						<img alt="Facebook" src="../assets/logo-fb.png">
					</a>
					<a href="#">
						<img alt="Twitter" src="../assets/logo-twitter.png">
					</a>
					<a href="#">
						<img alt="Google Plus" src="../assets/logo-gplus.png">
					</a>
					<a href="#">
						<img alt="Instagram" src="../assets/logo-ig.png">
					</a>
				</div>
			</div>

			<form action class="mx-3" method>
				<h3>Contact Us</h3>
				<input id="name" name="name" placeholder="Name" type="text">
				<input id="email" name="email" placeholder="Email" type="text">
				<textarea cols="30" id name placeholder="Message" rows="10"></textarea>
				<button type="submit">Send Message</button>
			</form>

			<nav class="mx-3">
				<h3>Menu</h3>
				<ul>
					<li>
						<router-link class="link light-text" to="/">Home</router-link>
					</li>
					<li>
						<router-link class="link light-text" to="/">Product</router-link>
					</li>
					<li>
						<router-link class="link light-text" to="/">Portfolio</router-link>
					</li>
					<li>
						<router-link class="link light-text" to="/">About Us</router-link>
					</li>
					<li>
						<router-link class="link light-text" to="/">Artikel</router-link>
					</li>
					<li>
						<router-link class="link light-text" to="/">Contact Us</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "FooterContact"
	};
</script>

<style lang="scss" scoped>
	#footer-contact {
		div.container-80 {
			margin: auto;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
		nav {
			ul {
				list-style: none;
				li {
					margin: 0.5rem 0;
					.link-text {
						color: white;
					}
				}
			}
		}
		div#social {
			div#social-icon {
				margin-top: 10rem;
				a {
					margin-right: 2rem;
					&:hover {
						opacity: 0.5;
					}
				}
			}
		}
		form {
			display: flex;
			flex-direction: column;
			input,
			textarea,
			button {
				margin-top: 0.5rem;
				padding: 0.5rem;
				width: 30vw;
				border: none;
				background-color: grey;
			}
			button {
				border: none;
				background-color: green;
				cursor: pointer;
				&:hover {
					opacity: 0.6;
				}
			}
			::placeholder {
				color: white;
			}
		}
	}
</style>