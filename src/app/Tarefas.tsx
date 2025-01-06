import { CardTask } from "@/components/CardTask";
import { Container } from "@/components/Container";
import { PagesStyles } from "@/styles/PageStyles";
import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { useApiContext } from "@/contexts/ApiContext";
import { useTema } from "@/hooks/useTema";
import { useModalContext } from "@/hooks/useModalContext";

export default function Tarefas() {

    const { tema } = useTema()

    const [tarefasDoDia, setTarefasDoDia] = useState<string[]>([]);
    const [tarefa, setTarefa] = useState('');
    const [tarefasFiltradas, setTarefasFiltradas] = useState<string[]>([]);

    const addNovaTarefa = () => {
        if(tarefa.trim() === "") {
            return alert("O formulário esta vazio. Preencha o campo para adicionar a nova tarefa.")
        }
        setTarefasDoDia((prevTarefas) => [...prevTarefas, tarefa]);
        setTarefa('');
    }

    const removerTarefa = (inforTarefa: string) => {
        setTarefasDoDia((prevTarefas) => prevTarefas.filter(task => task !== inforTarefa))
    }

    const filtrarTarefa = () => {
        const buscarTarefa = tarefasDoDia.filter(task => task.includes(tarefa));
        setTarefasFiltradas(buscarTarefa);
    }

    useEffect(() => {
        setTarefasFiltradas(tarefasDoDia);
    }, [tarefasDoDia]);

    return (
        <View style={[PagesStyles.page, { backgroundColor: tema.background }]}>

            <Container style={{
                width: '112%', position: 'absolute',
                top: 10, left: 10, right: 0,
                flexDirection: 'row', paddingHorizontal: 20,
                borderColor: tema.txt
            }}>
                <TextInput
                    style={{ width: '95%', height: '100%', color: tema.txt }}
                    onChangeText={setTarefa}
                    placeholder="Digite sua tarefa"
                    placeholderTextColor={tema.txt === '#eaeaea' ? '#888' : '#555'}
                />

                <TouchableOpacity onPress={filtrarTarefa}>
                    <Feather name="search" size={30} color={tema.txt} />
                </TouchableOpacity>
            </Container>

            <Container style={{ height: 100, borderWidth: 0, marginTop: 40 }}>
                <Text style={{ fontSize: 45, color: tema.txt }}>
                    Minhas Tarefas
                </Text>
            </Container>


            <ScrollView>
                {!tarefa ?
                    tarefasDoDia.map(task => (
                        <CardTask
                            key={task}
                            tarefa={task}
                            excluir={() => removerTarefa(task)}
                        />
                    ))

                    :

                    tarefasFiltradas.map(task => (
                        <CardTask
                            key={task}
                            tarefa={task}
                            excluir={() => removerTarefa(task)}
                        />
                    ))


                }
            </ScrollView>

            <Container style={{ flexDirection: 'row', paddingHorizontal: 20, borderColor: tema.txt }}>
                <TextInput
                    style={{ width: '95%', height: '100%', color: tema.txt }}
                    onChangeText={setTarefa}
                    placeholder="Digite sua tarefa"
                    placeholderTextColor={tema.txt === '#eaeaea' ? '#888' : '#555'}
                />

                <TouchableOpacity onPress={addNovaTarefa}>
                    <Entypo name="plus" size={35} color={tema.txt} />
                </TouchableOpacity>
            </Container>

        </View>
    )
}