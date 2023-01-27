<template>
	<footer class="bg-[#284948]">
		<div class="container mx-auto px-6 py-8">
			<h2 class="font-bold text-white pl-14">Reach out to us</h2>
			<h3 class="font-normal text-white pl-14">Lorem epsum Pvt Ltd.</h3>
			<div class="grid grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-3">
				<div>
					<ul class="text-gray-300 text-sm font-normal mt-6">
						<li class="mb-4">
							<div class="flex">
								<div class="mr-3">
									<CommonIcon icon="tabler-map-pin" color="text-[#DD7A1D]" />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
									amet, consectetur adipiscing elit.
								</div>
							</div>
						</li>
						<li class="mb-4">
							<div class="flex">
								<div class="mr-3">
									<CommonIcon icon="tabler-phone" color="text-[#DD7A1D]" />
								</div>
								<span> +91452547452 </span>
							</div>
						</li>
						<li class="mb-4">
							<div class="flex">
								<div class="mr-3">
									<CommonIcon icon="tabler-mail" color="text-[#DD7A1D]" />
								</div>
								<span> loremepsum@gmail.com </span>
							</div>
						</li>
					</ul>
				</div>

				<div>
					<div class="grid grid-cols-3">
						<div :key="title" class="justify-self-center" v-for="(items, title) in footer_items">
							<h2 class="mb-2 font-bold text-white">{{ title }}</h2>
							<ul class="text-gray-300 text-sm font-normal">
								<li class="mb-2" v-for="(item, index) in items" :key="index">
									<a href="#" class="hover:underline">{{ item }}</a>
								</li>
								<button
									type="button"
									v-if="title == 'Need Help?'"
									class="text-white text-semibold bg-[#F28737] rounded-lg text-sm px-5 py-2.5 text-center mr-0 mt-4"
								>
									REQUEST DEMO
								</button>
							</ul>
						</div>
					</div>
				</div>

				<div>
					<h2 class="mb-2 font-bold text-white">Subscribe our newsletter</h2>
					<div class="relative w-full">
						<div class="mb-4">
							<input
								class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Enter your email"
								required
							/>
							<button
								type="submit"
								class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#F28737] rounded-r-lg border border-[#F28737]"
							>
								<CommonIcon icon="tabler-arrow-right" color="text-white" />
							</button>
						</div>
					</div>
					<p class="text-gray-300 text-sm font-normal">
						Register now to get updates on promotions and coupons or Download App
					</p>
				</div>
			</div>
			<div class="px-4 py-6 flex justify-end">
				<span class="text-sm text-gray-300 dark:text-gray-300 text-right">
					© Copyright 2021 <a href="https://unitecloud.in">UniteCloud</a>
				</span>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data: () => ({
		show_menu: false,
		footer_items: {
			About: ['Contact Us', 'About Us', 'Carrers', 'Blogs', 'Sitemap'],
			'Policy Info': ['Privacy Policy', 'Terms of Use', 'Return Policy'],
			'Need Help?': ['FAQs', 'Online Support', 'Customer Support'],
		},
	}),
	components: {},
	methods: {
		OpenMenu() {
			this.show_menu = !this.show_menu
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
