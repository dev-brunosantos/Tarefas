import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Container } from "./Container";
import { useTema } from "@/hooks/useTema";
import { ModalCardTask } from "./Modal/ModalCardTask";
import { Cores } from "@/styles/Cores";
import { ModalFormTask } from "./Modal/ModalFormTask";
import { useState } from "react";

interface TaskProps {
    tarefa: string;
    excluir: (tarefa: string) => void;
}

export const CardTask = ({ tarefa, excluir }: TaskProps) => {
    const { tema } = useTema()

    const [abrir, setAbrir] = useState(false)
    const [atualizar, setAtualizar] = useState(false)
    const [finalizada, setFinalizada] = useState(false)

    const abrirModal = () => {
        setAbrir(true)
    }

    const atualizarTarefa = () => {
        setAtualizar(!atualizar)
    }

    const finalizarTarefa = () => {
        setFinalizada(!finalizada)
    }

    const fecharModal = () => {
        setAbrir(false)
        setAtualizar(false)
    }

    return (
        <Container style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: finalizada ? Cores.confirmar : tema.txt,
            position: 'relative'
        }}>
            <TouchableOpacity
                style={{ flex: 1 }}
                onPress={abrirModal}
                onLongPress={finalizarTarefa}
            >
                <View style={styles.content_txt} >
                    <Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic', color: tema.background }}>
                        {tarefa}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.content_btn}>
                <TouchableOpacity style={styles.btn} onPress={atualizarTarefa}>
                    <Entypo name="pencil" size={35} color={tema.background} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => excluir(tarefa)}>
                    <Entypo name="trash" size={35} color={tema.background} />
                </TouchableOpacity>
            </View>

            <ModalCardTask
                key={tarefa}
                isOpen={abrir}
                close={fecharModal}
                tarefaTitulo={tarefa}
                status={finalizada ? 'Concluída' : 'Pendente'}
            />

            <ModalFormTask
                open={atualizar}
                close={fecharModal}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    content_txt: {
        width: '70%',
        height: '100%',
        paddingLeft: 10,
        justifyContent: 'center'
    },
    content_btn: {
        width: '25%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})