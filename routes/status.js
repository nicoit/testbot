var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('status', req);
});

router.post('/', function(req, res, next) {

    res.render('status', req);
});

module.exports = router;
