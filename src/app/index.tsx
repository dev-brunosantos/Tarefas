import { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";

export default function App() {

    useEffect(() => {
        setTimeout(() => {
            return router.push('./Login')
        }, 2000)
    })

    return(
        <View>
            <Text>Minhas Tarefas</Text>
        </View>
    )
}