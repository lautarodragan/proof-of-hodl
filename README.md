# Proof of ERC-20 Token Ownership

Two steps:

1. Proof of Address Ownership
1. Token Balance Check

## Proof of Address Ownership

The user provides the address, a message and the message signature on account creation or over a specific endpoint.

The signature can be validated using [`web3.eth.accounts.recover`](https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#recover).

This validation only needs to happen once. 

## Token Balance Check

We use the EtherScan API to check the token balance of the account.

Checking balance against the contract costs ether. Alternative is to run own Ethereum node.