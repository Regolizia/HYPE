const sqlDbFactory = require("knex");

let { eventsDbSetup } = require("./EventService");
let { contactsDbSetup } = require("./ContactService");
// let { activitiesDbSetup } = require("./ActivityService");

let sqlDb = sqlDbFactory({
    client: "pg",
    ssl: true,
    debug: true,
    // connection: "postgres://postgres:fiocco@localhost:5432/postgres",
//     // connection: process.env.DATABASE_URL,
//     connection: "postgres://hizffdqgrwsjov:5dc24f8b5da4d4ae5d121828960fb36c6fb213ae0ebaca1354a140a33c1f4892@ec2-54-217-204-34.eu-west-1.compute.amazonaws.com:5432/da3r8keldtnvim",
    connection: "postgres://hizffdqgrwsjov:5dc24f8b5da4d4ae5d121828960fb36c6fb213ae0ebaca1354a140a33c1f4892@ec2-54-217-204-34.eu-west-1.compute.amazonaws.com:5432/da3r8keldtnvim?sslmode=require&ssl=true",
//
// });

    // user: "hizffdqgrwsjov",
    // password: "5dc24f8b5da4d4ae5d121828960fb36c6fb213ae0ebaca1354a140a33c1f4892",
    // database: "da3r8keldtnvim",
    // port: 5432,
    // host: "ec2-54-217-204-34.eu-west-1.compute.amazonaws.com",
    // ssl: true
});



function setupDataLayer() {
    console.log("Setting up data layer");
    return eventsDbSetup(sqlDb)
    .then(() => contactsDbSetup(sqlDb));
    //     .then(() => activitiesDbSetup(sqlDb)));
}

module.exports = { database: sqlDb, setupDataLayer };