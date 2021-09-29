const Sequelize     = require('sequelize');
const usuario       = require('../models').user;
module.exports = {
    create(req, res) {
        return usuario
            .create ({
                email: req.params.email,
                password: req.params.password
            })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    list(_, res) {
        return usuario.findAll({})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    find (req, res) {
        return usuario.findAll({
            where: {
                email: req.params.email,
            }
        })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
};
