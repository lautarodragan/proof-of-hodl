# Proof of ERC-20 Token Ownership

Two steps:

1. Proof of Address Ownership
1. Token Balance Check

## Proof of Address Ownership

The user provides the address, a message and the message signature on account creation or over a specific endpoint.

The signature can be validated using [`web3.eth.accounts.recover`](https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#recover).

This validation only needs to happen once. 

## Token Balance Check

Retrieving the balance of an ERC-20 contract for a user can be done in two different ways:
- Running an Ethereum node
- Using a thirdy party API

We use the EtherScan API to check the token balance of the account. 
