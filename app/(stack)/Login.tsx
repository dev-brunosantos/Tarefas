import { Btn } from "@/src/components/Btn";
import { InputComponent, PasswordComponent } from "@/src/components/Inputs";
import { LoginContext } from "@/src/contexts/LoginContext";
import { PaginaStyles } from "@/src/styles/Paginas";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Login() {

    // const [usuario, setUsuario] = useState<string>()
    // const [senha, setSenha] = useState<string>()
    const [erro, setErro] = useState<boolean>(false)

    const { usuario, setUsuario, senha, setSenha, login } = useContext(LoginContext)

    const ValidarUsuario = () => {
        // if (usuario != 'Bruno' && senha != "1234") { return setErro(true) }
        // return setErro(true)
        router.push('(drawer)/Home')
    }

    return (
        <View style={PaginaStyles.pagina}>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }} >Tarefas</Text>
            <InputComponent onChangeText={(txt) => setUsuario(txt)} placeholder="Digite seu usuário" />

            <PasswordComponent onChangeText={(txt) => setSenha(txt)} placeholder="Digite sua senha" />

            <Btn titulo="Entrar" onPress={ValidarUsuario} />
            <Btn titulo="TESTE" onPress={() => login(usuario, senha)} />

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