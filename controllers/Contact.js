'use strict';

var utils = require('../utils/writer.js');
var Contact = require('../service/ContactService');

module.exports.contactGET = function contactGET (req, res, next) {

    Contact.contactGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.contactIdGET = function contactIdGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Contact.contactIdGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.contactsIdEventsGET = function contactsIdEventsGET (req, res, next) {
    var id = req.swagger.params['id'].value;
    Contact.contactsIdEventsGET(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
