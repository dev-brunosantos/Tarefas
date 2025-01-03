import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Container } from "./Container"
import { Feather } from "@expo/vector-icons"
import { useTema } from "@/hooks/useTema";

interface AlteraTemaBtnProps extends TouchableOpacityProps {
    icone: string;
}

export const AlteraTemaBtn = ({ icone, ...rest }: AlteraTemaBtnProps) => {

    const { tema } = useTema()

    return (
        <TouchableOpacity {...rest}>
            <Feather name={icone} size={30} color={tema.txt} />
        </TouchableOpacity>
    )
}