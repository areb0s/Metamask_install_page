<script lang="ts">
	import { push } from 'svelte-spa-router';

	import Button from '../components/Button.svelte';
	import Hr from '../components/Hr.svelte';
	import DescriptionImage from '../components/DescriptionImage.svelte';

	import korbit1 from '../assets/korbit-1.png';
	import korbit2 from '../assets/korbit-2.png';
	import korbit3 from '../assets/korbit-3.png';
	import korbit4 from '../assets/korbit-4.png';
	import korbit5 from '../assets/korbit-5.png';
	import korbit6 from '../assets/korbit-6.png';
	import korbit7 from '../assets/korbit-7.png';
	import korbit8 from '../assets/korbit-8.png';
	import korbit9 from '../assets/korbit-9.png';
	import korbit10 from '../assets/korbit-10.png';
	import korbit11 from '../assets/korbit-11.png';
	import korbit12 from '../assets/korbit-12.png';
	import korbit13 from '../assets/korbit-13.png';
	import korbit14 from '../assets/korbit-14.png';
	import korbit15 from '../assets/korbit-15.png';
	import korbit16 from '../assets/korbit-16.png';
	import korbit17 from '../assets/korbit-17.png';
	import korbit18 from '../assets/korbit-18.png';
	import korbit19 from '../assets/korbit-19.png';
	import korbit20 from '../assets/korbit-20.png';
</script>

<p class="mb-5">
	본 가이드는 코빗 거래소를 기준으로 작성되었으며,
	<br />
	이외 클레이튼의 구매, 전송이 가능한 거래소는
	<a
		href="https://www.bithumb.com/"
		target="_blank"
		class="font-bold text-sky-600">빗썸</a
	>,
	<a
		href="https://coinone.co.kr/"
		target="_blank"
		class="font-bold text-sky-600">코인원</a
	>이 있습니다.
</p>
<p>
	코빗에서의 원화입급은 <span class="font-bold text-rose-600"
		>신한은행 계좌</span
	>를 필요로 하며,
	<br />
	첫 입금으로 부터 <span class="font-bold text-rose-600">48시간 후</span>에
	Metamask나 Kaikas같은 개인지갑으로의 출금이 가능합니다.
</p>
<Hr />
<p>아래 버튼을 클릭한 후 가이드로 돌아와, 사진 설명을 따라 진행해 주세요.</p>
<Button addClass="" onclick={() => window.open('https://www.korbit.co.kr/')}
	>Korbit</Button
>
<DescriptionImage src={korbit1} />
<p>
	<span class="font-bold">1.</span> 클릭 후 나오는 페이지 우측 상단의 "회원가입"
	버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit2} />
<p>
	<span class="font-bold">2.</span> 절차에 따라 회원가입을 진행합니다.
</p>
<DescriptionImage src={korbit3} />
<p>
	<span class="font-bold">3.</span> 회원가입시 작성한 이메일에 접속해 인증을 진행합니다.
</p>
<DescriptionImage src={korbit4} />
<p>
	<span class="font-bold">4.</span> 인증메일에 첨부된 링크 접속시 나오는 "본인인증
	시작하기" 버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit5} />
<p>
	<span class="font-bold">5.</span> 항목을 잘 읽어 보신 후, "모두 확인하였습니다"
	버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit6} />
<p>
	<span class="font-bold">6.</span> 항목을 잘 읽어 보신 후, "다음" 버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit7} />
<p>
	<span class="font-bold">7.</span> 휴대폰 인증을 진행합니다.
</p>
<DescriptionImage src={korbit8} />
<p>
	<span class="font-bold">8.</span> 신분증 인증을 진행합니다.
</p>
<DescriptionImage src={korbit9} />
<p>
	<span class="font-bold">9.</span> 1원 인증을 진행합니다.
</p>
<DescriptionImage src={korbit10} />
<p>
	<span class="font-bold">10.</span> 항목을 잘 읽어 보신 후 체크, 진행합니다.
</p>
<DescriptionImage src={korbit11} />
<p>
	<span class="font-bold">11.</span> "은행 계좌 연동" 버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit12} />
<p>
	<span class="font-bold">12.</span> "신한은행 계좌 연동하기" 버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit13} />
<p>
	<span class="font-bold">13.</span> 신한은행 계좌 연동을 진행한 후, 코빗
	입금번호 발행을 완료합니다.
	<br />
	(신한은행 입출금 계좌에서
	<span class="font-bold text-rose-600"
		>발급받은 입금번호로 입금해주셔야 정상 입금 반영</span
	>됩니다.)
</p>
<DescriptionImage src={korbit14} />
<p>
	<span class="font-bold">14.</span> 클릭 후 나오는 메세지를 잘 읽어 보신 후, 하단의
	"확인" 버튼을 클릭합니다.
</p>
<DescriptionImage src={korbit15} />
<p>
	<span class="font-bold">15.</span> 상단의 "거래소" 버튼 클릭 후, 좌측 상단의
	비트코인 글씨를 클릭합니다.
</p>
<DescriptionImage src={korbit16} />
<p>
	<span class="font-bold">16.</span> 검색창에 클레이튼을 검색 후, 하단의 클레이튼
	글씨를 클릭합니다.
</p>
<DescriptionImage src={korbit17} />
<p>
	<span class="font-bold">17.</span> 201 (NFT 200 + 권장 가스비 1) 클레이튼을 매수합니다.
</p>
<DescriptionImage src={korbit18} />
<p>
	<span class="font-bold">18.</span> 사용중인 지갑 (Metamask, Kaikas)를 키고 지갑에
	따라 사진에 나와있는것처럼 주소를 복사합니다.
</p>
<DescriptionImage src={korbit19} />
<p>
	<span class="font-bold">19.</span> 복사한 주소와 전송할 클레이튼 수량을
	입력합니다.
	<br />
	<span class="font-bold text-rose-600">주소를 꼭 다시한번 확인해주세요.</span
	>
</p>
<DescriptionImage src={korbit20} />
<p>
	<span class="font-bold">20.</span> "없습니다"를 입력 후, "출금신청" 버튼을 클릭합니다.
</p>
<p class="mt-10 mb-3 text-xl font-bold">
	🎉거래소 가입, 클레이튼 전송을 완료하셨습니다🎉
</p>
<p>메인화면으로 돌아가 다른 사항들이 준비되어있는지 확인해주세요.</p>
<Hr />
<Button addClass="" onclick={() => push('/')}>메인화면으로</Button>
