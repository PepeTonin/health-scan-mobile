import React, {createContext, useState} from 'react'


export const AuthContext = createContext({})

export default function AuthProvider({children}){

    const [usuario, setUsuario] = useState({});
    const [isLogged, setIsLogged] = useState(false);

    return(
        <AuthContext.Provider value={{isLogged, usuario, setUsuario, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    )
}