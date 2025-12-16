export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK;
  if (!webhookUrl) return res.status(500).json({ error: 'Webhook URL missing' });

  // CAPTURE THE CONTENT SENT FROM FRONTEND
  // If no content is sent, fallback to "Someone said YES!"
  const message = req.body.content || "Someone said YES! ❤️";

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: message, // Now sending the dynamic message with the name
        username: "Valentine Bot"
      }),
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Server Error' });
  }
}
