import React, { useContext, useState, useEffect} from "react";
import { supabase } from "../../supabaseClient";



const AuthContext = React.createContext(null);


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [session,setSession] = useState()

    async function login() {
        return await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo:'http://localhost:3000/dashboard',
                scopes:'https://www.googleapis.com/auth/spreadsheets'
            }
          })
    }
    async function getSession(){
        let result = await supabase.auth.getSession();
        console.log(result.data)
        return result.data;
    }

    async function logout() {
        let {error} = await supabase.auth.signOut()
        console.log(error)
        return;
    }

    useEffect(() => {
        (async()=>{
            const {data,error} = await supabase.auth.getSession();
            setSession(data)
            setLoading(false)
        })();
        
        const { data: listener } = supabase.auth.onAuthStateChange((event, s) => {
            console.log(event,s)
            setSession(s)
            setLoading(false)
            console.log(session)
        })

        return () => {
            listener.subscription.unsubscribe();
        }
    }, [])

    const value = {
        supabase,
        session,
        getSession,
        login: (data) => login(data),
        // login: (data) => login(data),
        logout: (data) => logout(data),
    }
    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}