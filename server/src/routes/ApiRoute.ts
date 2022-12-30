
import express, { Router,Response,Request } from "express";

import GoogleClient from "../core";
const router:Router = express.Router();
const googleClient: GoogleClient = new GoogleClient()



router.get("/get",async (req:Request,res:Response)=>{
    const result = await googleClient.getData('1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc', ['Sheet1!A2:C'])
    res.setHeader('Content-Type', 'application/json');
    console.log(result["values"])
    res.send(JSON.stringify(result['values']))
})


// router.post('/remove',async (req:Request,res:Response)=>{
//     // do removing
//     // res.send(result)
// })

// router.post('/add',async (req : Request,res:Response)=>{
//     // add stuff to googlesheet

// })

// router.post('/update',async (req: Request, res : Response)=>{
//     // changle value in google sheet
// })

export default router;