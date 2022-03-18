<script lang="ts">
	import { push } from 'svelte-spa-router';
	import Clipboard from 'svelte-clipboard';

	import { toHex, connnectWallet, addKlaytnChain } from '../lib/web3';

	import Button from '../components/Button.svelte';
	import Hr from '../components/Hr.svelte';
	import DescriptionImage from '../components/DescriptionImage.svelte';

	import metamask1 from '../assets/metamask-1.png';
	import metamask2 from '../assets/metamask-2.png';
	import metamask3 from '../assets/metamask-3.png';
	import metamask4 from '../assets/metamask-4.png';
	import metamask5 from '../assets/metamask-5.png';
	import metamask6 from '../assets/metamask-6.png';
	import metamask7 from '../assets/metamask-7.png';
	import metamask8 from '../assets/metamask-8.png';
	import metamask9 from '../assets/metamask-9.png';
	import metamask10 from '../assets/metamask-10.png';
	import kaikas1 from '../assets/kaikas-1.png';
	import kaikas2 from '../assets/kaikas-2.png';
	import kaikas3 from '../assets/kaikas-3.png';
	import kaikas4 from '../assets/kaikas-4.png';
	import kaikas5 from '../assets/kaikas-5.png';
	import kaikas6 from '../assets/kaikas-6.png';
	import kaikas7 from '../assets/kaikas-7.png';
	import kaikas8 from '../assets/kaikas-8.png';
	import kaikas9 from '../assets/kaikas-9.png';
	import png1 from '../assets/1.png';
	import png2 from '../assets/2.png';
	import png3 from '../assets/3.png';

	let installWallet: string | undefined;
	let walletState: string[] | undefined;
	let isMobile: boolean =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	const { ethereum } = window as any;

	const klaytnChain = {
		chainId: toHex(8217),
		chainName: 'Klaytn Mainnet Cypress',
		nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
		rpcUrls: ['https://public-node-api.klaytnapi.com/v1/cypress'],
		blockExplorerUrls: ['https://scope.klaytn.com'],
	};

	const url = {
		metamask:
			'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
		kaikas: 'https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko',
		googleplay:
			'https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=1030278308777543253&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D',
		appstore:
			'https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=1030278308777543253&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D',
	};

	const connnectWalletButton = async () => {
		walletState = await connnectWallet(ethereum);
	};

	const addKlaytnChainButton = async () => {
		await addKlaytnChain(ethereum, klaytnChain);
	};
</script>

{#if !isMobile}
	<p class="mb-3 text-xl font-bold">지갑 설치</p>
	<p class="mb-5">
		본 가이드는 <a
			href="https://www.google.com/intl/ko/chrome/"
			class="font-bold text-sky-600">크롬 브라우저</a
		>를 기준으로 진행되며,
		<br />
		민팅 시 안정성을 위해 Metamask 지갑 설치를 권장합니다.
	</p>
	<div class="mb-3">
		<Button
			addClass="w-36 mr-5 {installWallet == 'metamask'
				? '-translate-y-1 shadow-xl bg-sky-600 text-white'
				: null}"
			onclick={() => {
				installWallet = 'metamask';
			}}>Metamask</Button
		>
		<Button
			addClass="w-36 {installWallet == 'kaikas'
				? '-translate-y-1 shadow-xl bg-sky-600 text-white'
				: null}"
			onclick={() => {
				installWallet = 'kaikas';
			}}>Kaikas</Button
		>
	</div>
	<p>설치를 원하시는 지갑을 클릭해주세요.</p>

	{#if installWallet == 'metamask'}
		<Hr />
		<p>
			아래 버튼을 클릭한 후 가이드로 돌아와, 사진 설명을 따라 진행해
			주세요.
		</p>
		<Button addClass="w-42" onclick={() => window.open(url.metamask)}
			>확장프로그램 설치</Button
		>
		<DescriptionImage src={metamask1} />
		<p>
			<span class="font-bold">1.</span> 클릭 후 나오는 페이지 우측 상단의 "Chrome에
			추가" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask2} />
		<p>
			<span class="font-bold">2.</span> "확장 프로그램 추가" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask3} />
		<p><span class="font-bold">3.</span> "시작하기" 버튼을 클릭합니다.</p>
		<DescriptionImage src={metamask4} />
		<p>
			<span class="font-bold">4.</span> 페이지 우측의 "지갑 생성" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask5} />
		<p>
			<span class="font-bold">5.</span> 글을 읽어보신 후, 원하는 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask6} />
		<p>
			<span class="font-bold">6.</span> 비밀번호 입력 후, 이용약관에 체크,
			"생성" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask7} />
		<p><span class="font-bold">7.</span> "다음" 버튼을 클릭합니다.</p>
		<DescriptionImage src={metamask8} />
		<p>
			<span class="font-bold">8.</span> 비밀 단어를 안전한 매체에 보관한 뒤,
			"다음" 버튼을 클릭합니다.
		</p>
		<p>
			시드(Seed) 문구의 분실, 도용으로 인해 <span
				class="font-bold text-rose-600"
				>자산을 잃을 수 있습니다.
				<br />
				꼭 안전한 저장 공간이나 수기로 보관</span
			>해주세요.
		</p>
		<DescriptionImage src={metamask9} />
		<p>
			<span class="font-bold">9.</span> 이전 페이지에 나온 Seed 문구를 완성한
			뒤, "확인" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={metamask10} />
		<p>
			<span class="font-bold">10.</span> "모두 완료" 버튼을 클릭합니다.
		</p>
		<Hr />
		{#if !ethereum}
			<p class="mb-3 text-xl font-bold">Klaytn 네트워크 추가</p>
			<p class="font-bold text-rose-600">
				Metamask 지갑 설치 완료 후, 진행이 가능합니다.
				<br />
				위의 단계들을 잘 진행했는지 확인해주세요!
			</p>
		{:else}
			<p class="mb-3 text-xl font-bold">Klaytn 네트워크 추가</p>
			<p>
				아래의 버튼을 클릭해 지갑을 연결 한 후,
				<br />
				한번 더 클릭해 네트워크를 추가합니다.
			</p>
			{#if !walletState}
				<Button addClass="w-40" onclick={connnectWalletButton}
					>지갑 연결</Button
				>
			{:else}
				<Button addClass="w-50" onclick={addKlaytnChainButton}
					>Klaytn Network 추가</Button
				>
			{/if}
		{/if}
		<p class="mt-10 mb-3 text-xl font-bold">
			🎉지갑 설치를 완료하셨습니다🎉
		</p>
		<p>메인화면으로 돌아가 다른 사항들이 준비되어있는지 확인해주세요.</p>
	{:else if installWallet == 'kaikas'}
		<Hr />
		<p>
			아래 버튼을 클릭한 후, 가이드로 돌아와 지갑을 사진설명을 따라 진행해
			주세요.
		</p>
		<Button addClass="w-42" onclick={() => window.open(url.kaikas)}
			>확장프로그램 설치</Button
		>
		<DescriptionImage src={kaikas1} />
		<p>
			<span class="font-bold">1.</span> 클릭 후 나오는 페이지 우측 상단의 "Chrome에
			추가" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas2} />
		<p>
			<span class="font-bold">2.</span> "확장 프로그램 추가" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas3} />
		<p>
			<span class="font-bold">3.</span> 크롬 우측 상단의 퍼즐모양 버튼 클릭
			후, "Kaikas" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas4} />
		<p>
			<span class="font-bold">4.</span> 비밀번호 입력 후, "생성" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas5} />
		<p>
			<span class="font-bold">5.</span> 계정 이름 입력 후, "생성" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas6} />
		<p>
			<span class="font-bold">6.</span> 문구를 잘 읽은 후, "다음" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas7} />

		<p>
			<span class="font-bold">7.</span> 시드 구문을 안전한 매체에 보관한 뒤,
			"예, 안전한 곳에 보관했습니다." 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas8} />
		<p>
			<span class="font-bold">8.</span> 이전 페이지에 나온 시드 구문을 입력한
			뒤, "확인" 버튼을 클릭합니다.
		</p>
		<DescriptionImage src={kaikas9} />
		<p>
			<span class="font-bold">9.</span> "Kaikas 시작하기" 버튼을 클릭합니다.
		</p>
		<p class="mt-10 mb-3 text-xl font-bold">
			🎉지갑 설치를 완료하셨습니다🎉
		</p>
		<p>메인화면으로 돌아가 다른 사항들이 준비되어있는지 확인해주세요.</p>
	{/if}
{:else}
	<p>
		현재 모바일 환경에서는
		<span class="font-bold">Metamask 지갑</span>만 지원하고 있습니다.
		<br />
		데스크탑 환경에서 진행하는 방법은 아래 버튼을 클릭해 확인해주세요.
	</p>

	<Hr />

	<button on:click={() => push('/Createwallet')}>링크 이동</button>
	{#if !ethereum}
		<p class="mb-3 text-xl font-bold">1. 지갑 설치</p>
		<p>사용중인 모바일 OS에 따라 버튼을 클릭해 설치해주세요.</p>
		<div class="my-3">
			<Button addClass="w-32" onclick={() => window.open(url.googleplay)}
				>Android</Button
			>
			<Button addClass="w-32" onclick={() => window.open(url.appstore)}
				>iOS</Button
			>
		</div>
		<p>안내에 따라 새로운 지갑, 혹은 기존 지갑을 추가합니다.</p>
		<p class="mt-3">
			시드(Seed) 문구의 분실, 도용으로 인해 <span
				class="font-bold text-rose-600"
				>자산을 잃을 수 있습니다.
				<br />
				꼭 안전한 저장 공간이나 수기로 보관</span
			>해주세요.
		</p>

		<Hr />
		<p class="text-xl font-bold">2. Metamask 브라우저에서 사이트 접속</p>
		<Clipboard
			text="https://metamask-install-page.vercel.app/"
			let:copy
			on:copy={() => {
				alert('링크를 복사하였습니다.');
			}}
		>
			<Button addClass="w-40 text-sky-600" onclick={copy}
				>링크 복사</Button
			>
		</Clipboard>
		<p>
			위 버튼을 클릭해 링크 복사 후,
			<br />
			Metamask 앱 내부 브라우저로 접속합니다.
		</p>
		<img class="my-2 h-96" src={png1} alt="1" />
		<img class="my-2 h-96" src={png2} alt="2" />
		<img class="my-2 h-96" src={png3} alt="3" />

		<Hr />

		<p class="mb-3 text-xl font-bold">3. Klaytn 네트워크 추가</p>
		<p class="mt-3 text-rose-600 ">
			3단계 부터는 Metamask 브라우저에서 진행이 가능합니다.
		</p>
		<p class="text-rose-600">위의 단계들을 잘 진행했는지 확인해주세요!</p>
	{:else}
		<p class="mb-3 text-xl font-bold text-green-500">
			1. Metamask 지갑 설치 ✔
		</p>
		<Hr />
		<p class="text-xl font-bold text-green-500">
			2. Metamask 브라우저에서 사이트 접속 ✔
		</p>
		<Hr />
		<p class="mb-3 text-xl font-bold">3. Klaytn 네트워크 추가</p>
		<p>
			아래의 버튼을 클릭해 지갑을 연결 한 후,
			<br />
			한번 더 클릭해 네트워크를 추가합니다.
		</p>
		{#if !walletState}
			<Button addClass="w-40" onclick={connnectWalletButton}
				>지갑 연결</Button
			>
		{:else}
			<Button addClass="w-50" onclick={addKlaytnChainButton}
				>Klaytn Network 추가</Button
			>
		{/if}
		<p class="mt-10 mb-3 text-xl font-bold">
			🎉지갑 설치를 완료하셨습니다🎉
		</p>
		<p>메인화면으로 돌아가 다른 사항들이 준비되어있는지 확인해주세요.</p>
	{/if}
{/if}
<Hr />
<Button addClass="" onclick={() => push('/')}>메인화면으로</Button>
