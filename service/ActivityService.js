'use strict';


let sqlDb;

exports.activitiesDbSetup = function(database) {
    sqlDb = database;
    return database.schema.hasTable("Activity").then(exists => {
        if (!exists) {
            //console.log("It doesn't so we create it");
            return database.schema.createTable("Activity", table => {
                //table.increments();
                table.increments("id").primary();
                table.string("title");
                table.integer("IDactivity");
                table.text("description");
                table.text("practical_info");

                // table.foreign("eventId").references("events.id");
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
        .from('Activity')
        .select()
        .where({ IDactivity: id })
        .then(data => {
            return data
        });
};


/**
 * Activities related to a book
 * List of all the activities
 *
 * returns List
 **/
exports.activitiesGET = function() {
    return sqlDb
        .from("Activity")
        .orderBy('Activity.IDactivity')
        .then(data => {
            return data
        });
};


/**
 * Get the event of an activity
 *
 * id Long id of the activity you want the event of
 * returns Event
 **/
exports.activitiesIdEventGET = function(id) {
    return sqlDb
        .from("Event")
        .join('Event_activity', 'Event.IDevent', 'Event_activity.IDevent')
        .join('Activity', 'Activity.IDactivity', 'Event_activity.IDactivity')
        .select("Event.title","Event.IDevent",)
        .where("Activity.IDactivity", id)
        .then(data => {
            return data
        });


};

