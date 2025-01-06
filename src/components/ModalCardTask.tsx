import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Cores } from "@/styles/Cores";

interface ModalCardProps {
    isOpen: boolean;
    close: () => void;
}

export const ModalCardTask = ({ isOpen, close }:ModalCardProps) => {
    return(
        <Modal
            visible={isOpen}
            transparent={true}
        >
            <View style={styles.container}>
            {/* <View> */}
                <Text>Testando</Text>

                <TouchableOpacity onPress={() => alert('Funcionou')}>
                    <Text>
                        Teste Função
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={close}>
                    <AntDesign name="close" size={35} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Cores.claro,
        position: 'relative',
        left: '25%',
        top: '25%'
    },
    btn: {
        padding: 5,
        position: 'absolute',
        top: 0,
        right: 10
    }
})