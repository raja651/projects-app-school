'use strict';

var schoolsModel = require('../models/schools'),
userRoles = require('../models/schools');

exports.getSchools = function(req, res){
	schoolsModel.getSchools(function(err, data){
		if(err) return res.json(503, {error: true});
		return res.status(200).json(data);
	});
};

exports.getUserRoles = function(req, res){

};