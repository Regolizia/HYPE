'use strict';


let sqlDb;

exports.contactsDbSetup = function(database) {
    sqlDb = database;
    return database.schema.hasTable("contacts").then(exists => {
        if (!exists) {
            //console.log("It doesn't so we create it");
            return database.schema.createTable("contacts", table => {
                //table.increments();
                table.increments("id").primary();
                table.string("name");
                table.string("surname");
                table.text("info");
            });
        }
        else{
            //console.log("table already exists");
        }
    });
};




/**
 * Finds contacts
 * Get contacts
 *
 * returns List
 **/
exports.contactGET = function() {
    return sqlDb("contacts")
        .then(data => {
            return data
        });
};


/**
 * Find contacts by ID
 *
 * id Long id to get the contact
 * returns Contact
 **/
exports.contactIdGET = function(id) {
    return sqlDb
        .from('contacts')
        .select()
        .where({ id: id })
        .then(data => {
            return data
        });
};


/**
 * Get the events of a contact
 *
 * id Long ID of contact of which to get the events
 * returns List
 **/
exports.contactsIdEventsGET = function(id) {

    return sqlDb
        .from("contacts")
        .join('writes', 'contacts.id', 'writes.contactId')
        .join('events', 'events.id', 'writes.eventId')
        .select("events.id", "name", "location", "description", "date")
        .where("contacts.id", id)
        .then(data => {
            return data
        });
};


