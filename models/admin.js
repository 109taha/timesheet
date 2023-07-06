const mongoose = require("mongoose");

const adminScheema = mongoose.Schema(
    {
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
        superAdmin: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true },
)
const Admin = mongoose.model("admin", adminScheema);

module.exports = Admin;