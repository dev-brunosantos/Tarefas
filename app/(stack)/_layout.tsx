import { Stack } from 'expo-router'

export default function StackLayout() {
    return(
        <Stack>
            <Stack.Screen name='index' 
                options={{ title: 'Login' }}
            />
            <Stack.Screen name='Cadastro' 
                options={{ title: 'Cadastro' }}
            />
        </Stack>
    )
}