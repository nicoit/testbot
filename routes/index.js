/* Controllers */
const UserController = require('../controllers/UserController');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Example project did not give you access to the api web services',
  }));
  app.post('/api/users/create/username/:username/status/:status', UserController.create);
  app.get('/api/users', UserController.list);
  app.get('/api/users/find/username/:username', UserController.find);
  app.get('/users', UserController.list);
  app.get('/', UserController.list);
};
