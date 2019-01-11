const { ContractAddress } = require('./createPoeContract')

export const fetchTokenBalanceUrl = address =>
  `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${ContractAddress}&address=${address}&tag=latest&apikey=YourApiKeyToken`

export const fetchTokenBalance = async address =>
  fetch(fetchTokenBalanceUrl(address))
    .then(_ => _.json())
    .then(_ => _.result)