let user = [
    {
        id: '1',
        name: 'Pream',
        phone: '01780232384',
        password: 'password',
        experience: [
            {
                orgName: 'org name',
                orgId: 'org id',
                from: 'String',
                to: 'String',
                position: 'Position',
                stillWorking: true,
            },
        ],
        lookingForJob: true,
        employee: true,
        roleId: 'id',
        orgId: 'orgid',
    },
];

const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: true,
    },
    orgId: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
    },
    position: {
        type: String,
        required: true,
    },
    stillWorking: {
        type: Boolean,
        default: true,
    },
});

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
    },
    experience: [experienceSchema],
    lookingForJob: {
        type: Boolean,
        default: true,
    },
    employee: {
        type: Boolean,
        default: true,
    },
    roleId: {
        type: String,
        required: true,
    },
    orgId: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;