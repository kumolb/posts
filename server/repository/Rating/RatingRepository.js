const Rating = require("../../models/Rating/Rating");
class RatingRepository {
    async saveRating(data) {
        const newRating = new Rating(data);
        newRating.id = newRating._id;
        const savedRating = await newRating.save();
        return savedRating;
    }
    async getOneRating(query) {
        let select = "-__v -_id";
        const rating = await Rating.findOne(query).select(select).lean();
        return rating;
    }
    async getRating(query, option) {
        let page = option?.page;
        let limit = option?.limit;
        let select = "-__v -_id";
        const ratings = page && limit ? await Rating.find(query).skip(limit * (page - 1)).limit(limit).select(select).lean() : await Rating.find(query).select(select).lean();
        return ratings;
    }
    async updatedRating(query, updatedObj) {
        const updatedRating = await Rating.updateMany({ ...query }, { ...updatedObj });
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
