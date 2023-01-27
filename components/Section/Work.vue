<template>
	<section class="bg-[#FdFdFd] md:py-24 py-10 px-10">
		<h2 class="text-[26px] font-bold uppercase text-[#284948] text-center mb-16">HOW DOES THIS WORK ?</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 md:px-24 items-end md:items-center">
			<div class="mb-10 z-10" data-aos="fade-left">
				<div class="border-b-4 border-[#F28737] p-6 mb-6 arrow-left">
					<h3 class="text-[26px] font-medium text-center text-[#DD7A1D] mb-4">Step 1</h3>
					<h4 class="font-medium text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h4>
				</div>
				<h4 class="font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
			</div>

			<div class="mb-10 z-10" data-aos="fade-up">
				<div class="border-b-4 border-[#F28737] p-6 mb-6">
					<h3 class="text-[26px] font-medium text-center text-[#DD7A1D] mb-4">Step 2</h3>
					<h4 class="font-medium text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h4>
				</div>
				<h4 class="font-normal text-center arrow-up">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h4>
				<div class="lg:mt-12 hidden lg:block">
					<img class="mx-auto z-0" src="@/assets/images/work.png" alt="Image1" />
				</div>
			</div>

			<div class="mb-10 z-10" data-aos="fade-right">
				<div class="border-b-4 border-[#F28737] p-6 mb-6 arrow-right">
					<h3 class="text-[26px] font-medium text-center text-[#DD7A1D] mb-4">Step 3</h3>
					<h4 class="font-medium text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h4>
				</div>
				<h4 class="font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
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
.arrow-left {
	position: relative;
}
.arrow-left::after {
	right: -10%;
	fill: red;
	width: 20px;
	height: 20px;
	position: absolute;
	transform: scale(2);
	top: calc(100% - 10px);
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-left' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23DD7A1D' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='15 6 9 12 15 18' /%3E%3C/svg%3E");
}
.arrow-right {
	position: relative;
}
.arrow-right::after {
	left: -12%;
	fill: red;
	width: 20px;
	height: 20px;
	position: absolute;
	transform: scale(2);
	top: calc(100% - 10px);
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-right' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23DD7A1D' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='9 6 15 12 9 18' /%3E%3C/svg%3E");
}
.arrow-up {
	position: relative;
}
.arrow-up::after {
	top: 150%;
	width: 20px;
	height: 20px;
	position: absolute;
	transform: scale(2);
	left: calc(50% - 20px);
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-up' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23DD7A1D' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='6 15 12 9 18 15' /%3E%3C/svg%3E");
}
.arrow-down {
	position: relative;
}
.arrow-down::after {
	top: 150%;
	width: 20px;
	height: 20px;
	position: absolute;
	transform: scale(2);
	left: calc(50% - 20px);
	content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-down' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23DD7A1D' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 9l6 6l6 -6' /%3E%3C/svg%3E");
}
@media (max-width: 770px) {
	.arrow-up::after {
		display: none;
	}
	.arrow-left::after {
		display: none;
	}
	.arrow-right::after {
		display: none;
	}
}
</style>
