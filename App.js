import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Button } from 'react-native';
import { AsyncStorage } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title='test'
      onPress={() => navigation.navigate('Test')}/>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notepad List" component={NotepadList}/>
        <Stack.Screen name="Notepad" component={Notepad}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
let currentNotepad = ""
function setNotepad(name){
  currentNotepad = name
}

function Notepad(){
  console.log('current notepad: ' + currentNotepad)
  return (
    <View style={{padding: 25}}>
      <TextInput style={{fontSize: 25}} multiline>
        <Text>{currentNotepad}</Text>
      </TextInput>
    </View>
  )
}

function NotepadList(){
  const [notepads, setNotepads] = useState([])
  const navigation = useNavigation()
  const buttonHandler = (name) => {
    navigation.navigate('Notepad', { title: name })
    setNotepad(name)
  }

  const retrieveAllNotes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const values = await AsyncStorage.multiGet(keys)
      setNotepads(values)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    retrieveAllNotes()
  }, [])
  retrieveAllNotes()
  return (
    <View style={{padding: 15}}>
      {notepads.map(notepad => (
        <View key={notepad[0]} >
          <TouchableOpacity
          onPress={() => buttonHandler(notepad[1])}>
            <Text style={{fontSize: 25, paddingTop: 11}}>
              {notepad[0]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const retrieveNote = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value;
  } catch (error) {
    console.log(error)
  }
}

const saveNote = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
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
