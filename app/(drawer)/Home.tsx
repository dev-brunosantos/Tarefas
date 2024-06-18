import { Text, View } from "react-native";
// IMPORTAÇÃO DE ESTILOS
import { PaginaStyles } from "../../src/styles/PaginasStyles";
import { Card } from "../../src/components/Cards";

export default function Home() {
    return(
        <View style={PaginaStyles.pagina}>
            <Text>
                Tela home
            </Text>

            <Card 
                titulo="Titulo"
                onPress={() => alert('Funcionou')}
            />
        </View>
    )
}