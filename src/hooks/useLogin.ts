import { useContext } from "react"
import { LoginContext } from "@/contexts/LoginContext"

const useLogin = () => {
    const contexto = useContext(LoginContext)
    if(!contexto) throw new Error("Não existe nenhum contexto de LOGIN")
    return contexto
}

export { useLogin }