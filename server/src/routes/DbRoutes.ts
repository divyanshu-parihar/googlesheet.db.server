import { Router } from "express";
import DbClient from "../core/dbclient";

const router = Router();
const dbclient = new DbClient();
router.post('/add', async (req, res) => {
    if (!req.body.params.sheet_id || !req.body.params.user_id) {
        return res.send('Please Provide a sheet id')
    }
    console.log(req.body.params.sheet_id)
    const result = await dbclient.addToken(req.body.params.sheet_id as string, req.body.params.user_id as string)
    console.log('result', result)
    res.status(200).send(result)
})

router.post('/remove', async (req, res) => {
    if (!req.body.params.sheet_id) {
        return res.send('Please Provide a sheet id')
    }
    console.log(req.body.params.sheet_id)
    const result = await dbclient.removeToken(req.body.params.sheet_id as string)
    console.log('result', result)
    res.status(200).send(result)
})

router.post('/getUserSheets', async (req, res) => {
    if (!req.body.params.user_id) {
        return res.send('Please Provide a user id')
    }
    console.log(req.query.user_id)
    const result = await dbclient.getUserTokens(req.body.params.user_id as string)
    console.log('result', result)
    res.status(200).send(result)
})



export default router;