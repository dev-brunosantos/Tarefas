import { CardTask } from "@/components/CardTask";
import { Container } from "@/components/Container";
import { PagesStyles } from "@/styles/PageStyles";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { useApiContext } from "@/contexts/ApiContext";

// const tarefasDoDia:string[] = [
//     // "Acordar e fazer a cama",
//     // "Tomar café da manhã",
//     // "Fazer exercícios físicos",
//     // "Trabalhar/estudar",
//     // "Almoçar",
//     // "Responder e-mails",
//     // "Realizar tarefas domésticas",
//     // "Ler um livro ou artigo",
//     // "Fazer uma pausa para o café",
//     // "Jantar",
//     // "Passar tempo com a família/amigos",
//     // "Revisar o que foi feito no dia",
//     // "Preparar para dormir"
// ];

interface Teste {
    id: string;
    tarefa: string;
    dtCriacao: Date;
    dtAtualizacao: Date;
}

export default function Tarefas() {

    // const { tarefas, cadastrar, listar } = useApiContext()

    const [tarefasDoDia, setTarefasDoDia] = useState<string[]>([]);
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState<Teste[]>([]);

    const addNovaTarefa = async () => {
        setTarefasDoDia((prevTarefas) => [...prevTarefas, tarefa]);
        setTarefa('');

        // await cadastrar(tarefa)
    }

    // useEffect(() => {
    //     listar()
    // }, [])

    return (
        <View style={PagesStyles.page}>
            <Container style={{ height: 100, borderWidth: 0 }}>
                <Text style={{ fontSize: 45 }}>
                    Minhas Tarefas
                </Text>
            </Container>

            <Container style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <TextInput
                    style={{ width: '95%', height: '100%' }}
                    onChangeText={setTarefa}
                />

                <TouchableOpacity onPress={addNovaTarefa}>
                    <Entypo name="plus" size={35} />
                </TouchableOpacity>
            </Container>

            <ScrollView>
                {tarefasDoDia.map(task => (
                    <CardTask
                        key={task}
                        editar={() => alert('editar')}
                        tarefa={task}
                        finalizar={() => alert('finalizar')}
                    />
                ))}
                {/* {tarefas.map(task => (
                    <CardTask 
                        key={task.id}
                        tarefa={task.tarefa}
                        editar={() => alert(`${task.dtCriacao}`)}
                        finalizar={() => alert(`${task.id}`)}
                    />
                ))} */}
            </ScrollView>

        </View>
    )
}