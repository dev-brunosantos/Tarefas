import { useState } from "react";
import { View, TextInput, TouchableOpacity, TextInputProps, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verificarSenha = () => {
        setSeguranca(!seguranca)
        icone === 'eye-with-line' ? setIcone('eye') : setIcone('eye-with-line')
    }

    if (isPassword) {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    {...rest} 
                    secureTextEntry={seguranca}
                />

                <TouchableOpacity style={styles.btnIcone} onPress={verificarSenha}>
                    <Entypo name={icone} size={35} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        fontSize: 16
    },
    btnIcone: {
        height: '100%',
        padding: 5,
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})