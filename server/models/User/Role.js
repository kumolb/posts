const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: true,
        unique: true,
    },
    permission: {
        type: [{ type: String }], // assuming permission is an array of strings
        default: ["edit", "update", "delete", "add"],
    },
    roleName: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;