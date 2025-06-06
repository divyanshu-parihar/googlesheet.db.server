console.log("Express App that will provide connect Applications to google sheet")



import dotenv from 'dotenv'
import express, { Express } from "express"
import cors from 'cors'



// import GoogleClient from "./core"
import { ApiRoute, DbRouter } from './routes'


dotenv.config()

const app: Express = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
app.use(express.raw())
app.use('/',ApiRoute)
app.use('/db',DbRouter)

app.listen(8080,()=>console.log('server started at http://localhost:8080'));



// perform operations
// const googleClient: GoogleClient = new GoogleClient(process.env.GOOGLE_CLIENT_ID as string, process.env.GOOGLE_CLIENT_SECRET as string, process.env.GOOGLE_SHEETS_API_KEY as string)

// async function main(){
//     const data = await googleClient.getData('1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc', 'Class Data!A2:C')
//     console.log(data)
// }


// main();






