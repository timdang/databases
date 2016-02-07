var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(err, results) {

        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
        var params = [req.body.body, req.body.userName, req.body.roomName];
        models.messages.post(params, function(err, results) {
          res.json(results);
        });
      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function(req, res) {
      models.users.get(req.body.userName, function(err, results) {
        res.json(results);
      });
    }
  }
};
