"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GoogleClient {
    constructor(GoogleClientKey, GoogleSecretKey, ApiKey) {
        this.googleClientKey = GoogleClientKey;
        this.googleSecretKey = GoogleSecretKey;
        this.api_key = ApiKey;
        console.log(this.googleClientKey);
        console.log(this.googleSecretKey);
        console.log(this.api_key);
    }
}
exports.default = GoogleClient;
