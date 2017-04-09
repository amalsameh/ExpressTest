var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

//get inventor Listing
router.get('/', function (req, res, next) {
  fs.readFile(path.join(__dirname, '/inventors.json'), 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj);
    res.render('inventors', { title:'Inventors', inventorsdata: obj });
  });
});

module.exports = router;