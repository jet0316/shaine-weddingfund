var Product = require('../models/product')

var apiController = {
	post: function(req, res){
		console.log(req.body)
		// var newProduct = new Product({
		// 	name: req.body.name,
		// 	price: req.body.price		
		// })

		// newProduct.save(function(err, response){
		// 	res.send(response)
		// })
		// console.log('done')

		// res.send('its working')
	},

	get: function(req, res){
		if(req.params.id){
			Product.find({_id: req.params.id}, function(err, response){
				res.send(response)
			});
		}
		else{
			Product.find(function(err, response){
				res.send(response)
			})
		}
	},

	delete: function(req, res){
		console.log(req.params.id)
		// Product.remove({_id: req.params.id}, function(err, response){
		// 		res.send(response)
		// 	});
	}
};

module.exports = apiController;