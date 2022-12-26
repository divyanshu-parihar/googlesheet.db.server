class GoogleClient{
    private googleClientKey:string;
    private googleSecretKey:string;
    private api_key:string;
    constructor(GoogleClientKey:string,GoogleSecretKey:string,ApiKey:string){
        this.googleClientKey = GoogleClientKey;
        this.googleSecretKey = GoogleSecretKey;
        this.api_key = ApiKey;

        console.log(this.googleClientKey)
        console.log(this.googleSecretKey)
        console.log(this.api_key)
    }


    // methods to perform tasks on the database;
    //insert
    //delete
    //query
    //update

}

export default GoogleClient;