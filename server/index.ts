console.log("Express App that will provide connect Applications to google sheet")

import GoogleClient from "./core"
import dotenv from 'dotenv'

//configuring the dotenv variables;
dotenv.config()


// perform operations
new GoogleClient(process.env.GOOGLE_CLIENT_ID as string,process.env.GOOGLE_SECRET_KEY as string,process.env.API_KEY as string)