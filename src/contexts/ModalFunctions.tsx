import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProps {
    abrir: boolean,
    finalizada: boolean,
    atualizar: boolean,
    openModal: () => void;
    closeModal: () => void;
    finished: () => void;
    update: () => void;
}

const ModalFunctionsContext = createContext<ModalProps | null>(null)

const ModalFunctionsProvider = ({ children }: { children: ReactNode }) => {

    const [abrir, setAbrir] = useState(false)
    const [finalizada, setFinalizada] = useState(false)
    const [atualizar, setAtualizar] = useState(false)

    const openModal = () => {
        setAbrir(true)
    }

    const closeModal = () => {
        setAbrir(false)
        setAtualizar(false)
    }

    const finished = () => {
        setFinalizada(!finalizada)
    }

    const update = () => {
        setAtualizar(true)
    }

    return (
        <ModalFunctionsContext.Provider value={{
            abrir, atualizar, finalizada,
            openModal, closeModal, finished, update
        }}>
            {children}
        </ModalFunctionsContext.Provider>
    )
}

export { ModalFunctionsContext, ModalFunctionsProvider }
