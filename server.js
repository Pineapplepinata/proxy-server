const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const request = require("request");
=======
const fetch = require("node-fetch");
>>>>>>> f1bac593cc38c0db60f441e8c814e4fa86c0d703

const app = express();
app.use(cors());

<<<<<<< HEAD
app.get("/proxy", (req, res) => {
=======
app.get("/proxy", async (req, res) => {
>>>>>>> f1bac593cc38c0db60f441e8c814e4fa86c0d703
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("Error: URL is required.");
    }
<<<<<<< HEAD

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
=======
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
>>>>>>> f1bac593cc38c0db60f441e8c814e4fa86c0d703
