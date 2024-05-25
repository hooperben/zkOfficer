import { ethers, keccak256, verifyMessage } from "ethers";
import { AbiCoder } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  firstName: string;
  lastName: string;
  hash: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { result: boolean; message: string }>
) {
  if (req.method === "GET") {
    const { firstName, lastName } = req.body;

    const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string);
    const encodedMessage = AbiCoder.defaultAbiCoder().encode(
      ["string", "string"],
      [firstName, lastName]
    );

    const messageHash = keccak256(encodedMessage);

    const signedMessage = await signer.signMessage(messageHash);

    return res.status(200).json({ firstName, lastName, hash: signedMessage });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
