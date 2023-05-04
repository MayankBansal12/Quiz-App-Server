import express from "express";
import { config } from "dotenv";
import cors from "cors"
import morgan from "morgan";
import router from "./router/route.js";

const app=express();

// Middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded());
config();


// Routes
app.use("/api",router);

app.get('/',(req,res)=>{
    res.json("Get Request aayi hai!");
})

// App Port
const port=8000 || process.env.PORT;

// Connnecting to database
import connect from "./database/conn.js";
connect().then(()=>{
    // Starting server only when database is connected
    app.listen(port,()=>{
        console.log("Server is running on ",port);
    })
}).catch(err=>{
    console.log("Could not connect to the database",err);
});
