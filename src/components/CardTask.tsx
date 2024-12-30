import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

interface TaskProps {
    tarefa: string;
}

export const CardTask = ({ tarefa }: TaskProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.content_txt} >
                <Text style={{ fontSize: 18, fontWeight: '500', fontStyle: 'italic' }}>
                    {tarefa}
                </Text>
            </View>

            <View style={styles.content_btn}>
                <TouchableOpacity style={styles.btn}>
                    <Entypo name="check" size={35} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Entypo name="pencil" size={35} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content_txt: {
        width: '70%',
        height: '100%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    content_btn: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})