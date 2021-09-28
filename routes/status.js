var express = require('express');
var router = express.Router();
var db = require('../databases/main.js')
const util = require('util')

/* GET home page. */
router.get('/', function(req, res, next) {
    var results = {
        users: [],
        title: 'Users'
    }
    db.each("SELECT * FROM user", function(err, row) {
        //console.log(Object.keys(row).toString());
        results.users.push(row);
        console.log(util.inspect(row, {showHidden: false, depth: null, colors: true}))
    });
    res.render('status', results);
});

router.post('/', function(req, res, next) {

    res.render('status', req);
});

module.exports = router;
