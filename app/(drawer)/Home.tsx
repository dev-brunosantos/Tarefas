import { CardTarefas } from "@/src/components/cards/CardTarefas";
import { PaginaStyles } from "@/src/styles/Paginas";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home() {

    const tarefas = [
        {
            nome: "Criar tela de Login",
            descricao: "Aqui é um teste de descrição da tarefa"
        },
        {
            nome: "Criar tela de Projetos",
            descricao: "Aqui é um teste de descrição da tarefa"
        },
        {
            nome: "Tomar banho",
            descricao: ""
        }
    ]

    const [userNome, setUserNome] = useState()

    return (
        <View style={PaginaStyles.pagina}>
            <FlatList
                style={{ width: '100%' }}
                data={tarefas}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 20, width: '110%' }} >
                        <CardTarefas titulo={item.nome} descricao={item.descricao} />
                    </View>
                )}
            />
        </View>
    )
}