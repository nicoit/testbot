var express = require('express');
var router = express.Router();
var db = require('../databases/main.js')

/* GET home page. */
router.post('/', function(req, res, next) {
    db.serialize(function () {
        db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)')
        var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

        //for (var i = 0; i < 10; i++) {
            stmt.run(req.toString())
        //}
        stmt.finalize()
    })
    console.log('llego: '+ JSON.stringify(req.body))
    console.log(req.hostname +
        ' ' +
        req.method +
        ' ' +
        req.path +
        ' ' +
        Object.keys(req.query).length + ' ' +Object.keys(req.query).toString() +
        ' ' +
        Object.keys(req.body).length + ' ' + Object.keys(req.body).toString())
    res.render('demo-reply', { title: 'Express' });
});

module.exports = router;
