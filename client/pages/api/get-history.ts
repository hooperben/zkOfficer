import type { NextApiRequest, NextApiResponse } from "next";

import Registry from "../../deployments/sepolia/Registry.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await fetch(
      `https://api-sepolia.etherscan.io/api?module=logs&action=getLogs&address=${
        Registry.address
      }&fromBlock=${Registry.receipt.blockNumber}&toBlock=${
        Registry.receipt.blockNumber + 10000
      }&page=1&offset=1000&apikey=${process.env.ETHERSCAN_API_KEY}`
    );

    const { result } = await response.json();

    res.status(200).json(result);
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
