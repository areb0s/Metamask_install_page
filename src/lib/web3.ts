import type { Chain } from '../models';

export const toHex = (num: number): string => {
	return '0x' + num.toString(16);
};

export const connnectWallet = async (ethereum: any): Promise<string[]> => {
	return await ethereum.request({ method: 'eth_requestAccounts' });
};

export const addKlaytnChain = async (ethereum: any, klaytnChain: Chain) => {
	const accounts = await ethereum.request({ method: 'eth_accounts' });
	await ethereum
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
