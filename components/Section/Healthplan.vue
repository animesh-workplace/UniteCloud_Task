<template>
	<section class="bg-[#FBFEE9] py-8 md:py-24">
		<h2 class="text-[26px] font-bold uppercase text-[#284948] text-center mb-16">HEALTH PLAN</h2>
		<div class="grid grid-cols-6 xl:grid-cols-12 gap-0" data-aos="fade-up">
			<div class="col-span-6 indicator max-h-96">
				<div class="bg-[#284948] p-6 md:p-12">
					<h2 class="text-[26px] font-bold uppercase text-[#C3D797] pl-5">HEAL</h2>
					<ul class="list-disc pl-10 text-white md:text-base text-sm font-medium mt-6 px-2 md:px-16">
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-0 md:mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-6 max-h-96">
				<div class="h-96 bg-[url(@/assets/images/health-image1.png)] bg-no-repeat bg-cover"></div>
			</div>
		</div>

		<div class="grid grid-cols-6 xl:grid-cols-12 gap-0" data-aos="fade-up">
			<div class="col-span-6 max-h-96 indicator">
				<div class="h-96 bg-[url(@/assets/images/health-image2.png)] bg-no-repeat bg-cover"></div>
			</div>
			<div class="col-span-6 max-h-96 order-first xl:order-none">
				<div class="bg-[#284948] p-6 md:p-12">
					<h2 class="text-[26px] font-bold uppercase text-[#C3D797] pl-5">HEAL</h2>
					<ul class="list-disc pl-10 text-white md:text-base text-sm font-medium mt-6 px-2 md:px-16">
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-0 md:mb-[1.1rem]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-6 xl:grid-cols-12 gap-0" data-aos="fade-up">
			<div class="col-span-6 indicator max-h-96">
				<div class="bg-[#284948] p-6 md:p-12">
					<h2 class="text-[26px] font-bold uppercase text-[#C3D797] pl-5">HEAL</h2>
					<ul class="list-disc pl-10 text-white md:text-base text-sm font-medium mt-6 px-2 md:px-16">
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-4 md:mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
						<li class="mb-0 md:mb-[1.1rem]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
						</li>
					</ul>
				</div>
			</div>
			<div class="col-span-6 max-h-96">
				<div class="h-96 bg-[url(@/assets/images/health-image3.png)] bg-no-repeat bg-cover"></div>
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
.indicator {
	position: relative;
}
.indicator::after {
	width: 100px;
	right: -50px;
	height: 100px;
	padding: 20px;
	position: absolute;
	border-radius: 100px;
	top: calc(50% - 50px);
	background-color: white;
	content: url('@/assets/images/healthplan-icon.png');
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
@media (max-width: 1280px) {
	.indicator::after {
		transform: scale(0.7);
		display: none;
	}
}
</style>
