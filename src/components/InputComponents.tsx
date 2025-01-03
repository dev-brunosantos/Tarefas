import { useState } from "react";
import { View, TextInput, TouchableOpacity, TextInputProps, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Container } from "./Container";
import { useTema } from "@/hooks/useTema";

interface InputProps extends TextInputProps {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const { tema } = useTema()

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verificarSenha = () => {
        setSeguranca(!seguranca)
        icone === 'eye-with-line' ? setIcone('eye') : setIcone('eye-with-line')
    }

    if (isPassword) {
        return (
            <Container style={{ borderColor: tema.txt }}>
                <TextInput
                    style={[styles.input, { color: tema.txt}]}
                    {...rest}
                    secureTextEntry={seguranca}
                    placeholderTextColor={tema.txt === '#eaeaea' ? '#888' : '#555'}
                />

                <TouchableOpacity style={styles.btnIcone} onPress={verificarSenha}>
                    <Entypo name={icone} size={35} color={tema.txt} />
                </TouchableOpacity>
            </Container>
        )
    }

    return (
        <Container style={{ borderColor: tema.txt }}>
            <TextInput
                style={[styles.input, { color: tema.txt}]} {...rest}
                placeholderTextColor={tema.txt === '#eaeaea' ? '#888' : '#555'}
            />
        </Container>
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