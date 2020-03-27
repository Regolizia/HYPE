'use strict';


let sqlDb;

exports.activitiesDbSetup = function(database) {
    sqlDb = database;
    return database.schema.hasTable("events").then(exists => {
        if (!exists) {
            //console.log("It doesn't so we create it");
            return database.schema.createTable("events", table => {
                //table.increments();
                table.increments("id").primary();
                table.string("name");
                table.integer("eventId");
                table.text("description");

                table.foreign("eventId").references("events.id");
            });
        }
        else{
            //console.log("table already exists");
        }
    });
};


/**
 * Find activity with the activity's id
 *
 * id Long id of the activity you are searching
 * returns Activity
 **/
exports.activityIdGET = function(id) {
    return sqlDb
        .from('activities')
        .select()
        .where({ id: id })
        .then(data => {
            return data
        });
}


/**
 * Activities related to a book
 * List of all the activities
 *
 * returns List
 **/
exports.activitiesGET = function() {

    return sqlDb("activities")
        .then(data => {
            return data
        });
}


/**
 * Get the event of an activity
 *
 * id Long id of the activity you want the event of
 * returns Event
 **/
exports.activitiesIdEventGET = function(id) {
    return sqlDb
        .from("events")
        .where("id", id)
        .then(data => {
            return data
        });


};

