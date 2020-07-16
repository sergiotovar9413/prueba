const { getConnection } = require("../database");

let idCoupon = 1;

const getProducts = (req, res) => {
    if (req.headers.auth === "admin") {
        const products = getConnection().get("products").value();
        res.json(products);
    } else {
        if (req.headers.auth === "customer") {
            res.status(403).send({
                error: 'autenticacion incorrecta'
            });
        } else {
            res.status(401).send({
                error: 'denegado'
            });
        }
    }
};

const getProduct = (req, res) => {
    if (req.headers.auth === "admin") {
        const product = getConnection().get("products").find({ id: Number(req.params.id) }).value();
        res.json(product);
    } else {
        if (req.headers.auth === "customer") {
            res.status(403).send({
                error: 'autenticacion incorrecta'
            });
        } else {
            res.status(401).send({
                error: 'denegado'
            });
        }
    }
};



const createCoupon = (req, res) => {
    const newCoupon = {
        id: idCoupon,
        name: req.body.name,
        description: req.body.description,
        product_id: req.body.productId,
        valid_since: req.body.valid_since,
        valid_until: req.body.valid_until
    };
    idCoupon = idCoupon + 1;
    getConnection().get("coupon").push(newCoupon).write();
    res.send(newCoupon);
}

module.exports = {
    getProducts,
    getProduct,
    createCoupon
}