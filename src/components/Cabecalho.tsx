import { StyleSheet, Text, View } from "react-native"

export const Cabecalho = () => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.txt}>
                Tarefas
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        width: '100%', 
        height: 200,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    txt: {
        fontSize: 30, 
        fontWeight: 'bold'
    }
})