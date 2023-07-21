const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
});

const starton = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers: {
    "x-api-key": "sk_live_d970248c-d073-4c3e-9452-01ab6ffa4185",
  },
});

app.post("/upload", cors(), upload.single("file"), async (req, res) => {
  let data = FormData();
  const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
  data.append("file", blob, { filename: req.file.originalname });
  data.append("isSync", "true");
});
