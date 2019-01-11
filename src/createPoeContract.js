const PoeABI = require('./abi/poe.json')

export const ContractAddress = '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195'

export const createPoeContract = () => new window.web3.eth.Contract(
  PoeABI,
  ContractAddress,
)