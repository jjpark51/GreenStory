import {createContext, useState, useEffect} from 'react'
import Axios from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        const res = await Axios.post('/auth/login', inputs);
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await Axios.post('/auth/logout');
        setCurrentUser(null)
    }

    useEffect(() => { // We do this to update localstorage everytime we change the user
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login ,logout}}>
            {children}
        </AuthContext.Provider>
    )
}