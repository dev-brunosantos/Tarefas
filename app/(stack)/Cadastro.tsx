import { useState } from "react"
import { View } from "react-native"
import { router } from "expo-router"
import * as Animatable from 'react-native-animatable';
import { InputComponent, PasswordComponent } from "../../src/components/Inputs"
import { Btn } from "../../src/components/Btn"
// IMPORTAÇÃO DE ESTILOS
import { PaginaStyles } from "../../src/styles/PaginasStyles"


export default function Cadastro() {

    const [nome, setNome] = useState<string>()
    const [sobrenome, setSobrenome] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()
    const [confirmarSenha, setConfirmarSenha] = useState<string>()

    const VerificaDados = () => {
        if (senha !== confirmarSenha) {
            return alert('As senhas não são iguais. Tente novamente.')
        }
        return (alert('Usuário cadastrado com sucesso.'), router.back())
    }

    return (
        <Animatable.View style={PaginaStyles.pagina}
            animation={'fadeIn'} delay={500}
        >
            <InputComponent placeholder="Nome"
                width={380} border={1}
                onChangeText={(txt) => setNome(txt)}
            />
            <InputComponent placeholder="Sobrenome"
                width={380} border={1}
                onChangeText={(txt) => setSobrenome(txt)}
            />
            <InputComponent placeholder="E-mail"
                width={380} border={1}
                onChangeText={(txt) => setEmail(txt)}
            />
            <PasswordComponent placeholder="Senha"
                width={380} border={1}
                onChangeText={(txt) => setSenha(txt)}
            />
            <PasswordComponent placeholder="Confirmar Senha"
                width={380} border={1}
                onChangeText={(txt) => setConfirmarSenha(txt)}
            />

            <Btn
                width={175}
                border={1}
                titulo="Cadastrar"
                onPress={VerificaDados}
            />
        </Animatable.View>
    )
}