const { nanoid } = require("nanoid");
async function generateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortId = nanoid(6);

  await URL.create({
    shortId,
    redirectUrl: body.redirectUrl,
    visitHistory: [],
  });

  return res.json({ shortId, redirectUrl: body.redirectUrl });
}
module.exports = { generateShortUrl };
