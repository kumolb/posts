const mongoose = require('mongoose');
// let post = {
//     date: 'String',
//     lastDate: 'String',
//     title: 'Demo title',
//     key: [],
//     details: '',
//     orgId: 'id',
//     userId: 'id',
//     minExperience: 1,
//     maxExperience: 2,
//     experienceUnit: 'Year',
// }

const postSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    lastDate: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    key: {
        type: Array,
    },
    details: {
        type: String,
        required: true,
    },
    orgId: {
        type: String
    },
    orgName: {
        type: String
    },
    author: {
        type: String
    },
    minExperience: {
        type: Number,
        default: true,
    },
    maxExperience: {
        type: Number,
        default: true,
    },
    experienceUnit: {
        type: String
    },
    author: {
        type: String,
        required: true,
    },
    pinned: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number
    },
    id: {
        type: String,
        required: true,
    },
    responsiblilities: {
        type: [String],
        required: true
    },
    benifits: {
        type: [String],
        required: true
    },
    aboutUs: {
        type: String
    },
    positionSummary: {
        type: String,
        required: true
    },
    vacancy: {
        type: Number,
        required: true
    },
    qualifications: {
        type: {
            experience: {
                type: [String]
            },
            additional: {
                type: [String]
            },
            requiredSkills: {
                type: [String],
                required: true
            }
        }
    },
    approved: {
        type: Boolean,
        default: true
    },
    viewed: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "active"
    },
    image: {
        type: [String],
        default: []
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;