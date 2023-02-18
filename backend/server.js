const express = require("express");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const multer = require("multer");
const errorHandler = require("./middleware/errorMiddleware");
const cors = require("cors");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to web-server" });
// });

app.use("/images", express.static("Images"));

//Routes
app.use("/api/subContractors", require("./routes/subContractorRoute"));
app.use("/api/plumbing", require("./routes/plumRoute"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.post("/upload", upload.single("image"), (req, res) => {
  res.send(`/images/${path.basename(req.file.path)}`);
});

//Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.brightMagenta.underline);
});
