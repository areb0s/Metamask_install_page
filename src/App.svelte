<script lang="ts">
	import Clipboard from 'svelte-clipboard';

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
		ethereum
			.request({
				method: 'wallet_addEthereumChain',
				params: [klaytnChain, accounts[0]],
			})
			.then((res) => {
				console.log(res);
				if (ethereum.chainId == toHex(8217)) {
					alert('이미 Klaytn Network에 연결되어 있습니다.');
				}
			})
			.catch((error) => {
				console.log(error);
				alert('Klaytn Network 연결에 실패하였습니다.');
			});
	};

	const goGooglePlay = () => {
		window.open(
			'https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=1030278308777543253&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D'
		);
	};
	const goAppstore = () => {
		window.open(
			'https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=1030278308777543253&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D'
		);
	};
</script>

<TailwindCss />
<main class="container grid my-0 sm:my-16 mx-auto place-content-center">
	<div
		class="grid border-solid border-2 rounded-lg pb-20 p-5 bg-white justify-items-center"
	>
		<img class="h-52" src={metamask} alt="Metamask Logo" />
		<p class="text-xl font-bold">쥬라리움NFT 메타마스크 설치 안내</p>

		<p class="mt-5">
			모바일 환경에서 쥬라리움NFT 서비스를 이용하기 위한 안내입니다.
			<br />
			아래 단계들을 순차적으로 진행해주세요!
		</p>
		<hr class="my-20 border-solid border-black border-1 w-[50px]" />

		{#if !ethereum}
			<p class="mb-3 text-xl font-bold">1. Metamask 지갑 설치</p>
			<p>모바일 OS에 맞는 버튼을 클릭해 설치해주세요.</p>
			<div class="my-3">
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
					class="font-bold text-rose-600"
					>자산을 잃을 수 있습니다.
					<br />
					꼭 안전한 메모저장 공간에 저장</span
				>해주세요.
			</p>

			<hr class="my-20 border-solid border-black border-1 w-[50px]" />
			<p class="text-xl font-bold">
				2. Metamask 브라우저에서 사이트 접속
			</p>
			<Clipboard
				text="https://metamask-install-page.vercel.app/"
				let:copy
				on:copy={() => {
					alert('링크를 복사하였습니다.');
				}}
				><button
					class="my-3 border-solid border-2 rounded-lg py-5 px-7 w-40 text-sky-600"
					on:click={copy}>링크 복사</button
				></Clipboard
			>
			<p>
				위 버튼을 클릭해 링크 복사 후,
				<br />
				Metamask 앱 내부 브라우저로 접속합니다.
			</p>
			<img class="my-2 h-96" src={png1} alt="1" />
			<img class="my-2 h-96" src={png2} alt="2" />
			<img class="my-2 h-96" src={png3} alt="3" />

			<hr class="my-20 border-solid border-black border-1 w-[50px]" />

			<p class="mb-3 text-xl font-bold">3. Klaytn 네트워크 추가</p>
			<p class="mt-3 text-rose-600">
				3단계 부터는 Metamask 브라우저에서 진행이 가능합니다.
			</p>
			<p class="text-rose-600">2단계를 잘 진행했는지 확인해주세요!</p>
		{:else}
			<p class="mb-3 text-xl font-bold text-green-500">
				1. Metamask 지갑 설치 ✔
			</p>
			<hr class="my-20 border-solid border-black border-1 w-[50px]" />
			<p class="text-xl font-bold text-green-500">
				2. Metamask 브라우저에서 사이트 접속 ✔
			</p>
			<hr class="my-20 border-solid border-black border-1 w-[50px]" />
			<p class="mb-3 text-xl font-bold">3. Klaytn 네트워크 추가</p>
			<p>
				아래의 버튼을 클릭해 지갑을 연결 한 후,
				<br />
				한번 더 클릭해 네트워크를 추가합니다.
			</p>
			{#if !walletState}
				<button
					class="my-3 border-solid border-2 rounded-lg py-5 px-7 w-40"
					on:click={connnectWallet}>지갑 연결</button
				>
			{:else}
				<button
					class="my-3 border-solid border-2 rounded-lg py-5 px-7 w-50"
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
