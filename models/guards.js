const mongoose = require("mongoose");

const guardsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    ID: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["Regular", "Trailer"],
        require: true,
        trim: true
    },
    note: {
        type: String,
    }
}, { timestemps: true }
)
const Guard = mongoose.model("guard", guardsSchema);

module.exports = Guard