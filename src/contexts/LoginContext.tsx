import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";
import { LoginProps, UsuarioLogin } from "@/interfaces/ILogin";

interface LoginContextProps {
    children: ReactNode
}

const LoginContext = createContext<LoginProps | null>(null)

const LoginContextProvider = ({ children }: LoginContextProps) => {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        email: "", senha: ""
    })

    const [erro, setErro] = useState(false)


    const signIn = (email: string, senha: string) => {
        if (email.trim() === "" || senha.trim() === "") {
            setErro(true)
            return Alert.alert("Todos os campos devem ser preenchidos")
        }

        setErro(false)
        setUsuario({ email, senha })
        
        return Alert.alert(`${email} -- ${senha}`)
    }

    return (
        <LoginContext.Provider value={{ usuario, signIn, erro }}>
            {children}
        </LoginContext.Provider>
    )
}



export { LoginContext, LoginContextProvider }