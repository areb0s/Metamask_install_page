<script lang="ts">
	const params = {
		chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
		chainName: chain.name,
		nativeCurrency: {
			name: chain.nativeCurrency.name,
			symbol: chain.nativeCurrency.symbol, // 2-6 characters long
			decimals: chain.nativeCurrency.decimals,
		},
		rpcUrls: chain.rpc,
		blockExplorerUrls: [
			chain.explorers &&
			chain.explorers.length > 0 &&
			chain.explorers[0].url
				? chain.explorers[0].url
				: chain.infoURL,
		],
	};

	window.web3.eth.getAccounts((error, accounts) => {
		window.ethereum
			.request({
				method: 'wallet_addEthereumChain',
				params: [params, accounts[0]],
			})
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				stores.emitter.emit(
					ERROR,
					error.message ? error.message : error
				);
				console.log(error);
			});
	});
</script>

<main>
	<div>test</div>
</main>

<style>
</style>
