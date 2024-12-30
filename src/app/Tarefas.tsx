import { CardTask } from "@/components/CardTask";
import { Container } from "@/components/Container";
import { PagesStyles } from "@/styles/PageStyles";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from "react";

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

export default function Tarefas() {

    const [tarefasDoDia, setTarefasDoDia] = useState<string[]>([]);
    const [tarefa, setTarefa] = useState('');

    const addNovaTarefa = () => {
        setTarefasDoDia((prevTarefas) => [...prevTarefas, tarefa]);
        setTarefa('');
    }

    return (
        <View style={PagesStyles.page}>
            <Container style={{ height: 100, borderWidth: 0 }}>
                <Text style={{ fontSize: 45 }}>
                    Minhas Tarefas
                </Text>
            </Container>

            <Container style={{ flexDirection: 'row', paddingHorizontal: 20}}>
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
                        tarefa={task}
                    />
                ))}
            </ScrollView>

        </View>
    )
}