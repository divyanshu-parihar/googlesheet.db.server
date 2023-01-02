
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.SUPABASE_URL)
class DbClient {
    // Create a single supabase client for interacting with your database
    private supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_PUBLIC_KEY as string)


    async addToken(sheet_id: string,user_id:string) {
        const { data,error } = await this.supabase
            .from('sheet_tokens')
            .insert([
                { sheet_id ,user_id},
            ]).select()
        if (error) {
            // console.error(error)
            return error;
        }
        // console.log(data)

        return data;

    }
    async removeToken(sheet_id:string) {
        const { error } = await this.supabase
        .from('sheet_tokens')
        .delete()
        .eq('sheet_id', sheet_id)
        if (error) {
            // console.error(error)
            return error;
        }

        return {"data":"TOKEN REMOVED"};
    }

    async getUserTokens(user_id:string){
        const { data,error } = await this.supabase
        .from('sheet_tokens')
        .select()
        .eq('user_id', user_id)
        if (error) {
            // console.error(error)
            return error;
        }

        return data;
    }

}


export default DbClient;