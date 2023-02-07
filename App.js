import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Button } from 'react-native';
import { AsyncStorage } from 'react-native'
import React, { useState, useEffect } from 'react'


const returnButton = () => {
  console.log('returning')
  menu = true
  console.log('menu: ' + menu)
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

function notepad(){
  const [text, setText] = useState("");
  
  const handleSave = () => {
    saveNote('tempNote', text)
  };

  const handleReturn = () => {
    returnButton()
  };

  return (
    <View style={notepadStyles.container}>
      <TouchableOpacity style={notepadStyles.returnButtonContainer}>
        <Button
          style={notepadStyles.returnButton}
          title="< Return"
          onPress={handleReturn}
        />
      </TouchableOpacity>
      <TextInput 
      style={notepadStyles.textInput} 
      placeholder="Enter text..."
      multiline
      onChangeText={setText}>
        {}
      </TextInput>
      <View
      style={notepadStyles.saveButton}>
        <Button
          title='Save'
          onPress={handleSave}/>
      </View>
      
    </View>
  );
}

function notepadList(){
  const [keys, setKeys] = useState([]);
  const handlePress = async (key) => {
    const value = await AsyncStorage.getItem(key);
    console.log('key pressed: ' + value)
  }
  const retrieveAllNotes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      setKeys(keys)
    } catch ( error ) {
      console.log(error)
    }
  };
  useEffect(() => {
    retrieveAllNotes()
  }, []);

  const keyList = keys.map(key => {
    return (
      <TouchableOpacity key={key} onPress={() => handlePress(key)}>
        <Text>{key}</Text>
      </TouchableOpacity>
    )
  })
  
  return (
    <View style={notepadListStyles.container}>
      <Text>Notepad List</Text>
      {keyList}
    </View>
  )
}

export default function App() {
  const menu = false
  if(menu){
    return notepadList()
  } else {
    return notepad()
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
