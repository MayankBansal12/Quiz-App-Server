import mongoose from "mongoose";

export default async function(){
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to the database");
}