import { useContext } from "react";
import { TemaContext } from "@/contexts/TemaContext";

const useTema = () => {
    const contexto = useContext(TemaContext);
    if(!contexto) {
        throw new Error('Não existe nenhum provider de tema');
    }
    return contexto;
}

export { useTema }