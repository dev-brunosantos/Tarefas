import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native"
import { Entypo } from '@expo/vector-icons'
import { BtnIcone } from "./BtnIcone"

interface TarefasIterface {
    titulo: string, 
    descricao?: string
}

export const CardTarefas = ({ titulo, descricao }:TarefasIterface) => {

    const abrirDescricao = () => {
        if(descricao == null || descricao == "" || descricao == undefined) {
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
    txt: { fontSize: 18 }
})