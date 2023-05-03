import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors"
import morgan from "morgan";

const port=8000 || process.env.PORT;
const app=express();

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded());
config();

// Routes

app.get('/',(req,res)=>{
    res.json("Get Request aayi hai!");
})
app.listen(port,()=>{
    console.log("Server is running on ",port);
})