// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { JsonRpcProvider, ethers, keccak256 } from "ethers";
import { AbiCoder } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import RegistryContract from "../../deployments/sepolia/Registry.json";
import { Registry } from "@/typechain-types/Registry";
import { ensurePoseidon, poseidonHash } from "@/utils/poseidon";
import { Network } from "ethers";

type Data =
  | {
      result: boolean;
      message: string;
    }
  | {
      txHash: string;
      leafIndex: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { username, usersHashedSecret } = req.body;

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

    await ensurePoseidon();

    // verify the message
    const encodedMessage = AbiCoder.defaultAbiCoder().encode(
      ["string"],
      [username]
    );

    const messageHash = (
      BigInt(keccak256(encodedMessage)) %
      BigInt(
        "21888242871839275222246405745257275088548364400416034343698204186575808495617"
      )
    ).toString();

    const registryContract = new ethers.Contract(
      RegistryContract.address,
      RegistryContract.abi,
      signer
    ) as unknown as Registry;

    const newLeaf = poseidonHash([messageHash, usersHashedSecret]);

    const abiCoder = new AbiCoder();

    const tx = await registryContract.addLeaf(
      abiCoder.encode(["uint256"], [newLeaf])
    );

    const receipt = await tx.wait();

    if (!receipt) {
      return res
        .status(400)
        .json({ result: false, message: "nothing here sorry" });
    }

    const { logs } = receipt;

    // Process a POST request
    res.status(200).json({
      txHash: receipt.hash,
      // @ts-ignore
      leafIndex: [BigInt(logs[0].topics[1]).toString()],
    });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
