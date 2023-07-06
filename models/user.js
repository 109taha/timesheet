const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        require: true
    },
    lastname: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email address",
        ],
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    phone: {
        type: String,
        trim: true,
        require: true
    },
}, { timestamps: true }
)

const User = mongoose.model("user", userSchema)

module.exports = User;
