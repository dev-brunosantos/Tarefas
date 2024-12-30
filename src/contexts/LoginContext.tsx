import { createContext, ReactNode, useContext, useState } from "react";
import { Alert } from "react-native";

interface LoginContextProps {
    children: ReactNode
}

interface UsuarioLogin {
    email: string;
    senha: string;
}

interface LoginProps {
    usuario: UsuarioLogin;
    erro: boolean;
    signIn: (email: string, senha: string) => void;
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

const useLogin = () => {
    const contexto = useContext(LoginContext)
    if(!contexto) throw new Error("Não existe nenhum contexto de LOGIN")
    return contexto
}

export { LoginContext, LoginContextProvider, useLogin }