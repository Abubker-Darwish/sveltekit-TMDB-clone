<script lang="ts">
	export let percentage: number = 0;

	$: offset = 167 - percentage;
	$: color = percentage > 75 ? 'success' : 'warning';
</script>

<div class="skill">
	<div class="outer" class:outerSuccess={color === 'success'} class:outerWarning={color === 'warning'}>
		<div class="inner">
			<span
				class="text-sm font-semibold text-white absolute z-10 -rotate-[280deg] after:content-['%'] after:absolute after:text-[6px]"
			>
				{percentage}
			</span>
		</div>
		<svg
			class="absolute top-0"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="38px"
			height="38px"
		>
			<circle
				cx="19"
				cy="19"
				r="17"
				stroke-linecap="round"
				class="svg-circal"
				class:success={color === 'success'}
				class:warning={color === 'warning'}
				style="stroke-dashoffset: {offset};"
			/>
		</svg>
	</div>
</div>

<style lang="postcss">
	.skill {
		width: 38px;
		height: 38px;
		position: relative;
		transform: rotate(280deg);
	}

	.outer {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		@apply flex items-center justify-center;
	}
	.success {
		@apply stroke-success;
	}

	.warning {
		@apply stroke-warning;
	}

	.outerSuccess {
		background-color: #21d07a4d;
	}

	.outerWarning {
		background-color: #d2d53066;
	}
	.inner {
		width: 31px;
		height: 31px;
		border-radius: 50%;
		background: black;
		@apply flex items-center justify-center relative;
	}
	.svg-circal {
		fill: none;
		stroke-width: 3px;
		stroke-dasharray: 167;
	}
</style>
