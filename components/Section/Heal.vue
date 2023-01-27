<template>
	<section class="bg-[url('@/assets/images/heal-bg.png')] bg-cover bg-no-repeat px-8 lg:px-12 py-24 lg:py-48">
		<div class="container mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-20 content-center items-center">
				<div class="lg:col-span-5">
					<div class="border-y-4 border-[#F28737] py-4">
						<h2 class="lg:text-[36px] font-bold uppercase text-center text-[#284948]">We heal you</h2>
						<h2 class="lg:text-[44px] font-medium uppercase text-center text-[#284948]">Naturally</h2>
					</div>
				</div>
				<div class="lg:col-span-7">
					<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
						<div data-aos="fade-up" v-for="(item, index) in icon_items" :key="index">
							<div
								class="p-10 xl:p-12 rounded bg-gradient-to-t from-[#3E8C58] to-[#284948] text-center"
							>
								<div class="flex justify-center">
									<img
										alt="Icon2"
										class="h-18 w-18 text-center"
										v-if="item.icon == 1"
										src="@/assets/images/heal-icon2.png"
									/>
									<img
										src="@/assets/images/heal-icon1.png"
										class="h-18 w-18 md:mb-2"
										alt="Icon1"
										v-else
									/>
								</div>
							</div>
							<div class="px-4 mt-8">
								<h4 class="font-medium text-center">{{ item.content }}</h4>
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
			{ content: 'Ayurveda', icon: 1 },
			{ content: 'Homeopathy', icon: 2 },
			{ content: 'Naturopathy', icon: 1 },
			{ content: 'Yoga', icon: 2 },
			{ content: 'Meditation', icon: 1 },
			{ content: 'Physiotherapy', icon: 2 },
			{ content: 'Nutrition', icon: 1 },
			{ content: 'Psychology', icon: 1 },
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
