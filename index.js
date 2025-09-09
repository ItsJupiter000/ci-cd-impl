require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from ${process.env.APP_NAME || "CI/CD World"}!`);
});

// ✅ Export app without listening
module.exports = app;

// ✅ Start server only if file is run directly (not in tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
