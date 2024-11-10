
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors()); 
app.use(express.json()); 

// Use a file-based SQLite database instead of an in-memory one
const db = new sqlite3.Database('../SQL_Scripts/phrasedb.sqlite', (err) => {
    if (err) {
        console.error("Error opening database:", err);
    } else {
        console.log("Connected to the phrasedb.sqlite database.");
    }
});

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

// Login endpoint
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password exist in the database
    db.get("SELECT * FROM USERS WHERE user_email = ? AND user_password = ?", [email, password], (err, row) => {
        if (err) {
            res.status(500).json({ message: "Internal server error" });
            return;
        }
        
        if (row) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

// Signup endpoint
app.post("/api/newuser", (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    // Insert new user into the USERS table
    const query = "INSERT INTO USERS (user_email, user_password) VALUES (?, ?)";
    db.run(query, [email, password], function(err) {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Error registering user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });

  // Load phrases endpoint
  app.get("/api/dashboard", (req, res) => {
    db.all("SELECT phrase, phrase_desc FROM PHRASE ORDER BY phrase ASC", (err, rows) => {
        if (err) {
            console.error("Error fetching phrases:", err);
            res.status(500).json({ message: "Internal server error" });
            return;
        }

        // Send phrases as JSON
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});