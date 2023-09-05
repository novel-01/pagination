const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const trxRoute = require("./transaction.route");
const productRoute = require('./product.route')

module.exports = [authRoute, userRoute, trxRoute, productRoute];
