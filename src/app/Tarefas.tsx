import { CardTask } from "@/components/CardTask";
import { Container } from "@/components/Container";
import { PagesStyles } from "@/styles/PageStyles";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { useApiContext } from "@/contexts/ApiContext";

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
            </ScrollView>

        </View>
    )
}