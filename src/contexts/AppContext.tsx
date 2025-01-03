import { ReactNode } from "react"
import { LoginContextProvider } from "./LoginContext";
import { ApiContextProvider } from "./ApiContext";
import { TemaContextProvider } from "./TemaContext";

interface AppContextProps {
    children: ReactNode;
}

export const AppContexts = ({ children }: AppContextProps) => {
    return (
        <TemaContextProvider>
            <LoginContextProvider>
                <ApiContextProvider>
                    {children}
                </ApiContextProvider>
            </LoginContextProvider>
        </TemaContextProvider>
    )
}