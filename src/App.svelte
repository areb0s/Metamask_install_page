<script lang="ts">
	import metamask from './assets/MetaMask_Fox.svg';
	import png1 from './assets/1.png';
	import png2 from './assets/2.png';
	import png3 from './assets/3.png';
	import TailwindCss from './TailwindCSS.svelte';

	const { ethereum } = window as any;
	let walletState;

	if (typeof ethereum !== 'undefined') {
		console.log('MetaMask is installed!');
	}

	const toHex = (num) => {
		return '0x' + num.toString(16);
	};

	const klaytnChain = {
		chainId: toHex(8217),
		chainName: 'Klaytn Mainnet Cypress',
		nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
		rpcUrls: ['https://public-node-api.klaytnapi.com/v1/cypress'],
		blockExplorerUrls: ['https://scope.klaytn.com'],
	};

	const connnectWallet = async () => {
		walletState = await ethereum.request({ method: 'eth_requestAccounts' });
	};

	const addKlaytnChain = async () => {
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		console.log(accounts);
		ethereum
			.request({
				method: 'wallet_addEthereumChain',
				params: [klaytnChain, accounts[0]],
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const goGooglePlay = () => {
		window.open('https://metamask.app.link/bxwkE8oF99');
	};
	const goAppstore = () => {
		window.open('https://metamask.app.link/skAH3BaF99');
	};

	const copylink = () => {
		navigator.clipboard.writeText('asdasdoaiwjdoawjkdj');
	};
</script>

<TailwindCss />
<main class="container grid my-16 mx-auto place-content-center">
	<div class="grid border-solid border-2 rounded-lg pb-20 p-5 bg-white">
		<img class="h-52 mx-auto" src={metamask} alt="Metamask Logo" />
		<p class="mx-auto text-xl font-bold">
			쥬라리움NFT 메타마스크 설치 안내
		</p>

		<p class="mt-5">
			모바일 환경에서 쥬라리움NFT 서비스를 이용하기 위한 안내입니다.
		</p>
		<p>아래 단계들을 순차적으로 진행해주세요!</p>
		<hr class="my-20 mx-auto border-solid border-black border-1 w-[50px]" />
		<p class="mb-3 mx-auto text-xl font-bold">1. Metamask 지갑 설치</p>
		<p>모바일 OS에 맞는 버튼을 클릭해 설치해주세요.</p>
		<div class="my-3 mx-auto">
			<button
				class="border-solid border-2 rounded-lg py-5 px-7 mr-5 w-32"
				on:click={goGooglePlay}>Android</button
			>
			<button
				class="border-solid border-2 rounded-lg py-5 px-7 w-32"
				on:click={goAppstore}>iOS</button
			>
		</div>
		<p>안내에 따라 새로운 지갑, 혹은 기존 지갑을 추가합니다.</p>
		<p class="mt-3">
			시드(Seed) 문구의 분실, 도용으로 인해 <span
				class="font-bold text-rose-600">자산을 잃을 수 있습니다.</span
			>
		</p>
		<p class="font-bold text-rose-600">
			꼭 안전한 메모저장 공간에 저장해주세요.
		</p>

		<hr class="my-20 mx-auto border-solid border-black border-1 w-[50px]" />
		<p class="mx-auto text-xl font-bold">
			2. Metamask 브라우저에서 사이트 접속
		</p>
		<button
			class="my-3 mx-auto border-solid border-2 rounded-lg py-5 px-7 w-40 text-sky-600"
			on:click={copylink}>링크 복사</button
		>
		<p>위 버튼을 클릭해 링크 복사 후,</p>
		<p>Metamask 앱 내부 브라우저로 접속합니다.</p>
		<img class="my-2 mx-auto h-80" src={png1} alt="1" />
		<img class="my-2 mx-auto h-80" src={png2} alt="2" />
		<img class="my-2 mx-auto h-80" src={png3} alt="3" />

		<hr class="my-20 mx-auto border-solid border-black border-1 w-[50px]" />

		<p class="mx-auto font-bold">3. Klaytn 네트워크 추가</p>
		{#if !ethereum}
			<p class="text-rose-600">
				3단계 부터는 Metamask 브라우저에서 진행이 가능합니다
			</p>
			<p class="text-rose-600">2단계를 잘 진행했는지 확인해주세요!</p>
		{:else}
			<button on:click={addKlaytnChain}
				>아래의 버튼을 클릭해 지갑을 연결하고, 네트워크를 추가합니다.</button
			>
			{#if !walletState}
				<button
					class="my-3 mx-auto border-solid border-2 rounded-lg py-5 px-7 w-40"
					on:click={connnectWallet}>지갑 연결</button
				>
			{:else}
				<button
					class="my-3 mx-auto border-solid border-2 rounded-lg py-5 px-7 w-50"
					on:click={addKlaytnChain}>Klaytn Network 추가</button
				>
			{/if}
		{/if}
	</div>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		background-color: rgb(241 245 249);
	}
</style>
