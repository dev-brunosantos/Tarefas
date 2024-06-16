import { View, Text } from "react-native";
import { InputComponent } from "../../src/components/Inputs";
import { useState } from "react";

export default function Login() {

    const [usuario, setUsuario] = useState<string>()

    return(
        <View>
            <Text>
                Tela LOGIN
            </Text>

            <InputComponent 
                width={300}
                border={1}
                placeholder="Digite seu usuário"
                color="red"
                fontSize={22}
                onChangeText={(txt) => setUsuario(txt)}
            />
        </View>
    )
}