import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface CardInterface {
    titulo: string,
    onPress: () => void
}

export const Card = ({ titulo, onPress }:CardInterface) => {
    return(
        <View>
            <Text>{titulo}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text>
                    {titulo}
                </Text>
            </TouchableOpacity>
        </View>
    )
}