import mongoose from "mongoose";

// Question Model
const questionsModel=new mongoose.Schema({
    questions: {
        type: Array,
        default: []
    },
    answers: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Question",questionsModel);