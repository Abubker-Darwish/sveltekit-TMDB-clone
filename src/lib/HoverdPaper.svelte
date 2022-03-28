<div
	class="inline relative group"
>
	<slot name="title" />
	<div class="popper group-hover:block">
		<slot name="paper" />
	</div>
</div>

<style lang="postcss">
	.popper {
		@apply hidden bg-white absolute top-7 left-0 rounded-md py-2 w-44;
	}
</style>
