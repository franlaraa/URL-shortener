const express = require("express");

const router = express.Router();
const {} = require("../controllers/url");

router.post("/url", generateShortUrl);

router.get("/url/:shortId", (req, res) => {});

router.get("/url/:shortId/stats", (req, res) => {});

module.exports = router;
