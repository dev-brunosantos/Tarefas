import { createContext, ReactNode } from "react";

type Dados = { nome: string }
const UsuarioContext = createContext({})

function UsuarioProvider({children}: {children: ReactNode}) {
    return(
        <UsuarioContext.Provider value={{nome: "Bruno"}}>
             {children}
        </UsuarioContext.Provider>
    )
}

export {
    UsuarioContext, 
    UsuarioProvider
}