<template>
	<div>
		<HeaderShortBG subtitle="Providing Reliable Software" title="About Us"/>
		<div class="container-60">
			<img alt="Logo BerkatSoft" src="../assets/Berkatsoft (vertical).png">
			<div class="text">
				<h1>A Few Words About Us</h1>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, natus adipisci saepe debitis quibusdam facere optio nisi distinctio aspernatur, officia accusamus? Quis doloremque sit ducimus alias, aspernatur enim voluptate odit.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione voluptatem, sint temporibus ea nemo amet in autem, non, officia assumenda. Autem ut iusto voluptate qui dolor provident expedita dolorum.</p>
			</div>
		</div>

		<div class="container-60">
			<div class="text">
				<h1>A Few Words About Us</h1>
				<div class="desc">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione voluptatem, sint temporibus ea nemo amet in autem, non, officia assumenda. Autem ut iusto voluptate qui dolor provident expedita dolorum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius blanditiis rem voluptatem repudiandae tempore! Officiis illum inventore fugit fugiat earum ipsa consectetur voluptate facilis. Adipisci eos neque ipsa consequatur natus?</p>
				</div>
			</div>
		</div>
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
	div.container-60 {
		margin: auto;
		padding: 5rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		img {
			margin-right: 7rem;
		}
		div.text {
			h1 {
				padding-bottom: 1rem;
			}
			p {
				padding: 1rem 0;
			}
		}
	}

	div.desc {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 3rem;
		p:nth-child(2) {
			margin-left: 4rem;
		}
	}
</style>