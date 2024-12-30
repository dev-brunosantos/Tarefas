import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Container } from "./Container";

interface TaskProps {
    tarefa: string;
}

export const CardTask = ({ tarefa }: TaskProps) => {
    return (
        <Container style={{ flexDirection: 'row'}}>
            <View style={styles.content_txt} >
                <Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic' }}>
                    {tarefa}
                </Text>
            </View>

            <View style={styles.content_btn}>
                <TouchableOpacity style={styles.btn}>
                    <Entypo name="pencil" size={35} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Entypo name="check" size={35} />
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