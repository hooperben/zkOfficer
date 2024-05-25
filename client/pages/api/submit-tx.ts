// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { JsonRpcProvider, ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import NonSybilERC20Deployment from "../../deployments/sepolia/NonSybilERC20.json";
import { Network } from "ethers";
import { NonSybilERC20 } from "@/typechain-types";

const base64ToUint8Array = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { proof, address, publicInputs } = req.body;

    const formatted = base64ToUint8Array(proof);
    const network = new Network("sepolia", 11155111);
    const provider = new JsonRpcProvider(
      `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      network,
      { staticNetwork: network }
    );
    const signer = new ethers.Wallet(
      process.env.PRIVATE_KEY as string,
      provider
    );

    const nonSybilERC20 = new ethers.Contract(
      NonSybilERC20Deployment.address,
      NonSybilERC20Deployment.abi,
      signer
    ) as unknown as NonSybilERC20;

    const tx = await nonSybilERC20.mint(address, formatted, publicInputs);

    const receipt = await tx.wait();

    if (!receipt) {
      return res
        .status(400)
        .json({ result: false, message: "nothing here sorry" });
    }

    // Process a POST request
    res.status(200).json({ txHash: receipt.hash });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
