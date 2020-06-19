const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('products');
const bcryptjs = require ('bcryptjs');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
		create: function (req, res){

			return res.render ('users/register');
		},

		store: function (req, res){

			delete req.body.retype
			let user = {
				username: req.body.username,
				email:req.body.email,
				password: req.body.password,
				image: "???",
				// ...req.body,
			}
			return res.send (user);
		},
}
module.exports = controller;
