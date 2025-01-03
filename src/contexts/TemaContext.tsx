import { Cores } from "@/styles/Cores";
import { createContext, ReactNode, useState } from "react";

interface TemaProps {
    txt: string;
    background: string;
}

interface TemaContextProps { 
    tema: TemaProps;
    alterarTema: (tema: TemaProps) => void;
}

interface TemaProviderProps {
    children: ReactNode;
}

const TemaContext = createContext<TemaContextProps | null>(null)

const TemaContextProvider = ({ children }:TemaProviderProps) => {

    const [tema, setTema] = useState<TemaProps>({
        txt: Cores.claro,
        background: Cores.escuro
    })

    const alterarTema = (tema: TemaProps) => {
        setTema(tema)
    }

    return (
        <TemaContext.Provider value={{ tema, alterarTema }}>
            {children}
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaContextProvider } 