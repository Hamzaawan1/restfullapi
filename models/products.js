var mongoose = require('mongoose');
var products_schema = mongoose.Schema({
    Product_name: String,
    Price: String
});
var product = mongoose.model('Product', products_schema);
module.exports = product;