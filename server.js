const express = require("express");
const cors = require("cors");
const donorRoutes = require("./routes/donorRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", donorRoutes);

const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.send("Welcome to Smart Blood Bank API!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));