const express = require("express");
const path = require("path");

const app = express();

// ✅ Move up two directories from "npm" to reach "UnblockedGames"
const gamesPath = path.join(__dirname, "..", "..", "Games");

// ✅ Serve static files from "Games"
app.use(express.static(gamesPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(gamesPath, "AllTheGames.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
