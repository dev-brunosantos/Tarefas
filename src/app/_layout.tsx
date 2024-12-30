import { LoginContextProvider } from '@/contexts/LoginContext';
import { Stack } from 'expo-router';

export default function AppLayout() {
    return (
        <LoginContextProvider>
            <Stack screenOptions={{
                statusBarStyle: "auto",
                statusBarBackgroundColor: "#242424"
            }} />
        </LoginContextProvider>
    )
}