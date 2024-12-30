import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface BtnProps extends TouchableOpacityProps {
    titulo: string;
}

export const BtnComponent = ({ titulo, ...rest }: BtnProps) => {
    return (
        <TouchableOpacity style={styles.btn} {...rest}>
            <Text style={styles.txt}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 52, 
        borderWidth: 1,
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})