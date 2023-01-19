<template>
	<div>
		<CommonNavBar />
		<main class="flex bg-gray-100 min-h-screen">
			<Nuxt class="w-full mt-16" />
		</main>
		<CommonFooter />
	</div>
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
