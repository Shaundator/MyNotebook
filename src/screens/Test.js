import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import SaveNote from '../utilities/SaveNote'

import { collection, addDoc, query, onSnapshot } from 'firebase/firestore'
import { database } from '../../config/firebase';
// import auth from '@react-native-firebase/auth';

/* TBN
const readDB = () => {
    const reference = collection(database, noteColl)
    const q = query(reference, ref => ref.orderBy('createdAt', 'desc'));
    onSnapshot(q, snapshot => {
        console.log('data incoming')
    })
}
*/
/*
async function signUp(email, password) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      console.error(error);
    }
  }
*/

import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});

export default function Test(){
    const noteColl = "notes"
    const testNote = {
        name: "Tester Noter Firebaser2",
        value: "Content for firebaser noter2"
    }
    const testNote2 = {
        name: "Tester Noter OLder",
        value: "Content for older noter"
    }

    const button_saveOld = () => {
        console.log('saving old: ' + testNote2)
        SaveNote(testNote2.name, testNote2.value)
    }
    
    const button_saveNew = () => {
        console.log('saving new: ' + testNote)
        addDoc(collection(database, noteColl), testNote)
    }

    const button_signUp = () => {
        email = 'batmansmacker123@gmail.com'
        password = 'TesterData123'
        console.log('signing up')
        try {
            const userCredential = auth().createUserWithEmailAndPassword(email, password);
            console.log('User account created & signed in!');
          } catch (error) {
            console.error(error);
          }
    }
    const button_signIn = () => {}
    return (
        <View>
            <Text>TESTING FIREBASE</Text>
            <Button
            title='old save'
            onPress={button_saveOld}
            />
            <Button
            title='firebase save'
            onPress={button_saveNew}
            />
            <Button
            title='Sign Up'
            onPress={button_signUp}
            />
            <Button
            title='Sign In'
            onPress={button_signIn}
            />
        </View>
    )
}