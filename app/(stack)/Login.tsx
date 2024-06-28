import { Btn } from "@/src/components/Btn";
import { InputComponent, PasswordComponent } from "@/src/components/Inputs";
import { PaginaStyles } from "@/src/styles/Paginas";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Login() {

    const [usuario, setUsuario] = useState<string>()
    const [senha, setSenha] = useState<string>()
    const [erro, setErro] = useState<boolean>(false)


    const ValidarUsuario = () => {
        // if (usuario != 'Bruno' && senha != "1234") { return setErro(true) }
        // return setErro(true)
        router.push('(drawer)/Home')
    }

    return (
        <View style={PaginaStyles.pagina}>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }} >Tarefas</Text>
            <InputComponent placeholder="Digite seu usuário" />

            <PasswordComponent placeholder="Digite sua senha" />

            <Btn titulo="Entrar" onPress={ValidarUsuario} />

            {
                erro === true ?
                    <TouchableOpacity style={{ alignItems: 'center' }} >
                        <Text>Não tem conta? Clique aqui</Text>
                        {/* <Text>Clique aqui</Text> */}
                    </TouchableOpacity>
                    : <Text />
            }
        </View>
    )
}