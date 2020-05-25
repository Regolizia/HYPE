'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventIdGET = function eventIdGET (req, res, next) {
    var id = req.swagger.params['id'].value;

    Event.eventIdGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });

};


module.exports.eventsGET = function eventsGET (req, res, next) {
    Event.eventsGET()
        .then(function (response) {

            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.eventsIdContactGET = function eventsIdContactGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Event.eventsIdContactGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.eventsIdActivityGET = function eventsIdActivityGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Event.eventsIdActivityGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

