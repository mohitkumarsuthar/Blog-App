import express from "express";
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";

dotenv.config({
    path:".env"
})
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000

databaseConnection();

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOptions));

// api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/tweet", tweetRoute);
 


app.listen(PORT, console.log(`server has started in ${PORT} port`))