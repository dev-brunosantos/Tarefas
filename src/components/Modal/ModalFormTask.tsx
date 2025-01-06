import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Cores } from "@/styles/Cores";
import { Container } from "../Container";
import { InputComponent } from "../InputComponents";
import { useState } from "react";
import { useTema } from "@/hooks/useTema";
import { BtnComponent } from "../BtnComponent";

interface ModalCardProps {
    open: boolean;
    close: () => void;
}

interface InforTarefa {
    titulo: string;
    status: string;
    criacao: string
}

export const ModalFormTask = ({ open, close }: ModalCardProps) => {

    const { tema } = useTema()
    const [nomeTarefa, setNomeTarefa] = useState('')

    return (
        <Modal
            visible={open}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Container style={{ width: '90%', borderWidth: 0 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                            Atualizar Tarefa
                        </Text>
                    </Container>

                    <Container style={{ width: '90%', backgroundColor: tema.background }}>
                        <InputComponent
                            isPassword={false}
                            placeholder="Atualize o nome da tarefa"
                            placeholderTextColor={tema.txt === '#eaeaea' ? '#888' : '#555'}
                            onChangeText={setNomeTarefa}
                        // style={{
                        //     width: '90%',
                        //     height: '100%',
                        //     fontSize: 16,
                        //     fontWeight: 'bold',
                        //     color: tema.background
                        // }}
                        />
                    </Container>

                    <Container style={{ width: '90%', backgroundColor: tema.background }}>
                        <BtnComponent 
                            titulo="Salvar"
                        />
                    </Container>

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