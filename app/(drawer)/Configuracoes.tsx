import { Btn } from "@/src/components/Btn";
import { PaginaStyles } from "@/src/styles/Paginas";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

export default function Configuracoes() {

    const opcoes:string[] = ['Alterar Tema', 'Editar nome do usuário', 'Editar Senha', 'Editar E-mail']


    return(
            <View style={PaginaStyles.pagina}>
            {/* <Text>Tela de CONFIGURAÇÕES</Text> */}

            {
                opcoes.map(opcao => (
                    <TouchableOpacity key={opcao}>
                        <Text style={styles.txt} >{opcao}</Text>
                    </TouchableOpacity>
                ))
            }

            <Btn 
                titulo="Salvar"
                onPress={() => Alert.alert('Alterações salvas')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    }
})