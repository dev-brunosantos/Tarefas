import { Btn } from "@/src/components/Btn";
import { router } from "expo-router";
import { View } from "react-native";
import * as Animacao from 'react-native-animatable';

export default function App() {
    return (
        <Animacao.View 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        animation={'zoomIn'} delay={500}
        >
            <Btn 
                titulo="Entrar"
                onPress={() => router.push('(stack)/Login')}
            />
        </Animacao.View>
    )
}