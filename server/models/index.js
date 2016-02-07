var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) {
      db.connection.query('SELECT * FROM messages', function(err, rows) {
        if (err) {
          console.log('An error was raised during select *', err);
        }
        callback(err, rows);
      });
    }, // a function which produces all the messages
    post: function(params, callback) {
        console.log('params',params);
        db.connection.query('insert into messages(body, userName, roomName) values (?, ?, ?)', params, function(err, rows) {
          if (err) {
            console.log('An error was raised', err);
          }
          console.log('Insertion successful', rows);
          callback(rows);
        });
      } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      db.connection.query('SELECT * FROM users', function(err, rows) {
        if (err) {
          console.log('An error was raised', err);
        }
        callback(rows);
      });
    },
    post: function(username, callback) {
      db.connection.query('INSERT into users(userName) values (' + username + ')', function(err, rows) {
        if (err) {
          console.log('An error was raised', err);
        }
        callback(rows);
      });
    }
  }
};
