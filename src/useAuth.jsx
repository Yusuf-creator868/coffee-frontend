import { useContext, createContext, useState, useEffect, use } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import { login, register, is_authonticated } from "./api";


const AuthChech = createContext()

export const Authenticate = ({ children }) => {


    const [Auth, setAuth] = useState(false)
    const [loading, setloading] = useState(true)
    const nav = useNavigate()
    const [name, setname] = useState(localStorage.getItem("username"))



    const get_authenticated = async () => {
        try {
            const success = await is_authonticated()
            setAuth(success)
        } catch {
            setAuth(false)
        } finally { 
            setloading(false)
        }
    }



const register_auth = async (username, email, password, Cpassword) => {
    if (password == Cpassword) {
        try {
            await register(username, email, password)
        } catch (err) {
            throw err
        }
    }
}

const login_auth = async (username, password) => {
    const success = await login(username, password)
    if (success) {
        setAuth(true)
        setname(localStorage.setItem("username", username))
        nav("/",)
    }
}

useEffect(() => {
    get_authenticated()
}, [window.location.pathname])


return (
    <AuthChech.Provider value={{ register_auth, login_auth, Auth, setAuth, name, setname, loading }}>
        {children}
    </AuthChech.Provider>
)
}

export const useAuth = () => useContext(AuthChech) 