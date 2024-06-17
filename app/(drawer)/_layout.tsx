import { Drawer } from 'expo-router/drawer';
import { Cabecalho } from '../../src/components/Cabecalho';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={(props) => (
                <>
                    <Cabecalho />
                    <DrawerItemList {...props} />
                    <TouchableOpacity onPress={() => router.push('../(stack)')}>
                        <Text>Sair</Text>
                    </TouchableOpacity>
                </>
            )}
            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 22, fontWeight: 'bold'
                }
            }}
        >
            <Drawer.Screen name='Home' 
                options={{
                    drawerIcon: (({focused}) => (
                        focused ? <Feather name='home' size={50} /> : <Feather name='home' size={50} />
                    ))
                }}
            />
        </Drawer>
    )
}