const sqlDbFactory = require("knex");

let { eventsDbSetup } = require("./EventService");
let { contactsDbSetup } = require("./ContactService");
let { activitiesDbSetup } = require("./ActivityService");

let sqlDb = sqlDbFactory({
    client: "pg",
    connection: "postgres://sblrblscxcwgzd:566feadcca87ac4674c9e0104276a3737e2cbab67fa2243e12cb4f54ae0956f9@ec2-54-246-92-116.eu-west-1.compute.amazonaws.com:5432/d82bvo13n4heii?ssl=true",
    //connection: "postgres://postgres:admin@localhost:5432/postgres",
    //connection: process.env.DATABASE_URL,
    ssl: true,
    debug: true
});
//console.log(process.env.DATABASE_URL);


function setupDataLayer() {
    return contactsDbSetup(sqlDb)
        .then(() => eventsDbSetup(sqlDb)
            .then(() => activitiesDbSetup(sqlDb)));
}

module.exports = { database: sqlDb, setupDataLayer };