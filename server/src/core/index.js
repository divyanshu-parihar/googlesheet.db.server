"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
const googleapis_1 = require("googleapis");
class GoogleClient {
    constructor() {
        this.auth = new google_auth_library_1.GoogleAuth({
            keyFile: 'credentials.json',
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        });
        this.googlesheets = googleapis_1.google.sheets({ version: 'v4', auth: this.auth });
    }
    getData(spreadsheetId, range) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const metaData = yield this.googlesheets.spreadsheets.get({
                    auth: this.auth,
                    spreadsheetId,
                    ranges: ["Sheet1!A:A"]
                });
                return metaData.data;
            }
            catch (err) {
                console.log(err);
                return new Error("Error Occured!");
            }
        });
    }
}
exports.default = GoogleClient;
