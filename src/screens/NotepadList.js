import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react'

import RetrieveAllNotes from "../utilities/RetrieveAllNotes"
import CreateAndValidateNewNote from "../utilities/CreateAndValidateNewNote"



export default function NotepadList(){
    const navigation = useNavigation();
    const [notepads, setNotepads] = useState([]);
    const [newNoteName, setNewNoteName] = useState("");
  
    const button_openNotepad = (name, value) => {
      navigation.navigate("Notepad", { name: name, value: value });
    };
  
    const button_createNewNotepad = (name) => {
      CreateAndValidateNewNote(name, notepads)
    };
  
  
    useEffect(() => {
      RetrieveAllNotes().then((values) => {
        setNotepads(values);
      });
    });
  
    return (
      <View 
      style={{ flex: 1, padding: 15 }}
      >
        {notepads.map((notepad) => (
          <View key={notepad[0]}>
            <TouchableOpacity
              onPress={() => button_openNotepad(notepad[0], notepad[1])}
            >
              <Text style={{ fontSize: 25, paddingTop: 11 }}>{notepad[0]}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text>
          <Text style={{ fontSize: 25 }}>Create New Note</Text>
        </Text>
          <TextInput placeholder="name" onChangeText={setNewNoteName} />
        <Button 
        title="+" 
        onPress={() => button_createNewNotepad(newNoteName)} />
      </View>
    );
  }
