import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native"
import { Entypo } from '@expo/vector-icons'

interface TarefasIterface {
    titulo: string, 
    descricao?: string
}
function BtnIcone({ icone, titulo }: { icone: string, titulo: string }) {

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

export const CardTarefas = ({ titulo, descricao }:TarefasIterface) => {

    const abrirDescricao = () => {
        if(descricao == null) {
            return 
        }
        return Alert.alert(`${descricao}`)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={abrirDescricao} style={styles.containerTxt}>
                <Text style={styles.txt}>{titulo}</Text>
            </TouchableOpacity>

            <BtnIcone titulo={titulo} icone="check" />
            <BtnIcone titulo={titulo} icone="trash" />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '15%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    container: {
        width: '90%',
        height: 54,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    containerTxt: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    txt: {
        fontSize: 18
    }
})