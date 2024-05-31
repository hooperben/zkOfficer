// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import AWS from "aws-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { path } = req.query;

    const params = {
      Bucket: process.env.BUCKET_NAME!,
      Key: `${path}.json`,
      // Body: JSON.stringify(contentBody),
    };

    AWS.config.update({
      region: "ap-southeast-2",
      accessKeyId: process.env.ACCESS_KEY!,
      secretAccessKey: process.env.PRIVATE_ACCESS_KEY!,
    });

    const s3 = new AWS.S3();

    s3.getObject(params, (err: any, data: any) => {
      if (data) {
        console.log(JSON.parse(data.Body?.toString()!));

        return res.status(200).json({ ...JSON.parse(data.Body?.toString()!) });
      }

      if (err) {
        console.log("Error uploading file:", err);
        return res.status(404).json({ result: false });
      }
    });
  } else {
    res.status(404).json({ result: true, message: "nothing here sorry" });
  }
}
