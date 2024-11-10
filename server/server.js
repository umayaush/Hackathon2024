
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors()); 
app.use(express.json()); 

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

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
  
    // SQL query to find the user by email and check the password
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }
      if (!row || row.password !== password) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
      return res.json({ success: true, message: "Login successful" });
    });
  });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});