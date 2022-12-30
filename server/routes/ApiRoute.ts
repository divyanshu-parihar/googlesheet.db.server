import express, { Router,Response,Request } from "express";
import GoogleClient from "../core";
const router:Router = express.Router();
const googleClient: GoogleClient = new GoogleClient()



router.get("/",async (req:Request,res:Response)=>{
    const data = await googleClient.getData('1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc', 'Class Data!A2:C')
    res.send(data)
})


export default router;