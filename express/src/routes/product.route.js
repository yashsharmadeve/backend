const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");
const productController = require("../controllers/product.controller");

router.get("/:id", authMiddleware, productController.getProduct);

module.exports = router;