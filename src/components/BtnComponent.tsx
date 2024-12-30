import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Container } from "./Container";

interface BtnProps extends TouchableOpacityProps {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {
    return (
        <Container>
            <TouchableOpacity style={styles.btn} {...rest}>
                <Text style={styles.txt}>
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