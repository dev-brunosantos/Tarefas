import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

interface InputInterface {
    width?: number,
    placeholder: string
}

export const InputComponent = ({ width = 350, placeholder }: InputInterface) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                style={[styles.input, { width: width }]}
            />
        </View>
    )
}

export const PasswordComponent = ({ width = 350, placeholder }: InputInterface) => {

    const [seguranca, setSeguranca] = useState<boolean>(true)
    const [verSenha, setVerSenha] = useState('eye-with-line')

    const VerificarSenha = () => {
        setSeguranca(!seguranca)
        verSenha === 'eye-with-line' ? setVerSenha('eye') : setVerSenha('eye-with-line')
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={seguranca}
                style={[styles.input, {
                    width: width
                }]}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={VerificarSenha}
            >
                <Entypo name={verSenha} size={35} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        fontSize: 20
    },
    btn: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
})