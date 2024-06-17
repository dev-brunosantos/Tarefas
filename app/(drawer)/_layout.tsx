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
                    <TouchableOpacity 
                        style={{
                            position: 'absolute',
                            bottom: 20
                        }}
                        onPress={() => router.push('../(stack)')}
                    >
                        <Text style={{fontSize: 20}}>Sair</Text>
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
                        focused ? <Feather name='home' size={30} /> : <Feather name='home' size={30} />
                    ))
                }}
            />
            <Drawer.Screen name='Usuario' 
                options={{
                    drawerIcon: (({focused}) => (
                        focused ? <Feather name='user' size={30} /> : <Feather name='user' size={30} />
                    ))
                }}
            />
        </Drawer>
    )
}