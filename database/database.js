var sqlite3 = require('sqlite3').verbose();
var dbMemory = new sqlite3.Database(':memory:');

dbMemory.serialize(function() {

    dbMemory.run('CREATE TABLE Item (name TEXT,cost REAL,price REAL,lastUpdated TEXT,yearMade TEXT,madeBy TEXT,country TEXT,width INTEGER,height INTEGER,diameter INTEGER,weight INTEGER)');

    var stmt = dbMemory.prepare('INSERT INTO item (name) VALUES (?)');
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
});

//dbMemory.close();

function safeId(id) {
    return String(Number(id));
}

exports.queryDb = function(callback) {
    dbMemory.serialize(function() {
        callback(dbMemory);
    });
};

exports.queryRows = function(sql, callback) {
    exports.queryDb(function(db) {
        db.all(sql, function(err, rows) {
            callback(err, rows);
            // we don't want to close db if it's an in-memory db
            //db.close();
        });
    });
};

exports.getItems = function(callback) {
    exports.queryRows(
        'SELECT rowid AS id, name FROM Item',
        function(err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        }
    );
};