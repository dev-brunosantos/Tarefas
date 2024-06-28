import { Btn } from "@/src/components/Btn";
import { InputComponent, PasswordComponent } from "@/src/components/Inputs";
import { router } from "expo-router";
import { Alert, Text, View } from "react-native";

export default function App() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Btn 
                titulo="Entrar"
                onPress={() => router.push('(stack)/Login')}
            />
        </View>
    )
}