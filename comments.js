// Create web server
var express = require('express');
var router = express.Router();
var fs = require('fs');

// Get comments
router.get('/get', function(req, res) {
  console.log("GET COMMENTS");
  var data = fs.readFileSync('comments.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// Post comments
router.post('/post', function(req, res) {
  console.log("POST COMMENTS");
  var comments = req.body;
  console.log(comments);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
});

module.exports = router;

