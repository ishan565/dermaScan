const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());


app.post("/api/advice", (req, res) => {
  res.json({ advice: "Stay hydrated and apply sunscreen! 💧☀️" });
});


const PORT = 5002;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
