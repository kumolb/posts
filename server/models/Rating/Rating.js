let ratings = [
    {
        userId: '1',
        rating: 5,
        comment: 'good',
        show: true,
        reply: '21',
        id: '1',
        orgId: '1',
    },
    {
        userId: '1',
        rating: 4,
        comment: 'good',
        show: true,
        reply: '21',
        id: '1',
        orgId: '1',
    },
    {
        userId: '1',
        rating: 4,
        comment: 'good',
        show: true,
        reply: '21',
        id: '1',
        orgId: '1',
    },
];

let ratingSchema = () => {
    const mongoose = require('mongoose');

    const ratingSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            default: true,
        },
        reply: {
            type: String,
        },
        id: {
            type: String,
            required: true,
        },
        orgId: {
            type: String,
            required: true,
        },
    });

    const Rating = mongoose.model('Rating', ratingSchema);

    module.exports = Rating;

    db.createCollection('ratings', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['userId', 'rating', 'comment', 'show', 'reply', 'id'],
                properties: {
                    userId: {
                        bsonType: 'string',
                        description: 'must be a string',
                    },
                    rating: {
                        bsonType: 'int',
                        minimum: 1,
                        maximum: 5,
                        description: 'must be an integer between 1 and 5',
                    },
                    comment: {
                        bsonType: 'string',
                        description: 'must be a string',
                    },
                    show: {
                        bsonType: 'bool',
                        description: 'must be a boolean',
                    },
                    reply: {
                        bsonType: 'string',
                        description: 'must be a string',
                    },
                    id: {
                        bsonType: 'string',
                        description: 'must be a string',
                    },
                },
            },
        },
    });
};

let totalRating = 0,
    total = 0;
ratings.map((r) => {
    total += 1;
    totalRating += r.rating;
});

let rating = +(totalRating / total).toFixed(1);
console.log(rating);
