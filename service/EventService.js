'use strict';

let sqlDb;

exports.eventsDbSetup = function(database) {
    sqlDb = database;
    console.log("name: " + database.name);
    // return database.schema.hasTable("events").then(exists => { CHANGED
    return sqlDb.schema.hasTable("Event").then(exists => {
        if (!exists) {
            console.log("Table doesn't exist so we create it");
            return database.schema.createTable("Event", table => {
                //table.increments();
                table.increments("id").primary();
                table.string("title");
                table.integer("IDevent");
                table.date("date");
                table.time("start_time");
                table.time("end_time");
                table.string("location");
                table.text("description");

                // table.foreign("authorId").references("authors.id");
                // table.foreign("event").references("events.id");

            });
        }
        else{
            console.log("Table already exists");
        }
    });
};



/**
 * Find event with the event's id
 *
 * id Long id of the event you are searching
 * returns Event
 **/
exports.eventIdGET = function(id) {
    return sqlDb
        .from('events')
        .select()
        .where({ id: id })
        .then(data => {
            return data
        });
};





/**
 * Events scheduled
 * List of events scheduled
 *
 * returns List
 **/
exports.eventsGET = function() {
    return sqlDb
        .from("Event")
        .orderBy('Event.date')
        .then(data => {
            return data
        });
};


//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = [ {
//   "id" : 0,
//   "name" : "How to create a poem",
//   "date" : "2020-07-21",
//   "location" : "Honolulu",
//   "description" : "Expressing your thoughts"
// }, {
//   "id" : 0,
//   "name" : "How to create a poem",
//   "date" : "2020-07-21",
//   "location" : "Honolulu",
//   "description" : "Expressing your thoughts"
// } ];
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


/**
 * Get the author of a book
 *
 * id Long id of the book you want the author of
 * returns Author
 **/
exports.eventsIdContactGET = function(id) {

    //needed for multiple authors
    return sqlDb
        .from("events")
        .orderBy('contacts.id')
        .join('writes', 'events.id', 'writes.bookId')
        .join('events', 'events.id', 'writes.authorId')
        .select("events.id", "name", "surname", "biography")
        .where("events.id", id)
        .then(data => {
            return data
        });

};



/**
 * Get the activity of an event
 *
 * id Long id of the event you want the activity of
 * returns Activity
 **/
exports.eventsIdActivityGET = function(id) {
    return sqlDb
        .from("events")
        .join('presents', 'events.id', 'presents.eventId')
        .join('activities', 'activities.id', 'presents.activityId')
        .select("activities.id", "name", "activities.bookId", "activities.date", "location", "activities.description")
        .where("events.id", id)
        .then(data => {
            return data
        });


};


// /**
//  * Get similar books to the chosen one
//  *
//  * id Long id of the book you want the similars of
//  * returns Book
//  **/
// exports.booksIdSimilarGET = function(id) {
//
//     return sqlDb
//         .from("books")
//         .orderBy('id')
//         .where({"id" : id})
//         .select("genre")
//         .then(data => {
//             console.log("genre is: " + data[0].genre);
//             return sqlDb
//                 .from("books")
//                 .select()
//                 .where({"genre" : data[0].genre})
//                 .whereNot({"id" : id})
//                 .then(x => {return x})
//         })
//
//
// };



// /**
//  * Get books with a given genre
//  *
//  * genre Long genre of the book you want
//  * returns Book
//  **/
// exports.booksByGenreGET = function(genre) {
//     return sqlDb("books")
//         .where({"genre" : genre})
//         .then(data => {
//             return data
//         });
// };
//
//
// /**
//  * Get books with a given theme
//  *
//  * theme Long theme of the book you want
//  * returns Book
//  **/
// exports.booksByThemeGET = function(theme) {
//     return sqlDb("books")
//         .where({"theme" : theme})
//         .then(data => {
//             return data
//         });
// };



// /**
//  * Get all the themes that are present
//  *
//  * id Long all book themes
//  * no response value expected for this operation
//  **/
// exports.booksThemesGET = function() {
//     return sqlDb("books")
//         .distinct("theme")
//         .then(data => {
//             return data
//         });
// };


// /**
//  * Get all the genres that are present
//  *
//  * id Long all book genres
//  * no response value expected for this operation
//  **/
// exports.booksGenresGET = function() {
//     return sqlDb("books")
//         .distinct("genre")
//         .then(data => {
//             return data;
//         });
// };