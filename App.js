import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Button } from 'react-native';
import { AsyncStorage } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notepad List"
          component={NotepadList}
          options={{
            headerRight: (navigation) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("NewNotepad")}
              >
                <Text style={{ fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Notepad" component={Notepad} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Works
function Notepad({ route }){
  const { name, value } = route.params
  const [text, setText] = useState(value)
  saveNote(name, text)
  return (
    <View style={{padding: 25}}>
      <TextInput 
      style={{fontSize: 25}} 
      multiline
      onChangeText={setText}>
        <Text>{value}</Text>
      </TextInput>
    </View>
  )
}



function NotepadList(){
  const [notepads, setNotepads] = useState([])
  const [newNoteName, setNewNoteName] = useState("")
  const navigation = useNavigation()
  const buttonHandler = (name, value) => {
    navigation.navigate('Notepad', { name: name, value: value })
  }
  const buttonHandler2 = (name) => {
    const foundNotes = notepads.filter(note => note[0] === newNoteName);
    if(foundNotes.length == 0) {
      console.log('Saving new notepad')
      saveNote(name, "")
    } else {
      alert('A note already exists with this name')
    }
  }
  
  useEffect(() => {
    retrieveAllNotes().then(values => {
      setNotepads(values)
    })
  })

  return (
    <View style={{flex: 1, padding: 15}}>
      {notepads.map(notepad => (
        <View key={notepad[0]} >
          <TouchableOpacity
          onPress={() => buttonHandler(notepad[0], notepad[1])}>
            <Text style={{fontSize: 25, paddingTop: 11}}>
              {notepad[0]}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text>
        <Text style={{fontSize: 25}}>Create New Note</Text>
      </Text>
      <TextInput placeholder='name' onChangeText={setNewNoteName}/>
      <Button
      title='+'
      onPress={() => buttonHandler2(newNoteName)}/>
    </View>
  )
}


const retrieveAllNotes = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const values = await AsyncStorage.multiGet(keys)
    return values
  } catch (error) {
    console.log(error)
  }
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


// insert function here
  /*
  useEffect(() => {
    retrieveAllNotes()
  }, [])
  */