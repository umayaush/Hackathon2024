
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors()); 

// Create an in-memory SQLite database
const db = new sqlite3.Database(':memory:');

// Read the SQL file and load it into SQLite
fs.readFile("../SQL_Scripts/phrasedb.sql", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading SQL file:", err);
        return;
    }

    // Execute the SQL script to set up the database structure
    db.exec(data, (err) => {
        if (err) {
            console.error("Error executing SQL script:", err);
            return;
        }
        console.log("Database loaded from phrasedb.sql");

        // You can run your queries here, but now you can also handle queries in the routes
    });
});

// Modify the /api/home endpoint to return query results
app.get("/api/home", (req, res) => {
    // Query the database
    db.all("SELECT * FROM CATEGORY", (err, rows) => {
        if (err) {
            console.error("Query error:", err);
            res.status(500).json({ error: "Query failed" });
            return;
        }

        // Send the query result as a JSON response
        res.json({ message: "Query results", data: rows });
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});