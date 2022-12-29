console.log("Express App that will provide connect Applications to google sheet")

import GoogleClient from "./core"
import dotenv from 'dotenv'

//configuring the dotenv variables;
dotenv.config()


// perform operations
const googleClient:GoogleClient = new GoogleClient(process.env.GOOGLE_CLIENT_ID as string,process.env.GOOGLE_CLIENT_SECRET as string,process.env.GOOGLE_SHEETS_API_KEY as string)


googleClient.getData('1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc','Class Data!A2:C')