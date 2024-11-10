import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js"
import cors from "cors"
import path from "path";
const app = express();

const _dirname=path.resolve();


dotenv.config({path:"./config/config.env"});
app.use(cors({
    origin: [process.env.FRONT_URL],
    methods:["POST"],
    credentials: true, 
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/message",messageRouter);

app.use(express.static(path.join(_dirname,"/frontnew/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"feontnew","dist","index.html"))
})

dbConnection();
export default app;




