const express = require("express");
const cors = require("cors");

const app = express();

var blogPostAPI = require("./routes/index.js");

//both index.js and things.js should be in same directory
app.use("/blogpost", blogPostAPI);

app.get("/api/customers", cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "kirlosker" },
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
