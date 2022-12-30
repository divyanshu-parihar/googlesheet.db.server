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
    async getData(spreadsheetId: string, ranges: string[]): Promise<any> {

        try {
            // const data = await this.googlesheets.spreadsheets.get({
            //     spreadsheetId,
            //     ranges:["Sheet1!A1:B1"]
            // })
            // return data;
            const result = await this.googlesheets.spreadsheets.values.get({
                spreadsheetId,
                range:"main",
              });
              const numRows = result.data.values ? result.data.values.length : 0;
              console.log(`${numRows} rows retrieved.`);
              return result.data;
        } catch (err) {
            // TODO (developer) - Handle exception
            console.log(err)
            return new Error("Error Occured!");
        }

    }
    //update

}

export default GoogleClient;