<template>
	<div>
		<HeaderShortBG subtitle="Don't hesitate to get in touch with us!" title="Contact Us"/>
		<section class="content container-60">
			<form action method="POST">
				<h1>Contact our team</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore est voluptates perspiciatis libero rem quis magni quasi dignissimos. Aliquam!</p>
				<input id name placeholder="Name" type="text">
				<input id name placeholder="E-Mail" type="text">
				<textarea cols="30" id name="Message" placeholder="Message" rows="10"></textarea>
				<button type="submit">Send Message</button>
			</form>
			<div class="map">
				<img alt src="../assets/Berkatsoft (dark font).png">
				<p>Address: 34 Fordham Street, New York, NY 10027</p>
				<p>Hotline: +(012) 3456-7890; +(012) 3456-7891</p>
				<p>
					Monday - Friday : 9:00 AM - 6:00 PM
					<br>Saturday : 9:00 AM - 6:00 PM
				</p>
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
	section.content {
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem 0;
		form {
			width: 35vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			h1,
			p {
				margin-bottom: 1rem;
			}
			button,
			input,
			textarea {
				padding: 0.5rem;
				margin: 0.2rem 0;
			}
			button {
				width: fit-content;
				padding: 1rem 4rem;
				border: none;
				background-color: green;
				border-radius: 2rem;
				cursor: pointer;

				&:hover {
					opacity: 0.7;
				}
			}
		}
		div.map {
			width: 20vw;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			img {
				margin-bottom: 1rem;
			}
			p {
				margin: 0.3rem 0;
			}
		}
	}
</style>