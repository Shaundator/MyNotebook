import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import SaveNote from '../utilities/SaveNote'
import DeleteNote from '../utilities/DeleteNote'


export default function Notepad({ route }){
  const navigation = useNavigation();
    const { name, value } = route.params
    const [text, setText] = useState(value)
    const buttonHandler = () => {
      DeleteNote(name)
      navigation.navigate("Notepad List");

    }
    SaveNote(name, text)
    return (
      <View style={{padding: 25}}>
        <View style={NotepadStyles.name}>
          <Text style={NotepadStyles.nameText}>{name}</Text>
        </View>
        <TextInput 
        style={{fontSize: 25, marginTop: 25}} 
        multiline
        onChangeText={setText}>
          <Text>{value}</Text>
        </TextInput>
        <View style={{marginTop: 25}}>
        <Button
        title='DELETE'
        onPress={buttonHandler}
        />
        </View>
      </View>
    )
  }
  
  const NotepadStyles = StyleSheet.create({
    container: {},
    name: {
      borderRadius: 15,
      padding: 15,
      alignItems: 'center',
      backgroundColor: 'lightgrey'
    },
    nameText: {
      fontSize: 25

    }
  })