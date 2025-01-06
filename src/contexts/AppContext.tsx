import { ReactNode } from "react"
import { LoginContextProvider } from "./LoginContext";
import { ApiContextProvider } from "./ApiContext";
import { TemaContextProvider } from "./TemaContext";
import { ModalFunctionsProvider } from "./ModalFunctions";

interface AppContextProps {
    children: ReactNode;
}

export const AppContexts = ({ children }: AppContextProps) => {
    return (
        <TemaContextProvider>
            <LoginContextProvider>
                <ModalFunctionsProvider>
                    <ApiContextProvider>
                        {children}
                    </ApiContextProvider>
                </ModalFunctionsProvider>
            </LoginContextProvider>
        </TemaContextProvider>
    )
}