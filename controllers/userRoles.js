'use strict';

var modelUserRole = require('../models/userRoles');

exports.getUserRoles = function(req, res){
	modelUserRole.getUserRoles(function(err, data){
		if(err) return res.json(503, {error:true});
		return res.status(200).json(data);
	});
};