const routerAuth = require('express').Router();

const { 
    login
 } = require('../controllers/autho.controllers');

routerAuth.post('/login', login)


module.exports = routerAuth;