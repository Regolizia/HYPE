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

// module.exports.booksByGenreGET = function booksByGenreGET (req, res, next) {
//     var genre = req.swagger.params['genre'].value;
//     Book.booksByGenreGET(genre)
//         .then(function (response) {
//             utils.writeJson(res, response);
//         })
//         .catch(function (response) {
//             utils.writeJson(res, response);
//         });
// };

// module.exports.booksByThemeGET = function booksByThemeGET (req, res, next) {
//     var theme = req.swagger.params['theme'].value;
//     Book.booksByThemeGET(theme)
//         .then(function (response) {
//             utils.writeJson(res, response);
//         })
//         .catch(function (response) {
//             utils.writeJson(res, response);
//         });
// };

// module.exports.booksGenresGET = function booksGenresGET (req, res, next) {
//     Book.booksGenresGET()
//         .then(function (response) {
//             utils.writeJson(res, response);
//         })
//         .catch(function (response) {
//             utils.writeJson(res, response);
//         });
// };
//
//
// module.exports.booksThemesGET = function booksThemesGET (req, res, next) {
//     Book.booksThemesGET()
//         .then(function (response) {
//             utils.writeJson(res, response);
//         })
//         .catch(function (response) {
//             utils.writeJson(res, response);
//         });
// };

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

// module.exports.booksIdSimilarGET = function booksIdSimilarGET (req, res, next) {
//     var id = req.swagger.params['id'].value;
//     Book.booksIdSimilarGET(id)
//         .then(function (response) {
//             utils.writeJson(res, response);
//         })
//         .catch(function (response) {
//             utils.writeJson(res, response);
//         });
// };
