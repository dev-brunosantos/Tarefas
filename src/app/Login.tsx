import { BtnComponent } from "@/components/BtnComponent";
import { InputComponent } from "@/components/InputComponents";
import { useState } from "react";
import { View, Text } from "react-native";

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

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
                    onPress={() => alert(`${email} -- ${senha}`)}
                />
            </View>
        </View>
    )
}