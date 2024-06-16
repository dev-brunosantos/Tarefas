import { useState } from "react"
import { View } from "react-native"
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
        if(senha !== confirmarSenha) {
            alert('As senhas não são iguais. Tente novamente.')
        }
    }

    return (
        <View style={PaginaStyles.pagina}>
            <InputComponent
                width={380}
                border={1}
                placeholder=""
                onChangeText={(txt) => setNome(txt)}
            />
            <InputComponent
                width={380}
                border={1}
                placeholder=""
                onChangeText={(txt) => setSobrenome(txt)}
            />
            <InputComponent
                width={380}
                border={1}
                placeholder=""
                onChangeText={(txt) => setEmail(txt)}
            />
            <PasswordComponent
                width={380}
                border={1}
                placeholder=""
                onChangeText={(txt) => setSenha(txt)}
            />
            <PasswordComponent
                width={380}
                border={1}
                placeholder=""
                onChangeText={(txt) => setConfirmarSenha(txt)}
            />

            <Btn
                width={175}
                border={1}
                titulo="Cadastrar"
                // onPress={() => alert(usuario)}
                onPress={VerificaDados}
            />
        </View>
    )
}