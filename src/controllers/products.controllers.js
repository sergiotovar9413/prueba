const { getConnection } = require("../database");


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

module.exports = {
    getProducts
}