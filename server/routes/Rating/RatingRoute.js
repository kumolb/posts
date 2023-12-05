const RatingController = require("../../controller/Rating/RatingController");

const route = require("express").Router();
route.get('/', RatingController.getRating);
route.get('/:id', RatingController.getOneRating);
route.post('/', RatingController.saveRating);
route.put('/:id', RatingController.updateRating);
route.delete('/:id', RatingController.deleteRating);

module.exports = route;