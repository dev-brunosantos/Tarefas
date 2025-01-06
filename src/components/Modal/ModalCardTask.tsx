import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Cores } from "@/styles/Cores";

interface ModalCardProps {
    tarefaTitulo: string;
    status: string;
    isOpen: boolean;
    close: () => void;
}

interface InforTarefa {
    titulo: string;
    status: string;
    criacao: string
}

export const ModalCardTask = ({ tarefaTitulo, status, isOpen, close }: ModalCardProps) => {

    const dia = new Date().getDate()
    const mes = new Date().getMonth() + 1
    const ano = new Date().getFullYear()

    const tarefa: InforTarefa[] = [
        {
            titulo: tarefaTitulo,
            status: status,
            criacao: `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`
        }
    ]

    return (
        <Modal
            visible={isOpen}
            transparent={true}
            statusBarTranslucent={false}
            animationType="fade"
            style={{
                backgroundColor: 'red'
            }}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {tarefa.map(task => (
                        <View key={task.titulo}>
                            <Text style={styles.txt}>{task.titulo}</Text>
                            <Text style={styles.txt}>{task.status}</Text>
                            <Text style={styles.txt}>{task.criacao}</Text>
                        </View>
                    ))}

                    <TouchableOpacity style={styles.btn} onPress={close}>
                        <AntDesign name="close" size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        height: 250,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Cores.claro,
        position: 'absolute',
        left: '10%',
        top: '35%'
    },
    txt: {
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        padding: 5,
        position: 'absolute',
        top: 0,
        right: 10
    }
})