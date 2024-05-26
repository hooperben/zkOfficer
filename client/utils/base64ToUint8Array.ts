export const base64ToUint8Array = (base64: string): Uint8Array => {
  let binaryString: string;

  binaryString = Buffer.from(base64, "base64").toString("binary");

  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
};
