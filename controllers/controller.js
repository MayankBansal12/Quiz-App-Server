import Result from "../models/resultSchema.js";
import Questions from "../models/questionSchema.js";
import questions, {answers} from "../database/data.js";

// For question routes
export async function getQuestions(req,res){
    try {
        const questions=await Questions.find();
        res.json(questions);
    } catch (error) {
        res.json(error);
    }
}
export async function postQuestions(req,res){
    try {
        Questions.insertMany({questions,answers}).then(()=>{
            res.json("Successfully posted the question");
        })  
    } catch (error) {
        res.json(error);
    }
}
export async function dropQuestions(req,res){
    try {
        Questions.deleteMany().then(()=>{
            res.json("Deleted Questions!");
        })
    } catch (error) {
        res.json(error);
    }
}

// For result routes
export async function getResult(req,res){
    const results=await Result.find();
    res.json(results);
}
export async function storeResult(req,res){
    const { username, result, attempts, points, achieved}=req.body;
    Result.create({ username, result, attempts, points, achieved}).then(()=>{
        if(!username && !result){
            throw new Error("Data not found!");
        }
        res.json("Result stored successfully!");
    }).catch(error=>{
        res.json("Error in storing the result",error);
    });
}
export async function dropResult(req,res){
    await Result.deleteMany();
    res.json("Result deleted successfully!");
}