const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const app = express();

// ✅ Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Session to store login state
app.use(session({
    secret: "super_secret_key", // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// ✅ Serve static files from "Games"
const gamesPath = path.join(__dirname, "..", "..", "Games");
app.use(express.static(gamesPath));

// ✅ Send the main HTML file
app.get("/", (req, res) => {
    if (req.session.loggedIn) {
        res.sendFile(path.join(gamesPath, "AllTheGames.html"));
    } else {
        res.sendFile(path.join(gamesPath, "password.html"));
    }
});

// ✅ Secure password (hashed)
const storedHashedPassword = bcrypt.hashSync("game123", 10);  // Change "game123" to your actual password

// ✅ API route to check password
app.post("/check-password", (req, res) => {
    const { password } = req.body;

    if (bcrypt.compareSync(password, storedHashedPassword)) {
        req.session.loggedIn = true;
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
