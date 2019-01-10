const Web3_1 = require('web3')

const PoeABI = require('./abi/poe.json')

const ContractAddress = '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195'
const HolderAddress = '0x0733662b90862f6f006ddb5f0e80728f8f60a6c9'
const NonHolderAddress = '0x606929Aa2aBe37e250F0ab7dB986B05493dcf8b4'

const oldWeb3 = window.web3

window.web3 = new Web3_1(oldWeb3.currentProvider)

const main = async () => {
	const poeContract = new window.web3.eth.Contract (
	  PoeABI,
	  ContractAddress,
	)

	console.log(poeContract)

	window.poeContract = poeContract

	const tokenBalance = await fetchTokenBalance(HolderAddress)
	console.log('tokenBalance', tokenBalance)

}

const fetchTokenBalanceUrl = address => 
	`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${ContractAddress}&address=${address}&tag=latest&apikey=YourApiKeyToken`

const fetchTokenBalance = async address =>
	fetch(fetchTokenBalanceUrl(address))
		.then(_ => _.json())
		.then(_ => _.result)


main().catch(console.error)