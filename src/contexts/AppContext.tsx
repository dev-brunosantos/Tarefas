import { ReactNode } from "react"
import { LoginContextProvider } from "./LoginContext";
import { ApiContextProvider } from "./ApiContext";

interface AppContextProps {
    children: ReactNode;
}

export const AppContexts = ({ children }: AppContextProps) => {
    return (
        <LoginContextProvider>
            <ApiContextProvider>
                {children}
            </ApiContextProvider>
        </LoginContextProvider>
    )
}