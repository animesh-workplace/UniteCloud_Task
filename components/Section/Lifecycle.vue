<template>
	<section class="bg-[url('@/assets/images/lifecycle-bg.png')] bg-cover bg-no-repeat px-12 py-16">
		<h2 class="text-[28px] font-extrabold uppercase text-center mb-16 text-[#284948]">
			LIFECYCLE COST OF A DISEASE
		</h2>

		<div class="container mx-auto">
			<div class="grid grid-cols-2 md:grid-cols-12 gap-20">
				<div data-aos="fade-up" class="col-span-4 md:col-start-2 md:col-span-2">
					<div
						class="bg-[url('@/assets/images/lifecycle-image1.png')] bg-cover bg-no-repeat rounded-xl bg-clip-content"
					>
						<div class="add-symbol py-16 px-4 backdrop-brightness-50 rounded-xl">
							<h3 class="text-white text-semibold text-2xl text-center">Direct Cost</h3>
						</div>
					</div>
					<div class="px-4 mt-8">
						<h4 class="font-medium text-center">Healthcare & Medical Cost</h4>
					</div>
				</div>
				<div data-aos="fade-up" class="col-span-4 md:col-span-2">
					<div
						class="bg-[url('@/assets/images/lifecycle-image2.png')] bg-cover bg-no-repeat rounded-xl bg-clip-content"
					>
						<div class="add-symbol py-16 px-4 backdrop-brightness-50 rounded-xl">
							<h3 class="text-white text-semibold text-2xl text-center">Indirect Cost</h3>
						</div>
					</div>
					<div class="px-4 mt-8">
						<h4 class="font-medium text-center">
							Decrease quality of life, pain, anxiety, incovenience &
						</h4>
					</div>
				</div>
				<div data-aos="fade-up" class="col-span-4 md:col-span-2">
					<div
						class="bg-[url('@/assets/images/lifecycle-image3.png')] bg-cover bg-no-repeat rounded-xl bg-clip-content"
					>
						<div class="equal-symbol py-12 px-4 backdrop-brightness-50 rounded-xl">
							<h3 class="text-white text-semibold text-2xl text-center">Intangible Cost</h3>
						</div>
					</div>
					<div class="px-4 mt-8">
						<h4 class="font-medium text-center">
							Decrease quality of life, pain, anxiety, incovenience &
						</h4>
					</div>
				</div>
				<div data-aos="fade-up" class="col-span-4">
					<div
						class="bg-[url('@/assets/images/lifecycle-image4.png')] bg-cover bg-no-repeat rounded-xl bg-clip-content"
					>
						<div class="py-16 px-4 backdrop-brightness-50 rounded-xl">
							<h3 class="text-white text-semibold text-2xl text-center">Total Cost</h3>
						</div>
					</div>
					<div class="px-4 mt-8">
						<h4 class="font-medium text-center">
							Decrease quality of life, pain, anxiety, incovenience &
						</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style>
.add-symbol {
	position: relative;
}
.add-symbol::after {
	top: 40%;
	right: -22%;
	content: '+';
	color: #284948;
	position: absolute;
	transform: scale(2);
}
.equal-symbol {
	position: relative;
}
.equal-symbol::after {
	top: 40%;
	right: -22%;
	content: '=';
	color: #284948;
	position: absolute;
	transform: scale(2);
}
@media (max-width: 768px) {
	.add-symbol::after {
		top: 150%;
		right: 50%;
	}
	.equal-symbol::after {
		top: 160%;
		right: 50%;
	}
}
</style>
