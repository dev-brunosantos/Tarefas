import { AppContexts } from '@/contexts/AppContext';
import { Stack } from 'expo-router';

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