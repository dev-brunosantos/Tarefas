import { Text, View } from "react-native";
// IMPORTAÇÃO DE ESTILOS
import { PaginaStyles } from "../../src/styles/PaginasStyles";

export default function Home() {
    return(
        <View style={PaginaStyles.pagina}>
            <Text>
                Tela home
            </Text>
        </View>
    )
}