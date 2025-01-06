import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const ModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        height: 250,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Cores.claro,
        position: 'absolute',
        left: '10%',
        top: '35%'
    },
    txt: {
        fontSize: 16,
        marginVertical: 10,
    },
    btn: {
        padding: 5,
        position: 'absolute',
        top: 0,
        right: 10
    }
})