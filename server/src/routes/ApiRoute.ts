
import express, { Router, Response, Request } from "express";

import GoogleClient from "../core";
const router: Router = express.Router();
const googleClient: GoogleClient = new GoogleClient()



router.post("/get", async (req: Request, res: Response) => {
    try {

        if (!req.query['query'] || !req.query['spreedsheetId']) return res.status(400).send("Please provide a query string.")
        const query:string = req.query['query'] as string;
        const spreedsheetId:string = req.query['spreedsheetId'] as string;
        const result = await googleClient.getData(spreedsheetId, query)
        res.setHeader('Content-Type', 'application/json');
        console.log(result["values"])
        res.send(JSON.stringify(result['values']))
    } catch (e) {
        return res.status(500).send('Error')
    }


})

router.post('/remove', async (req: Request, res: Response) => {
    try{
        if (!req.query['query'] || !req.query['spreedsheetId']) return res.status(400).send("Please provide a query string.")
        const query:string = req.query['query'] as string;
        const spreedsheetId:string = req.query['spreedsheetId'] as string;
        console.log(spreedsheetId,query)
        const result = await googleClient.deleteData(spreedsheetId, query)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({"data":JSON.stringify(result['clearedRange'])})
    }catch(e){
        res.status(500).send("Error")
    }
   
})

router.post('/add',async (req : Request,res:Response)=>{
    try{
        if (!req.query['query'] || !req.query['spreedsheetId'] || !req.query['values']) return res.status(400).send("Either Query String or values are missing.")
        const query:string = req.query['query'] as string;
        const spreedsheetId:string = req.query['spreedsheetId'] as string;
        const values:any[] = JSON.parse(req.query['values']as string) as any[];
        console.log(spreedsheetId,query)
        const result = await googleClient.addData(spreedsheetId, query,values)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({"data":result})
    }catch(e){
        res.status(500).send("Error")
    }

})

router.post('/update',async (req: Request, res : Response)=>{
    try{
        if (!req.query['query'] || !req.query['spreedsheetId'] || !req.query['values']) return res.status(400).send("Either Query String or values are missing.")
        const query:string = req.query['query'] as string;
        const spreedsheetId:string = req.query['spreedsheetId'] as string;
        const values:any[] = JSON.parse(req.query['values']as string) as any[];
        console.log(spreedsheetId,query)
        const result = await googleClient.updateData(spreedsheetId, query,values)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({"data":result})
    }catch(e){
        res.status(500).send("Error")
    }
})

export default router;