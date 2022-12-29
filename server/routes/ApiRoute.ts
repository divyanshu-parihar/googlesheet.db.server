import express, { Router,Response,Request } from "express";
import GoogleClient from "../core";
const router:Router = express.Router();
const googleClient: GoogleClient = new GoogleClient(process.env.GOOGLE_CLIENT_ID as string, process.env.GOOGLE_CLIENT_SECRET as string, process.env.GOOGLE_SHEETS_API_KEY as string)



router.get("/",async (req:Request,res:Response)=>{
    const data = await googleClient.getData('1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc', 'Class Data!A2:C')
    // console.log(data)
    res.send(data)
})


export default router;