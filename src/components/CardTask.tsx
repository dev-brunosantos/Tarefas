import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Container } from "./Container";
import { useTema } from "@/hooks/useTema";

interface TaskProps {
    tarefa: string;
    finalizar: () => void;
    editar: () => void;
}

export const CardTask = ({ tarefa, finalizar, editar }: TaskProps) => {

    const { tema } = useTema()

    return (
        <Container style={{ flexDirection: 'row', backgroundColor: tema.txt }}>
            <View style={styles.content_txt} >
                <Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic', color: tema.background }}>
                    {tarefa}
                </Text>
            </View>

            <View style={styles.content_btn}>
                <TouchableOpacity style={styles.btn} onPress={editar}>
                    <Entypo name="pencil" size={35} color={tema.background} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={finalizar}>
                    <Entypo name="check" size={35} color={tema.background} />
                </TouchableOpacity>
            </View>
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