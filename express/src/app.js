const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(cors());
app.use(express.json());

// Route Grouping
app.use("/api/users", userRoutes);

app.use("/api/product/yash", ()=>{ // run on custom error
    throw new Error("This is a custom error");
}); // - if we comment the above and use this then error middleware will run

app.use("/api/product", productRoutes);

app.use((req,res,next)=> { // run on route issue
    res.status(404).json({message: "Route not found"});
})

app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message
  });
});

app.get("/", async (req, res) => { // async error handling
  throw new Error("Async error");
});

module.exports = app;