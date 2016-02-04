var data = require("../data.json");

exports.addFriend = function(req, res){   
	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://i.imgur.com/QLFGr.jpg"
	}
	res.render('add')
	data["friends"].push(newFriend);
	console.log(newFriend);
}