import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { useLogin } from "@/hooks/useLogin";
import { PagesStyles } from "@/styles/PageStyles";
import { Container } from "@/components/Container";
import { router } from "expo-router";
import { useTema } from "@/hooks/useTema";
export default function Login() {

    const { tema } = useTema()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar = () => {
        if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
            return Alert.alert('Preencha todos os campos')
        }
        console.log(nome, email, senha)

        Alert.alert('Cadastro realizado com sucesso')
        return router.back()
    }

    return (
        <View style={[PagesStyles.page, { backgroundColor: tema.background }]}>
            <Container style={{ height: 200, borderWidth: 0 }}>
                <Text
                    style={{ fontSize: 45, fontWeight: 'bold', color: tema.txt }}
                >
                    Faça seu cadastro
                </Text>
            </Container>

            <Container style={{ height: 200, borderWidth: 0 }}>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />

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
                    titulo="Cadastrar"
                    onPress={cadastrar}
                />
            </Container>

        </View>
    )
}