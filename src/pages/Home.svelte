<script lang="ts">
	import Card from '../components/Card.svelte';

	import createwallet from '../assets/createwallet.png';
	import exchange from '../assets/exchange.png';
	import mintnati from '../assets/mintnati.png';
</script>

<div class="mx-0 md:mx-5 lg:mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
	<Card href="/Createwallet" img={createwallet}
		>메타마스크 or 카이카스 지갑 생성</Card
	>
	<Card href="/Exchange" img={exchange}>거래소 가입, Klay 전송</Card>
	<Card href="/" disable img={mintnati}>민팅 준비하기</Card>
</div>
