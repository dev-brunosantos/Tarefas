import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router'

export default function App() {

  useEffect(() => {
    function IrTelaHome() {
      setTimeout(() => {
        router.push('./(stack)')
      }, 2000);
    }
    IrTelaHome()
  })

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation={"zoomInUp"} delay={100}
        style={{ fontSize: 100, fontWeight: 'bold' }}
      >
        Tarefas
      </Animatable.Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
