const express = require("express"); // imports the Express library

const app = express(); //creates the server

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("DSA Pattern Recommender API is running 🚀");
});  // defines an API route.

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/*When someone visits:http://localhost:5000
they will see: DSA Pattern Recommender API is running 🚀 */