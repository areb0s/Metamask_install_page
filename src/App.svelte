<script lang="ts">
	import Router, { location, push } from 'svelte-spa-router';

	import TailwindCss from './TailwindCSS.svelte';

	import Home from './pages/Home.svelte';
	import Createwallet from './pages/Createwallet.svelte';
	import Exchange from './pages/Exchange.svelte';
	import Test from './pages/Test.svelte';

	import Button from './components/Button.svelte';
	import Hr from './components/Hr.svelte';

	import logo from './assets/logo.png';

	const routes = {
		'/': Home,
		'/Createwallet': Createwallet,
		'/Exchange': Exchange,
		'/test': Test,
	};
</script>

<TailwindCss />

<main class="container my-0 sm:my-5 mx-auto">
	<div
		class="grid border-solid border-2 rounded-lg pb-10 p-5 bg-white shadow-sm justify-items-center text-center"
	>
		{#if $location == '/'}
			<img class="h-52" src={logo} alt="NATI Logo" />
			<p class="text-2xl font-bold">나티 민팅 가이드북</p>

			<p class="mt-5">
				나티NFT 민팅을 위해 준비해야할 사항들의 가이드북입니다.
				<br />
				준비가 필요한 항목을 클릭해 진행해주세요.
			</p>
		{:else}
			<img class="h-52" src={logo} alt="NATI Logo" />
			<p class="text-2xl font-bold">나티 민팅 가이드북</p>
			<Button addClass="" onclick={() => push('/')}>메인화면으로</Button>
		{/if}

		<Hr />
		<Router {routes} />
	</div>
</main>

<style>
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 100;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf)
				format('opentype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 300;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf)
				format('opentype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 400;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
				format('opentype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 500;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf)
				format('opentype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 700;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf)
				format('opentype');
	}
	@font-face {
		font-family: 'Noto Sans KR';
		font-style: normal;
		font-weight: 900;
		src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2)
				format('woff2'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff)
				format('woff'),
			url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf)
				format('opentype');
	}

	:global(body) {
		background-color: rgb(241 245 249);
		font-family: 'Noto Sans KR';
	}
</style>
