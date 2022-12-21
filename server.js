// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create the app object
const app = express();

// MIDDLEWARE
app.use(cors());

// HOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to the Black Parade");
});

// PROJECTS ROUTE
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects)
});

// ABOUT ROUTE
app.get("/about", (req, res) => {
    // send about via JSON
    res.json(about)
});

// declare variable for port number
const PORT = process.env.PORT || 4000;

// LISTENER
app.listen(PORT, () => console.log(`${PORT}`));