import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './Screen/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
});
