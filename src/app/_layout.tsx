import { LoginContextProvider } from '@/contexts/LoginContext';
import { Stack } from 'expo-router';

export default function AppLayout() {
    return (
        <LoginContextProvider>
            <Stack />
        </LoginContextProvider>
    )
}