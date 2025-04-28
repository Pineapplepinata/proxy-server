const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("Error: URL is required.");
    }
    try {
        const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        const body = await response.text();
        res.send(body);
    } catch (error) {
        res.status(500).send("Error fetching URL.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy running on http://localhost:${PORT}`);
});
