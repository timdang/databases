var db = require('../db');

module.exports = {
  messages: {
    get: function() {
      console.log('Retriving message from the DB.');
      db.connection.connect();
      db.connection.query('SELECT * FROM messages', function(err, rows) {
        if (err) {
          console.log('An error was raised', err);
        }
        console.log('Retrieved messages');
        return rows;
      });
      db.connection.end();
    }, // a function which produces all the messages
    post: function() {
        console.log('Inserting message in to DB.');
        db.connection.connect(data);
        db.connection.query('insert data TO messages', function(err, rows, fields) {
          if (err) {
            console.log('An error was raised', err);
          }
          console.log('Insertion successful', rows, fields);
        });
        db.connection.end();
      } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {},
    post: function() {}
  }
};
