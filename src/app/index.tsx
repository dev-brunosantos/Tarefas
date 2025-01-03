import { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import * as Animacao from 'react-native-animatable';
import { PagesStyles } from "@/styles/PageStyles";
import { useTema } from "@/hooks/useTema";

export default function App() {

    useEffect(() => {
        setTimeout(() => {
            return router.push('./Login')
        }, 2000)
    })

    const { tema } = useTema()

    return (
        <View style={[PagesStyles.page, { backgroundColor: tema.background }]}>
            <Animacao.Text
                style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: tema.txt }}
                animation="fadeIn"
                delay={1000}
            >
                Minhas Tarefas
            </Animacao.Text>
        </View>
    )
}