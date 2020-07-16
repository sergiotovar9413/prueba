const { Router } = require("express");
const router = Router();

const {
    getProducts,
    getProduct,
    createCoupon,
    getCoupons
} = require("../controllers/products.controllers")

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/bonos", createCoupon);
router.get("/coupons", getCoupons);
router.get("/coupons/:id", );
router.put("/coupons", );

module.exports = router;