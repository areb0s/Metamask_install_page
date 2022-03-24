<script lang="ts">
	import { push } from 'svelte-spa-router';

	import Button from '../components/Button.svelte';
	import Hr from '../components/Hr.svelte';
	import DescriptionImage from '../components/DescriptionImage.svelte';

	import minting1 from '../assets/minting-1.png';
	import minting2 from '../assets/minting-2.png';
	import minting3 from '../assets/minting-3.png';
	import minting4 from '../assets/minting-4.png';
	import minting5 from '../assets/minting-5.png';
	import minting6 from '../assets/minting-6.png';
	import minting7 from '../assets/minting-7.png';

	let isMobile: boolean =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);
</script>

<p class="mb-5">
	본 가이드는 <span class="font-bold text-rose-600">개인지갑</span>과
	<span class="font-bold text-rose-600">충분한 클레이</span>(NFT 1개당 201
	클레이튼)가
	<br />
	준비된 상태를 기준으로 작성되었습니다.
</p>
<p class="mb-5">
	모바일에서는 메타마스크 브라우저에 <span class="font-bold"
		>https://www.natidao.io/</span
	> 를 입력후 진행해주세요.
</p>

<Hr />
<p>아래 버튼을 클릭한 후 가이드로 돌아와, 사진 설명을 따라 진행해 주세요.</p>
<Button addClass="" onclick={() => window.open('https://www.natidao.io/')}
	>NATI 홈페이지</Button
>
<DescriptionImage src={minting1} />
<p>
	<span class="font-bold">1.</span> 지갑의 네트워크를 확인합니다. 메타마스크는
	'Klaytn Mainnet Cypress' 네트워크
	<br />
	카이카스는 '메인넷' 네트워크로 설정합니다.
</p>
<DescriptionImage src={minting2} />
<p>
	<span class="font-bold">2.</span> NATI 홈페이지 중앙의 "민팅사이트 바로가기"
	버튼을 클릭합니다.
	<br />
	<span class="font-bold"
		>3월 25일 오후 9시 30분 이후로 클릭이 가능할 예정입니다.</span
	>
</p>
<DescriptionImage src={minting3} />
<p>
	<span class="font-bold">3.</span> 우측 하단의 "지갑을 연결해주세요" 버튼을 클릭합니다.
</p>
<DescriptionImage src={minting4} />
<p>
	<span class="font-bold">4.</span> 본인이 설치한 지갑 종류에따라 버튼을 클릭합니다.
</p>
<DescriptionImage src={minting5} />
<p>
	<span class="font-bold">5.</span> 팝업으로 나오는 창에서 "연결" 버튼을 클릭합니다.
</p>
<DescriptionImage src={minting6} />
<p>
	<span class="font-bold">6.</span> 본인이 원하는 수량에따라 - + 버튼을 눌러 수량을
	조절한 뒤, "민팅하기" 버튼을 클릭합니다.
</p>
<DescriptionImage src={minting7} />
<p>
	<span class="font-bold">7.</span> 팝업으로 나오는 창에서 클레이튼 수량을 확인한
	뒤, "확인" 버튼을 클릭합니다.
</p>

<Hr />
<Button addClass="" onclick={() => push('/')}>메인화면으로</Button>
