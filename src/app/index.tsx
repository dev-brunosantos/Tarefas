import { router } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

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