const ethereumJsUtil = require('ethereumjs-util')

const address = '0xBe7d20A0f75DbcCb82EFe6AE3aF1768E5E83D0B8'

const signedMessage = {
  "address": "0xbe7d20a0f75dbccb82efe6ae3af1768e5e83d0b8",
  "msg": "Proof of POE",
  "sig": "0x5e06a683754daa113774b42a1c3fd1f038b95e82eea918d404bab8d229df4ed06a4f5497aa9969a55aa559b97a48655d99b08c6992134c2d5d65b3becb11cf2b1c",
  "version": "3",
  "signer": "MEW"
}

const prefix = message => "\x19Ethereum Signed Message:\n" + message.length + message

// const msgHash = ethereumJsUtil.hashPersonalMessage(Buffer.from(signedMessage.msg))
const msgHash = ethereumJsUtil.keccak(prefix(signedMessage.msg))

// const signatureBuffer = ethereumJsUtil.toBuffer(signedMessage.sig);
// const signatureParams = ethereumJsUtil.fromRpcSig(signatureBuffer);
const signatureParams = ethereumJsUtil.fromRpcSig(signedMessage.sig);
const publicKey = ethereumJsUtil.ecrecover(
  msgHash,
  signatureParams.v,
  signatureParams.r,
  signatureParams.s
);
const addressBuffer = ethereumJsUtil.publicToAddress(publicKey);
const addressVerified = ethereumJsUtil.bufferToHex(addressBuffer);

console.log(addressVerified)

console.log(addressVerified === address)
console.log(addressVerified === signedMessage.address)