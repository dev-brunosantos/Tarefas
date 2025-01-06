import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ModalStyles } from "@/styles/ModalStyles";

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
            <View style={ModalStyles.overlay}>
                <View style={ModalStyles.container}>
                    {tarefa.map(task => (
                        <View key={task.titulo}>
                            <Text style={ModalStyles.txt}>{task.titulo}</Text>
                            <Text style={ModalStyles.txt}>{task.status}</Text>
                            <Text style={ModalStyles.txt}>{task.criacao}</Text>
                        </View>
                    ))}

                    <TouchableOpacity style={ModalStyles.btn} onPress={close}>
                        <AntDesign name="close" size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}