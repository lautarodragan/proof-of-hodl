const ethereumJsUtil = require('ethereumjs-util')

export function verify(address: string, message: string, signature: string) {
  const msgHash = ethereumJsUtil.hashPersonalMessage(Buffer.from(message))

  const signatureParams = ethereumJsUtil.fromRpcSig(signature);
  const publicKey = ethereumJsUtil.ecrecover(
    msgHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  );
  const addressBuffer = ethereumJsUtil.publicToAddress(publicKey);
  const addressVerified = ethereumJsUtil.bufferToHex(addressBuffer);

  return addressVerified === address
}