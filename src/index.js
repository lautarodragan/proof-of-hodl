require('./attachWeb3')

const { createPoeContract } = require('./createPoeContract')
const { fetchTokenBalance } = require('./etherscan')
const { HolderAddress } = require('./addresses')

const main = async () => {
	const poeContract = createPoeContract()

	window.poeContract = poeContract

	const tokenBalance = await fetchTokenBalance(HolderAddress)
	console.log('tokenBalance', tokenBalance)

}

main().catch(console.error)