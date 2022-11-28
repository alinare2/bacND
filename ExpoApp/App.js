import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Routes, Route, Link} from 'react-router-native';


import AppTestThing from './AppTestThing';
import AuthProvider from './AuthContext';
export default function App() {

  return (
    <AuthProvider>
      <NativeRouter>
        <AppTestThing/>
      </NativeRouter>
    </AuthProvider>
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
