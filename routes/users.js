
/* Controllers */
const UserController = require('../controllers/UserController');
/* GET users listing. */

module.exports = (router) => {
  router.get('/api', (req, res) => res.status(200).send({
    message: 'Example project did not give you access to the api web services',
  }));
  //router.post('/api/users/create/username/:username/status/:status', UserController.create);
  router.get('/api/users', UserController.list);
  router.get('/api/users/find/username/:username', UserController.find);
  router.get('/users', UserController.list);
  router.get('/', UserController.list);
}
