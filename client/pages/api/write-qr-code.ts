// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import AWS from "aws-sdk";

function generateRandomString(length: number = 32): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

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
    const { proof, publicInputs } = req.body;

    AWS.config.update({
      region: "ap-southeast-2",
      accessKeyId: process.env.ACCESS_KEY!,
      secretAccessKey: process.env.PRIVATE_ACCESS_KEY!,
    });

    const s3 = new AWS.S3();

    const contentBody = {
      proof: proof,
      publicInputs,
    };

    const path = generateRandomString();

    const params = {
      Bucket: process.env.BUCKET_NAME!,
      Key: `${path}.json`,
      Body: JSON.stringify(contentBody),
    };

    s3.upload(params, (err, data) => {
      if (data) {
        // console.log(JSON.parse(data.Body?.toString()!));
        return res.status(200).json({ path });
      }

      if (err) {
        console.log("Error uploading file:", err);
        return res.status(400).json({ result: false });
      }
    });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
