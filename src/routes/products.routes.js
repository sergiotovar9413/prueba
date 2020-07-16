const { Router } = require("express");
const router = Router();

const {
    getProducts,
    getProduct
} = require("../controllers/products.controllers")

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/coupons", );
router.get("/coupons", );
router.get("/coupons/:id", );
router.put("/coupons", );

module.exports = router;