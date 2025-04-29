const express = require("express");
const cors = require("cors");
const request = require("request");

const app = express();
app.use(cors());

app.get("/proxy", (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("Error: URL is required.");
    }

    request(
        { url, headers: { "User-Agent": "Mozilla/5.0" } },
        (error, response, body) => {
            if (error) {
                return res.status(500).send("Error fetching URL.");
            }
            res.send(body);
        }
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on http://localhost:${PORT}`));
