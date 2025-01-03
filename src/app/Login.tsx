import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { useLogin } from "@/hooks/useLogin";
import { PagesStyles } from "@/styles/PageStyles";
import { Container } from "@/components/Container";
import * as Animacao from 'react-native-animatable';
import { useTema } from "@/hooks/useTema";
import { router } from "expo-router";

export default function NovoUsuario() {

    const { tema } = useTema()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { erro, signIn } = useLogin()

    const realizarLogin = () => {
        signIn(email, senha)
    }

    return (
        <View style={[PagesStyles.page, { backgroundColor: tema.background }]}>
            <Container style={{ height: 200, borderWidth: 0 }}>
                <Text 
                    style={{ fontSize: 45, fontWeight: 'bold', color: tema.txt }}
                >
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

            <Container style={{ height: 100, borderWidth: 0 }}>
                <BtnComponent
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </Container>

            {erro && (
                <TouchableOpacity onPress={() => router.push('/NovoUsuario')}>
                    <Text style={{ textAlign: 'center', color: tema.txt }}>Não possui conta? Cadastre-se aqui</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}