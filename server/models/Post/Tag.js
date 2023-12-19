const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    id: {
        type: "String",
        required: true
    }
});

tagsSchema.pre("save", (doc, next) => {
    doc.id = doc._id;
    next()
});

module.exports = mongoose.model("Tags", tagsSchema, "tags");