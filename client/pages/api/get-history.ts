import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await fetch(
      `https://api-sepolia.etherscan.io/api?module=logs&action=getLogs&address=0x0387a50e31b63C27fa9971b7e46248484B4643E1&fromBlock=5976844&toBlock=6976844&page=1&offset=1000&apikey=${process.env.ETHERSCAN_API_KEY}`
    );

    const { result } = await response.json();

    res.status(200).json(result);
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
