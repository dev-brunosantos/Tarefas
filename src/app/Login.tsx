import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { useLogin } from "@/hooks/useLogin";
import { PagesStyles } from "@/styles/PageStyles";
import { Container } from "@/components/Container";

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { erro, signIn } = useLogin()

    const realizarLogin = () => {
        signIn(email, senha)
    }

    return (
        <View style={PagesStyles.page}>
            <Container style={{ height: 200, borderWidth: 0 }}>
                <Text style={{ fontSize: 45, fontWeight: 'bold' }}>
                    Seja bem vindo
                </Text>
            </Container>

            <Container style={{ height: 200, borderWidth: 0 }}>
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
            </Container>

            {/* <View>
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
            </View> */}

            {/* <View>
                <BtnComponent
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </View> */}

            <Container style={{ height: 100, borderWidth: 0 }}>
                <BtnComponent
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </Container>

            {erro && (
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center'}}>Não possui conta? Cadastre-se aqui</Text>
                </TouchableOpacity>
            )}

            {/* <View>
                {erro && (
                    <Text>Não possui conta? Cadastre-se aqui</Text>
                )}
            </View> */}
        </View>
    )
}