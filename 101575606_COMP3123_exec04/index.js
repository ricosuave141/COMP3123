const express = require("express");
const app = express();

//Middleware parse JSON
app.use(express.json());

//static files from the /public folder
app.use(express.static("public"));

//returns plain text
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello World!");
});

//query parameters
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Aaron";
    const lastname = req.query.lastname || "Balayo";
    res.json({ firstname, lastname });
});

//path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

//accepts array users
app.post("/users", (req, res) => {
    const users = Array.isArray(req.body) ? req.body : [];
    res.json(users);
});

//start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});