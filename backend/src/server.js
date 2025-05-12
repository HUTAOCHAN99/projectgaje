const express = require("express");
const app = express();
const PORT = 4000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend API!" });
});

app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
