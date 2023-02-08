import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Button } from 'react-native';
import { AsyncStorage } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// Newer ones
import Index from "./src/Index"
const Stack = createNativeStackNavigator();

export default function App() {
  console.log('testing start22')
  return Index()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const notepadStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  textInput: {
    marginTop: 15,
    fontSize: 18
  },
  returnButton: {

  },
  returnButtonContainer: {
    width: 100
  },
  saveButton: {
    marginTop: 25
  }
})

const notepadListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notepadList: {},
  searchField: {}
})


// Functions for future use:
/*
const retrieveNote = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value;
  } catch (error) {
    console.log(error)
  }
}
*/

// Snippets for future use:
/* 
options={{
            headerRight: (navigation) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("NewNotepad")}
              >
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            ),
          }}
    */