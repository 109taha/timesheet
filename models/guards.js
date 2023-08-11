const mongoose = require("mongoose");

const guardsSchema = mongoose.Schema({
    created_by: {
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
    categories: {
        type: String,
        require: true,
        enum: ["Commercial", "Construction"]
    },
    type: {
        type: String,
        enum: ["Regular", "Trailer"],
        require: true,
    },
    freeNow: {
        type: Boolean,
        require: true,
        default: true
    },
    note: {
        type: String,
    }
}, { timestamps: true }
)
const Guard = mongoose.model("guard", guardsSchema);

module.exports = Guard