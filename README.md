# Proof of ERC-20 Token Ownership

Two steps:

1. Proof of Address Ownership
1. Token Balance Check

## Proof of Address Ownership

TBD.

https://ethereum.stackexchange.com/questions/35486/how-to-verify-metamask-account-holder-is-the-real-owner-of-the-address?rq=1
https://web3js.readthedocs.io/en/1.0/web3-eth.html#sign

## Token Balance Check

We use the EtherScan API to check the token balance of the account.

Checking balance against the contract costs ether. Alternative is to run own Ethereum node.