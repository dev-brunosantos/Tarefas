import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Cabecalho = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Cabecalho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderBottomWidth: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    txt: {
        alignItems: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
})