import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../config/axios";

interface ProviderProps {
    children: ReactNode;
}

interface Tarefa {
    id: string;
    tarefa: string;
    dtCriacao: Date;
    dtAtualizacao: Date;
}

interface ApiContextProps {
    tarefas: Tarefa[];
    cadastrar: (tarefa: string) => void;
    listar: () => void;
}

const ApiContext = createContext<ApiContextProps | null>(null)

const ApiContextProvider = ({ children }:ProviderProps) => {

    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    const cadastrar = async (tarefa: string) => {
        try {
            const dados = {
                tarefa
            }
            const novaTarefa = await api.post('/tarefas', dados)
            const mensagem = novaTarefa.data
            alert(mensagem.message)
        } catch (error) {
            console.log(error)
        }
    }

    const listar = async () => {
        try {
            const response = await api.get('/tarefas')
            setTarefas(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ApiContext.Provider value={{ tarefas, cadastrar, listar }}>
            { children }
        </ApiContext.Provider>
    )
}

const useApiContext = () => {
    const contexto = useContext(ApiContext)
    if(!contexto) throw new Error("Não existe nenhum contexto de API")
    return contexto
}

export { ApiContext, ApiContextProvider, useApiContext }