import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'

import RetrieveAllNotes from "../utilities/RetrieveAllNotes"
import CreateAndValidateNewNote from "../utilities/CreateAndValidateNewNote"



  
export default function NotepadList(){
    const navigation = useNavigation();
    const [notepads, setNotepads] = useState([]);
    const [newNoteName, setNewNoteName] = useState("");
  
    const button_test = () =>  {
      console.log('test button clicked')
      navigation.navigate('Test')
    }
    const button_openNotepad = (name, value) => {
      navigation.navigate("Notepad", { name: name, value: value });
    };
  
    const button_createNewNotepad = (name) => {
      CreateAndValidateNewNote(name, notepads)
      navigation.navigate("Notepad", { name: name, value: "" });
    };
  
  
    useEffect(() => {
      // Is this meant to keep using?
      RetrieveAllNotes().then((values) => {
        setNotepads(values);
      });
    });
  
    return (
      <SafeAreaView style={NotepadListStyles.container}>
        <Button
        title='Test Button'
        onPress={button_test}
        />
        <ScrollView style={NotepadListStyles.scrollView}>
          {notepads.map((notepad) => (
            <View key={notepad[0]}>
              <TouchableOpacity style={NotepadListStyles.listedNote}
                onPress={() => button_openNotepad(notepad[0], notepad[1])}
              >
                <Text style={NotepadListStyles.listedNoteText}>
                  {notepad[0]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 25, marginTop: 25 }}>Create New Note</Text>
          </View>
          <View style={NotepadListStyles.createNewNoteTextContainer}>
          <TextInput
            placeholder="name"
            onChangeText={setNewNoteName}
            style={NotepadListStyles.createNewNoteTextInput}
          />
          </View>
          <TouchableOpacity
            style={NotepadListStyles.createNewNoteButton}
            onPress={() => button_createNewNotepad(newNoteName)}
          >
            <Text style={NotepadListStyles.createNewNoteButtonText}>
              Create New Note
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const NotepadListStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    scrollView: {
    },
    createNewNoteTextContainer: {

    },
    createNewNoteButton: {
      marginTop: 15,
      backgroundColor: 'grey',
      width: 150,
      alignSelf: 'center',
      borderRadius: 15,
    },
    createNewNoteButtonText: {
      fontSize: 18,
      padding: 5,
    },
    createNewNoteTextInput: {
      marginTop: 15,
      borderWidth: 1,
      padding: 15,
      borderStyle: 'solid',
      fontSize: 19,
      alignSelf: 'flex-start'
    },
    listedNote: {
      marginTop: 10,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderStyle: 'solid',
    }, 
    listedNoteText: {
      fontSize: 25, 
    }
  });
