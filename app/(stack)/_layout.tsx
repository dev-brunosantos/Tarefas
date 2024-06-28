import { Stack } from 'expo-router';

export default function StackLayout() {
    return(
        <Stack>
            <Stack.Screen name='Login' 
                options={{ statusBarStyle: 'dark', headerShown: false }}
            />
        </Stack>
    )
}