const {addProducts, getProducts} = require("../controllers/product.controller");
const router = require('express').Router();

router.post('/products', addProducts);
router.get('/products', getProducts)

module.exports = router;