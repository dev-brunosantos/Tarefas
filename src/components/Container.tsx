import { ReactNode } from "react"
import { StyleSheet, View, ViewStyle } from "react-native";

interface ContainerProps {
    children: ReactNode;
    style?: ViewStyle;
}

export const Container = ({ children, style }:ContainerProps ) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})