import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { InputInterface } from "../interfaces/InterfaceInput"
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'

export const InputComponent = ({
    width, placeholder, color="#000", 
    fontSize = 22, border, onChangeText
}: InputInterface) => {
    return (
        <View
            style={[
                InputStyles.container,
                { width: width, borderWidth: border }
            ]}
        >
            <TextInput
                style={[
                    InputStyles.input, 
                    { color: color, fontSize: fontSize }
                ]}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export const PasswordComponent = ({
    width, placeholder, color, fontSize = 22,
    border, onChangeText
}: InputInterface) => {

    const [seguranca, setSeguranca] = useState<boolean>(true)
    const [verSenha, setVerSenha] = useState<string>('eye-with-line')

    const VerficiarSenha = () => {
        setSeguranca(!seguranca)
        verSenha === 'eye-with-line' ? setVerSenha('eye') : setVerSenha('eye-with-line')
    }

    return(
        <View
            style={[
                InputStyles.container,
                { width: width, borderWidth: border }
            ]}
        >
            <TextInput
                style={[
                    InputStyles.input, 
                    { color: color, fontSize: fontSize }
                ]}
                placeholder={placeholder}
                secureTextEntry={seguranca}
                onChangeText={onChangeText}
            />

            <TouchableOpacity
                style={InputStyles.btnIcone}
                onPress={VerficiarSenha}
            >
                <Entypo name={verSenha} size={35} />
            </TouchableOpacity>
        </View>
    )
}

const InputStyles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        marginVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        fontWeight: 'bold'
    },
    btnIcone: {
        height: '100%',
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 