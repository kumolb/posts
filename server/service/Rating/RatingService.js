const RatingRepository = require("../../repository/Rating/RatingRepository");
class RatingService {
    async createRating(data) {
        let rating = await RatingRepository.saveRating(data);
        return rating;
    }
    async getRating(data) {
        let query = data.query;
        let option = data.option;
        let rating = await RatingRepository.getRating(query, option);
        return rating;
    }

    async getOneRating(data) {
        return await RatingRepository.getOneRating(data);
    }

    async updateRating(data) {
        return await RatingRepository.updatedRating(data.query, data.option);
    }

    async deleteRating(data) {
        return await RatingRepository.deletedRating(data);
    }

    async ratingCount(query) {
        return await RatingRepository.countRating(query);
    }
}

module.exports = new RatingService();