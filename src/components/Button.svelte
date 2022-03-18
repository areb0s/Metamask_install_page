<script lang="ts">
	export let onclick;
	export let addClass;
</script>

<button
	on:click={onclick}
	class="my-3 border-solid border-2 rounded-lg py-5 px-7 transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-sky-600 hover:text-white {addClass}"
>
	<slot />
</button>
