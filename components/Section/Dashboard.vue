<template>
	<section class="bg-[#FBFEE9] pb-24">
		<div class="bg-gradient-to-l from-[#141414] to-[#284948] p-28"></div>
		<div
			class="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center items-start px-14 lg:px-24 pt-20 md:pt-24 -mt-64"
		>
			<div class="order-last lg:order-first">
				<img alt="Icon2" class="mx-auto" src="@/assets/images/dashboard.png" />
			</div>

			<div>
				<div class="text-center">
					<h2 class="text-base md:text-[20px] font-bold uppercase text-white">
						COMPLETE DASHBOARD FOR YOUR COMPANY
					</h2>
					<button
						type="button"
						class="text-white text-semibold bg-[#F28737] rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 mt-4"
					>
						REQUEST DEMO
					</button>
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

<style></style>
