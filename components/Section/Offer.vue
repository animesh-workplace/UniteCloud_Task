<template>
	<section class="bg-[url('@/assets/images/heal-bg.png')] bg-cover bg-no-repeat px-12 py-32">
		<h2 class="text-[36px] font-bold uppercase text-center text-[#284948] mb-16">WHAT WE OFFER</h2>

		<div class="container mx-auto">
			<div class="grid grid-cols-3 md:grid-cols-4 gap-20 content-center items-center px-auto md:px-44">
				<div v-for="(item, index) in icon_items" :key="index">
					<div class="flex items-center" data-aos="fade-up">
						<div class="w-20 h-20 rounded bg-[#D2E289] p-4 inline-block mr-2">
							<img src="@/assets/images/offer-icon1.png" alt="Icon1" v-if="item.icon == 1" />
							<img src="@/assets/images/offer-icon2.png" alt="Icon1" v-if="item.icon == 2" />
							<img src="@/assets/images/offer-icon3.png" alt="Icon1" v-if="item.icon == 3" />
						</div>
						<h4 class="inline-block font-medium text-center">{{ item.content }}</h4>
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
			{ content: 'Lorem ipsum', icon: 1 },
			{ content: 'Lorem ipsum', icon: 2 },
			{ content: 'Lorem ipsum', icon: 3 },
			{ content: 'Lorem ipsum', icon: 1 },
			{ content: 'Lorem ipsum', icon: 1 },
			{ content: 'Lorem ipsum', icon: 2 },
			{ content: 'Lorem ipsum', icon: 2 },
			{ content: 'Lorem ipsum', icon: 2 },
			{ content: 'Lorem ipsum', icon: 1 },
			{ content: 'Lorem ipsum', icon: 2 },
			{ content: 'Lorem ipsum', icon: 1 },
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
