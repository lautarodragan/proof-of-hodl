import { bufferToHex, ecrecover, fromRpcSig, hashPersonalMessage, publicToAddress } from 'ethereumjs-util'

export function verify(address: string, message: string, signature: string) {
  const msgHash = hashPersonalMessage(Buffer.from(message))

  const signatureParams = fromRpcSig(signature);
  const publicKey = ecrecover(
    msgHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  );
  const addressBuffer = publicToAddress(publicKey);
  const addressVerified = bufferToHex(addressBuffer);

  return addressVerified === address
}