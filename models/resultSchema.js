import mongoose from "mongoose";

// Result Model
const resultModel = new mongoose.Schema({
    username: {
        type: String,
    },
    result: {
        type: Array,
        default: [],
    },
    attempts: {
        type: Number,
        default: 0,
    },
    points: {
        type: Number,
        default: 0,
    },
    achieved: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Result", resultModel);
