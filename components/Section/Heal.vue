<template>
	<section class="bg-[url('@/assets/images/heal-bg.png')] bg-cover bg-no-repeat px-12 py-56">
		<div class="container mx-auto">
			<div class="grid grid-cols-12 gap-20 content-center items-center">
				<div class="col-span-5">
					<div class="border-y-4 border-[#F28737] py-4">
						<h2 class="text-[36px] font-bold uppercase text-center text-[#284948]">We heal you</h2>
						<h2 class="text-[44px] font-medium uppercase text-center text-[#284948]">Naturally</h2>
					</div>
				</div>
				<div class="col-span-7">
					<div class="grid grid-cols-4 gap-12">
						<div v-for="(item, index) in icon_items" :key="index">
							<div class="p-16 rounded bg-gradient-to-t from-[#3E8C58] to-[#284948]">
								<img
									alt="Icon2"
									class="h-18 w-18 ml-2"
									v-if="item.icon == 1"
									src="@/assets/images/heal-icon2.png"
								/>
								<img
									src="@/assets/images/heal-icon1.png"
									class="h-18 w-18 mb-2 ml-2"
									alt="Icon1"
									v-else
								/>
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
