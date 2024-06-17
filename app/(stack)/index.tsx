import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { router } from "expo-router";
import { InputComponent, PasswordComponent } from "../../src/components/Inputs";
import { Btn } from "../../src/components/Btn";
// IMPORTAÇÃO DE ESTILOS
import { PaginaStyles } from "../../src/styles/PaginasStyles";


import UsuariosDados from '../../src/json/Usuarios.json'

export default function Login() {

    const [usuario, setUsuario] = useState<string>()
    const [senha, setSenha] = useState<string>()
    const [alerta, setAlerta] = useState<boolean>()

    const ValidarUsuario = () => {
        // UsuariosDados.map((pessoa: any) => {
        //     if (pessoa.nome === usuario && pessoa.senha === senha) {
        //         return ( setAlerta(false), router.push('../(drawer)/Home') )
        //     }
        //     else {
        //         return (setAlerta(true)) 
        //     }
        // })
        return ( setAlerta(false), router.push('../(drawer)/Home') )
    }

    return (
        <Animatable.View style={PaginaStyles.pagina}
            animation={'fadeIn'} delay={500}
        >
            <InputComponent
                width={350}
                border={1}
                placeholder="Digite seu usuário"
                fontSize={22}
                onChangeText={(txt) => setUsuario(txt)}
            />
            <PasswordComponent
                width={350}
                border={1}
                placeholder="Digite seu usuário"
                fontSize={22}
                onChangeText={(txt) => setSenha(txt)}
            />
            <Btn
                width={175}
                border={1}
                titulo="Entrar"
                // onPress={() => alert(usuario)}
                onPress={ValidarUsuario}
            />

            {
                alerta == true ? 
                <TouchableOpacity onPress={() => router.push('/Cadastro')}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Criar conta </Text>
                </TouchableOpacity> : 
                <Text></Text>
            }
        </Animatable.View>
    )
}