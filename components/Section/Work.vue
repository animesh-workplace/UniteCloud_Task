<template>
	<section class="bg-[#FdFdFd] py-24">
		<h2 class="text-[26px] font-bold uppercase text-[#284948] text-center mb-16">HOW DOES THIS WORK ?</h2>
		<div class="grid grid-cols-3 gap-4 px-24 items-center">
			<div>
				<div class="border-b-4 border-[#F28737] p-6 mb-6 arrow-left">
					<h3 class="text-[26px] font-medium text-center text-[#DD7A1D] mb-4">Step 1</h3>
					<h4 class="font-medium text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h4>
				</div>
				<h4 class="font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
			</div>
			<div>
				<div class="border-b-4 border-[#F28737] p-6 mb-6">
					<h3 class="text-[26px] font-medium text-center text-[#DD7A1D] mb-4">Step 2</h3>
					<h4 class="font-medium text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</h4>
				</div>
				<h4 class="font-normal text-center arrow-up">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h4>
				<div class="mt-12">
					<img class="mx-auto" src="@/assets/images/work.png" alt="Image1" />
				</div>
			</div>
			<div>
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
	left: -10%;
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
</style>
