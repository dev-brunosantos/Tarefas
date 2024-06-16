import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { BtnInterface } from "../interfaces/InterfaceBtn"

export const Btn = ({
    width, border, titulo, color="#000", 
    fontSize=22, onPress
}: BtnInterface) => {
    return (
        <TouchableOpacity
            style={[
                BtnStyles.container,
                { width: width, borderWidth: border }
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    BtnStyles.txt,
                    { color: color, fontSize: fontSize }
                ]}
            >
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const BtnStyles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10
    },
    txt: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})