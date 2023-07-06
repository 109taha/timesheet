const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    email: {
        type: String, trim: true, require: true, unique: true, lowercase: true, match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email address",
        ],
    },
    role: { type: String, require: true, trim: true },
    contact_Number: { type: Number, require: true, trim: true }
}, { timestamps: true })

const locationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "admin"
    },
    locationName: {
        type: String,
        require: true,
        trim: true,
    },
    address: {
        type: String,
        require: true,
        trim: true,
    },
    timeZone: {
        type: String,
        require: true,
        trim: true,
    },
    coverageTime: {
        type: String,
        require: true,
        trim: true,
    },
    clientDetail: { type: clientSchema, require: true },
    locatedWhere: {
        type: String,
        require: true,
        enum: ["Los Angeles A", "Los Angeles B", "North", "Mendota", "San Diego"]
    },
    locatedType: {
        type: String,
        require: true,
        enum: ["Commercial", "Construction"]
    },
    site: {
        type: String,
        require: true,
        enum: ["Monitoring", "NON-Monitoring"]
    },
    stratingDate: {
        type: String,
        require: true,
    },
    endingDate: {
        type: String,
        require: true,
    },
    note: {
        type: String,
    }

}, { timestamps: true })

const Location = mongoose.model("location", locationSchema)

module.exports = Location;