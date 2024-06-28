import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface BtnInterface {
    width?: number,
    titulo: string,
    onPress: () => void
}

export const Btn = ({ width = 100, titulo, onPress }: BtnInterface) => {
    return (
        <TouchableOpacity
            style={[styles.botao, { width: width }]}
            onPress={onPress}
        >
            <Text style={styles.txt}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        height: 54,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20
    }
})