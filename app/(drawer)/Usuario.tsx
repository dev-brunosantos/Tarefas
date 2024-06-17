import { View, Text } from "react-native";
// IMPORTAÇÃO DE ESTILOS
import { PaginaStyles } from "../../src/styles/PaginasStyles";

export default function Usuario() {
    return(
        <View style={PaginaStyles.pagina}>
            <Text>Tela do Usuário</Text>
        </View>
    )
}