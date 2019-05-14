import { verify } from './messageVerifier'

const signedMessage = {
  "address": "0xbe7d20a0f75dbccb82efe6ae3af1768e5e83d0b8",
  "msg": "Proof of POE",
  "sig": "0x5e06a683754daa113774b42a1c3fd1f038b95e82eea918d404bab8d229df4ed06a4f5497aa9969a55aa559b97a48655d99b08c6992134c2d5d65b3becb11cf2b1c",
  "version": "3",
  "signer": "MEW"
}

console.log('Is Verified', verify(signedMessage.address, signedMessage.msg, signedMessage.sig))