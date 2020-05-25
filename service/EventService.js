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
        .from('Event')
        .select()
        .where({ IDevent: id })
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
        .select("Event.title","Event.IDevent","Event.date","Event.start_time","Event.end_time","Event.location")
        .orderBy('Event.date')
        .then(data => {
            return data
        });
};


/**
 * Get the contact of an event
 *
 * id Long id of the event you want the contact of
 * returns Contact
 **/
exports.eventsIdContactGET = function(id) {
    return sqlDb
        .from("Event")
        .join('Person', 'Event.IDperson', 'Person.IDperson')
        .select("Person.full_name", "Person.IDperson")
        .where("Event.IDevent", id)
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
        .from("Event")
        .join('Event_activity', 'Event.IDevent', 'Event_activity.IDevent')
        .join('Activity', 'Activity.IDactivity', 'Event_activity.IDactivity')
        .select("Activity.title","Activity.IDactivity",)
        .where("Event.IDevent", id)
        .then(data => {
            return data
        });


};
