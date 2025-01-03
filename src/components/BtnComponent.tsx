import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Container } from "./Container";
import { useTema } from "@/hooks/useTema";

interface BtnProps extends TouchableOpacityProps {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {

    const { tema } = useTema()

    return (
        <Container style={{ borderColor: tema.txt }}>
            <TouchableOpacity style={styles.btn} {...rest}>
                <Text style={[styles.txt, { color: tema.txt }]}>
                    {titulo}
                </Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})