const Web3_1 = require('web3')

const oldWeb3 = window.web3

window.web3 = new Web3_1(oldWeb3.currentProvider)
