// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // TODO add writing to s3 here
    res.status(200).json({ txHash: "" });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
