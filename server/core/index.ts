import { GoogleAuth } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";
/*
    GoogleClient : Custom Class to handle operations with googlesheets
*/
class GoogleClient {
    // private googleClientKey: string;
    // private googleSecretKey: string;
    // private api_key: string;
    private auth = new GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    })
    private googlesheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: this.auth });
    async getData(spreadsheetId: string, range: string): Promise<{}> {

        try {
            // let result:Response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1Mw3Cs0WX7Xa91iqEsQ2uQtV4nmrrag1HFK7Zc7dMhUc?ranges=Sheet1!A1%3AB2&key=[YOUR_API_KEY]', {
            //     headers: {
            //         'Authorization': 'Bearer [YOUR_ACCESS_TOKEN]',
            //         'Accept': 'application/json'
            //     }
            // });
            // result = await result.json()
            // const numRows = result.body ? result.body : 0;
            // console.log(`${numRows} rows retrieved.`);
            // return result;
            const metaData = await this.googlesheets.spreadsheets.get({
                auth: this.auth,
                spreadsheetId,
                ranges:["Sheet1!A:A"]
            })
            return metaData.data;
        } catch (err) {
            // TODO (developer) - Handle exception
            console.log(err)
            return new Error("Error Occured!");
        }

    }
    //update

}

export default GoogleClient;