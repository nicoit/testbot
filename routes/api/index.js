var express = require('express');
var router = express.Router();
/* Controllers */
const UserController = require('../../controllers/UserController');
/* GET users listing. */
  router.get('/', (req, res) => res.status(404).send({
    message: 'Que api buscas?',
  }));
  router.post('/users', UserController.create);
  router.get('/users', UserController.list);
  router.get('/users/:userid', UserController.find);

module.exports = router;
