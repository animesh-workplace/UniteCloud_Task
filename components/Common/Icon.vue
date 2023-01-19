<template>
	<svg :class="`${icon_size} fill-current stroke-current ${get_color}`">
		<use :xlink:href="require('@/assets/icons/tabler-sprite.svg') + `#${icon}`"></use>
	</svg>
</template>

<script>
export default {
	data: () => ({}),
	computed: {
		icon_size() {
			if (this.size == 'sm') {
				return 'w-4 h-4'
			} else if (this.size == 'md') {
				return 'w-5 h-5'
			} else if (this.size == 'lg') {
				return 'w-6 h-6'
			}
		},

		get_color() {
			if (this.no_color) {
				return ''
			} else {
				return this.color
			}
		},
	},
	props: {
		icon: { type: String, required: true },
		no_color: { type: Boolean, default: false },
		color: { type: String, default: 'text-gray-700 dark:text-neutral-200' },
		size: {
			type: String,
			default: 'md',
			validator(val) {
				return ['sm', 'md', 'lg'].includes(val)
			},
		},
	},
}
</script>

<style scoped></style>
