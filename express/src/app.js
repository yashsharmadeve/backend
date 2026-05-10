const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(cors());
app.use(express.json());

// Route Grouping
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);

module.exports = app;