import { Btn } from '@/src/components/Btn'
import { Cabecalho } from '@/src/components/Cabecalho'
import { DrawerItemList } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { View } from 'react-native'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerLeftContainerStyle: { position: 'absolute', top: 15, right: 5 },
                drawerLabelStyle: { 
                    fontSize: 20, fontWeight: 'bold', marginVertical: 0, 
                    padding: 0, position: 'absolute', top: -14, left: -20 
                },
                drawerActiveBackgroundColor: '#fff',
                drawerActiveTintColor: '#000', drawerInactiveTintColor: '#0000005a',
                drawerItemStyle: { height: 55, flexDirection: 'column', marginVertical: 15 }
            }}
            drawerContent={(props) => (
                <>
                    <Cabecalho />
                    <DrawerItemList {...props} />
                    <View style={{ position: 'absolute', bottom: 10 }}>
                        <Btn width={280} titulo='Sair' onPress={() => router.push('(stack)/Login')} />
                    </View>
                </>
            )}
        >
            <Drawer.Screen name='Home'
                options={{
                    drawerIcon: (({ focused }) => (
                        focused ? <FontAwesome name={"home"} size={35} /> : <FontAwesome name={"home"} size={35} color={'#0000005a'} />
                    ))
                }}
            />
            <Drawer.Screen name='Tarefas'
                options={{
                    drawerIcon: (({ focused }) => (
                        focused ? <Ionicons name={"create"} size={35} /> : <Ionicons name={"create-outline"} size={35} color={'#0000005a'} />
                    ))
                }}
            />
            <Drawer.Screen name='Usuario'
                options={{
                    drawerIcon: (({ focused }) => (
                        focused ? <FontAwesome name={"user-circle"} size={32} /> : <FontAwesome name={"user-circle-o"} size={32} color={'#0000005a'} />
                    ))
                }}
            />
            <Drawer.Screen name='Configuracoes'
                options={{
                    drawerIcon: (({ focused }) => (
                        focused ? <Ionicons name={"settings"} size={35} /> : <Ionicons name={"settings-outline"} size={35} color={'#0000005a'} />
                    ))
                }}
            />

        </Drawer>
    )
}