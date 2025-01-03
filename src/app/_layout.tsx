import { Stack } from 'expo-router';
import { AppContexts } from '@/contexts/AppContext';

export default function AppLayout() {
    return (
        <AppContexts>
            <Stack screenOptions={{
                statusBarStyle: "auto",
                statusBarBackgroundColor: "#242424",
                headerShown: false,
            }} />
        </AppContexts>
    )
}