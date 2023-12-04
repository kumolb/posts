const route = require("express").Router();
route.get('/');
route.get('/:id');
route.post('/');
route.put('/:id');
route.delete('/:id');

module.exports = route;