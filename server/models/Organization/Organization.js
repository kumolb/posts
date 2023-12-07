const mongoose = require('mongoose');

const workingDaySchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    },
    offday: {
        type: Boolean,
        default: false,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
});

const organizationSchema = new mongoose.Schema({
    userName: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    employees: {
        type: Number,
        required: true,
    },
    foundedYear: {
        type: Number,
        required: true,
    },
    CEO: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    hr: {
        type: String,
        required: true,
    },
    workingDays: [workingDaySchema],
    author: {
        type: String,
        required: true
    }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;