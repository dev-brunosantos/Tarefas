import { createContext, useContext, useState } from "react";

// interface LoginProps {
//     usuario: string | any,
//     senha: string | any,
//     login: (usuario:string, senha:string) => void 
// }

interface LoginProps {
    usuario: string | any,
    setUsuario: React.Dispatch<React.SetStateAction<String | undefined>>,
    senha: string | any,
    setSenha: React.Dispatch<React.SetStateAction<String | undefined>>,
    login: (usuario:string, senha:string) => void 
}

const LoginContext = createContext<LoginProps >({} as LoginProps)

const LoginProvider = ({children}:{children: React.ReactNode}) => {
    
    const [usuario, setUsuario] = useState<String>()
    const [senha, setSenha] = useState<String>()

    const login = (usuario: string, senha: string) => {
        // setUsuario(usuario)
        setSenha(senha)

        alert(`${usuario}----------${senha}`)
    }
    
    return(
        <LoginContext.Provider value={{usuario, setUsuario, senha, setSenha, login}}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }