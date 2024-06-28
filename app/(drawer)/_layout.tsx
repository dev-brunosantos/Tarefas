import { Btn } from '@/src/components/Btn'
import { Cabecalho } from '@/src/components/Cabecalho'
import { DrawerItemList } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { TouchableOpacity, View } from 'react-native'

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerLeftContainerStyle: { position: 'absolute', top: 15, right: 5 },
                drawerLabelStyle: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 }
            }}
            drawerContent={(props) => (
                <>
                    <Cabecalho />
                    <DrawerItemList {...props} />
                    <View style={{position: 'absolute', bottom: 10}}>
                        <Btn width={280} titulo='Sair' onPress={() => router.push('(stack)/Login')} />
                    </View>
                </>
            )}
        >
            <Drawer.Screen name='Home' />
            <Drawer.Screen name='Usuario' />
        </Drawer>
    )
}