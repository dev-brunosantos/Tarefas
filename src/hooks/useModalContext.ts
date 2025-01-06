import { ModalFunctionsContext } from "@/contexts/ModalFunctions"
import { useContext } from "react"

const useModalContext = () => {
    const contexto = useContext(ModalFunctionsContext)
    
    if (!contexto) {
        throw new Error("Não existe nenhum contexto de Modal")
    }

    return contexto
}

export  { useModalContext }