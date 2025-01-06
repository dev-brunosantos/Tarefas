import { Modal, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Container } from "../Container";
import { InputComponent } from "../InputComponents";
import { useState } from "react";
import { useTema } from "@/hooks/useTema";
import { BtnComponent } from "../BtnComponent";
import { ModalStyles } from "@/styles/ModalStyles";

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
            <View style={ModalStyles.overlay}>
                <View style={ModalStyles.container}>
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
                        />
                    </Container>

                    <Container style={{ width: '90%', backgroundColor: tema.background }}>
                        <BtnComponent 
                            titulo="Salvar"
                        />
                    </Container>

                    <TouchableOpacity style={ModalStyles.btn} onPress={close}>
                        <AntDesign name="close" size={35} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    )
}