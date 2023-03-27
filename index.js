import express from "express";
import { getAllUser } from "./controller/userControoler.js";
import { db } from "./model/db.js";


const app = express()

const userRouter = express.Router()
app.use("/user", userRouter)
app.use(express.json())

userRouter.get("/userdata",getAllUser)










app.listen(2020, ()=>console.log("server is running"))