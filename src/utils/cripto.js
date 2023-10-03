import * as Crypto from "expo-crypto";

export async function sha256(message) {
  return Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    message
  );
}
