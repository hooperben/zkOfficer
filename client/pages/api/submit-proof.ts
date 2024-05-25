// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers, keccak256, verifyMessage } from "ethers";
import { AbiCoder } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { firstName, lastName, hash } = req.body;

    const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string);

    // verify the message
    const recreatedEncodedMessage = AbiCoder.defaultAbiCoder().encode(
      ["string", "string"],
      [firstName, lastName]
    );
    const recreatedMessageHash = keccak256(recreatedEncodedMessage);

    // Recover the address
    const recoveredAddress = verifyMessage(recreatedMessageHash, hash);

    // Compare with the original signer's address
    const signerAddress = await signer.getAddress();

    if (recoveredAddress !== signerAddress) {
      res.status(401).json({ result: false, message: "Invalid signature" });
    }

    // Process a POST request
    res.status(200).json({ result: true, message: "POST request" });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
