var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "db.sqlite";
let db = new sqlite3. Database (DBSOURCE, (err) => {
    if (err) {
        //-Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log("Connected to the sqlite database.");
    }
});

module.exports = db;
