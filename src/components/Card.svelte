<script lang="ts">
	import { push } from 'svelte-spa-router';

	export let href: string;
	export let img: string;
	export let disable = false;

	const link = () => {
		push(href);
	};
</script>

<div
	on:click={link}
	class="mb-5 border-solid border-2 rounded-lg transition ease-in-out duration-300 {disable
		? 'bg-[#ccc]'
		: 'cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:bg-[#666] hover:text-white'}"
>
	<img class="border-b-2 rounded-t-md w-full" src={img} alt="NATI Logo" />
	<p class="text-lg xl:text-xl my-5">
		<slot />
	</p>
</div>

<style>
	/* your styles go here */
</style>
