const route = require("express").Router();
route.get('/');
route.get('/:id');
// POST a new user
route.post('/');
// PUT/UPDATE a user by ID
route.put('/:id');
// DELETE a user by ID
route.delete('/:id');

module.exports = route;