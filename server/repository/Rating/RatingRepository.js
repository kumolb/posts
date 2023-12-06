const Rating = require("../../models/Rating/Rating");
class RatingRepository {
    async saveRating(data) {
        const newRating = new Rating(data);
        const savedRating = await newRating.save();
        return savedRating;
    }
    async getRating(query) {
        const ratings = await Rating.find(query).lean();
        return ratings;
    }
    async getRating(query) {
        const rating = await Rating.findOne(query).lean();
        return rating;
    }
    async updatedRating(query, updatedObj) {
        const updatedRating = await Rating.update({ ...query }, { ...updatedObj });
        return updatedRating;
    }
    async deletedRating(query) {
        const deletedRating = await Rating.findByIdAndDelete(query);
        return deletedRating;
    }

    async countRating(query) {
        return await Rating.countDocuments(query)
    }
}

module.exports = new RatingRepository();
