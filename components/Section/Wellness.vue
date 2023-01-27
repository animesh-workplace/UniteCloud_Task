<template>
	<section class="bg-[#FBFEE9] md:p-24 px-12 py-20">
		<div class="container mx-auto">
			<div class="grid grid-cols-6 md:grid-cols-12 gap-8 content-center items-start">
				<div class="col-span-6">
					<div class="mb-16">
						<h2 class="text-[26px] font-bold uppercase text-[#284948]">HOLISTIC WELLNESS:</h2>
						<h3 class="text-[26px] font-medium uppercase text-[#284948]">
							NATURAL THERAPIES IDENTIFY THE ROOT CAUSE
						</h3>
					</div>

					<ul class="list-disc pl-4">
						<li class="mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</li>
						<li class="mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</li>
					</ul>
				</div>
				<div class="col-span-6">
					<div class="mb-16 pt-6">
						<h2 class="text-[26px] font-bold uppercase text-[#284948]">6 DIMENSIONS OF WELLNESS</h2>
					</div>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8">
						<div
							:key="index"
							data-aos="fade-up"
							:class="item.order"
							v-for="(item, index) in icon_items"
						>
							<div v-if="item.item == 1">
								<div class="w-20 h-20 rounded bg-[#41345F] p-4">
									<img src="@/assets/images/wellness-icon1.png" alt="Icon1" />
								</div>
								<div class="mt-2">
									<h4 class="text-xs lg:text-sm font-medium text-center">Spiritual</h4>
								</div>
							</div>
							<div v-if="item.item == 2">
								<div class="w-20 h-20 rounded bg-gradient-to-t from-[#3E8C58] to-[#44965B] p-4">
									<img src="@/assets/images/wellness-icon2.png" alt="Icon1" />
								</div>
								<div class="mt-2">
									<h4 class="text-xs lg:text-sm font-medium text-center">Environmental</h4>
								</div>
							</div>
							<div v-if="item.item == 3">
								<div class="w-20 h-20 rounded bg-[#DD7A1D] p-4">
									<img src="@/assets/images/wellness-icon3.png" alt="Icon1" />
								</div>
								<div class="mt-2">
									<h4 class="text-xs lg:text-sm font-medium text-center">Emotional</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		icon_items: [
			{ item: 1, order: 'justify-self-start lg:justify-self-center' },
			{ item: 2, order: 'justify-self-start lg:justify-self-center' },
			{ item: 3, order: 'justify-self-start lg:justify-self-center' },
			{ item: 1, order: 'justify-self-start lg:justify-self-end' },
			{ item: 2, order: 'justify-self-start lg:justify-self-end' },
			{ item: 3, order: 'justify-self-start lg:justify-self-end' },
		],
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
