const Rating = require("../../models/Rating");
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
    async updatedRating(query) {
        const updatedRating = await Rating.update({ ...query }, { ...updatedObj });
        return updatedRating;
    }
    async deletedRating(query) {
        const deletedRating = await Rating.findByIdAndDelete(req.params.id);
        return deletedRating;
    }
}

module.exports = new RatingRepository();
