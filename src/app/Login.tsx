import { useState } from "react";
import { View, Text } from "react-native";
import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { useLogin } from "@/contexts/LoginContext";

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { erro, signIn } = useLogin()

    const realizarLogin = () => {
        signIn(email, senha)
    }

    return (
        <View>
            <Text>Tela de Login</Text>

            <View>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu e-mail"
                    onChangeText={setEmail}
                />

                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                />
            </View>

            <View>
                <BtnComponent
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </View>

            <View>
                {erro && (
                    <Text>Não possui conta? Cadastre-se aqui</Text>
                )}
            </View>
        </View>
    )
}