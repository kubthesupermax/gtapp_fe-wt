const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware for serving static files (CSS, JS)
app.use(express.static("public"));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the front.ejs file
app.get("/", (req, res) => {
  res.render("front"); // This will now look for "front.ejs" in the "views" folder
});

// Handle form submission (POST request)
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Handle the registration logic here
  console.log("Username:", username);
  console.log("Password:", password);
  //  Andrew will probably handle database stuff here

  // Redirect to a success page or send a response
  res.redirect("/");
});
// Wanted to move this to a separate file but trying to simplify for now

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
