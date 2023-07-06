const mongoose = require("mongoose");

const guardsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "admin"
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    employee_ID: {
        type: String,
        require: true,
        unique: true
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