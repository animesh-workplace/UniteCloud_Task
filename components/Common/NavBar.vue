<template>
	<nav
		class="bg-white px-1 sm:px-4 py-1.5 sm:py-3 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-md"
	>
		<div class="flex flex-wrap items-center justify-between mx-6">
			<a href="#" class="flex items-center"> </a>
			<div class="flex md:order-2">
				<button
					type="button"
					class="text-black bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Sign in/Sign up
				</button>
				<button
					type="button"
					@click="OpenMenu"
					aria-expanded="false"
					aria-controls="navbar-sticky"
					data-collapse-toggle="navbar-sticky"
					class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						></path>
					</svg>
				</button>
			</div>
			<div
				id="navbar-sticky"
				:class="show_menu ? 'mt-3' : 'hidden'"
				class="items-center justify-between w-full md:flex md:w-auto md:order-1"
			>
				<ul
					class="flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 md:bg-white"
				>
					<li v-for="(item, index) in menu_items" :key="index">
						<a
							href="#"
							aria-current="page"
							:class="show_menu ? 'hover:bg-gray-200' : ''"
							class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-gray-800 hover:text-black md:p-0 text-center"
						>
							{{ item }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data: () => ({
		show_menu: false,
		menu_items: ['Our Products', 'For Engineers', 'Multi-Vitamins', 'Buy', 'Books'],
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
