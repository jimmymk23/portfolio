// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { message } = req.body;
  const webhookUrl = process.env.TEAMS_WEBHOOK_URL;

  const payload = {
    text: message,
  };

  if (!webhookUrl) {
    console.log("Webhook URL is not defined");
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, error: "Failed to send message" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
}
