const express = require("express");
const colors = require("colors");
const dontenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to web-server" });
});

//Routes
app.use("/api/subContractors", require("./routes/subContractorRoute"));
app.use("/api/plumbing", require("./routes/plumRoute"));

//Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.brightMagenta.underline);
});
