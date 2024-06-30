import { LoginProvider } from '@/src/contexts/LoginContext';
import { Stack } from 'expo-router';

export default function StackLayout() {
    return (
        <LoginProvider>
            <Stack>
                <Stack.Screen name='Login'
                    options={{ statusBarStyle: 'dark', headerShown: false }}
                />
            </Stack>
        </LoginProvider>
    )
}