'use strict';

var utils = require('../utils/writer.js');
var Activity = require('../service/ActivityService');

module.exports.activityIdGET = function activityIdGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Activity.activityIdGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.activitiesGET = function activitiesGET (req, res, next) {

    Activity.activitiesGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.activitiesIdEventGET = function activitiesIdEventGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Activity.activitiesIdEventGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.activitiesIdContactGET = function activitiesIdContactGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Activity.activitiesIdContactGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};