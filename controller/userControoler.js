import { db } from "../model/db.js";


export const getAllUser = async(req, res)=>{
    const data = await db.query("select * from employer");
    res.send(data[0]);
}