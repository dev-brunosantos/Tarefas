import { Entypo } from "@expo/vector-icons"
import { Alert, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export const BtnIcone = ({ icone, titulo }: { icone: string, titulo: string }) => {

    const FinalizarTarefa = () => {
        if (icone == 'check') {
            return Alert.alert(`Tarefa: ${titulo} concluída com sucesso`)
        }
        return Alert.alert('Tarefa apagada com sucesso')
    }

    return (
        <TouchableOpacity onPress={FinalizarTarefa} style={styles.btn}>
            <Entypo name={icone} size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 44,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
})