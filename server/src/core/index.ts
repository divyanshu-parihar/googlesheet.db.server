import { GoogleAuth } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";
/** 
    Custom Class to handle operations with googlesheets
    @param none
*/
class GoogleClient {
    private auth = new GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    })
    private googlesheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: this.auth });
    async getData(spreadsheetId: string, ranges: string): Promise<any> {

        try {
            const result = await this.googlesheets.spreadsheets.values.get({
                spreadsheetId,
                range:ranges,
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

    async deleteData(spreadsheetId: string, ranges: string): Promise<any> {

        try {
            const response = (await this.googlesheets.spreadsheets.values.clear({
                spreadsheetId,
                range:ranges,
            }));
            return response.data;
        } catch (err) {
            // TODO (developer) - Handle exception
            console.log(err)
            return new Error("Error Occured!");
        }

    }
    //update
    async addData(spreadsheetId: string, ranges: string,values:any[]): Promise<any> {

        try {
            const response = await this.googlesheets.spreadsheets.values.append({
                spreadsheetId,
                range:ranges,
                valueInputOption:"USER_ENTERED",
                insertDataOption:"INSERT_ROWS",
                requestBody:{
                    values:[values]
                }
            });
            return response.data;
        } catch (err) {
            // TODO (developer) - Handle exception
            console.log(err)
            return new Error("Error Occured!");
        }

    }

    async updateData(spreadsheetId: string, ranges: string,values:any[]): Promise<any> {

        try {
            const response = await this.googlesheets.spreadsheets.values.update({
                spreadsheetId,
                range:ranges,
                valueInputOption:"USER_ENTERED",
                includeValuesInResponse:true,
                requestBody:{
                    values:[values]
                }
            });
            return response.data;
        } catch (err) {
            // TODO (developer) - Handle exception
            console.log(err)
            return new Error("Error Occured!");
        }

    }

}

export default GoogleClient;