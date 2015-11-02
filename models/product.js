var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name 		: {type : String, default : 'No Name'},
	price       : {type : Number},
	song        : String
});

var Product = mongoose.model('products', productSchema);

module.exports = Product;